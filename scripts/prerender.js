import fs from "node:fs/promises";
import path from "node:path";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { createServer } from "vite";

const OUT = path.resolve("build/index.html");

//The prerendered block is hidden, so injected <style> tags are dead weight, and
//<img> tags would make the browser download every asset a second time before
//React removes the block.  Alt text is kept as plain text.
function clean(html) {
  return html
    .replace(/<style[^>]*>[\s\S]*?<\/style>/g, "")
    .replace(/<img\b[^>]*\balt="([^"]*)"[^>]*>/g, " $1 ")
    .replace(/<img\b[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function section(title, node) {
  return `<section><h2>${title}</h2>${clean(renderToStaticMarkup(node))}</section>`;
}

const server = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
  logLevel: "warn",
});

try {
  const [welcomeUtils, travel, experience, projects] =
    await Promise.all([
      server.ssrLoadModule("/src/utils/welcome-content-utils.jsx"),
      server.ssrLoadModule("/src/utils/travel-locations.js"),
      server.ssrLoadModule("/src/components/page-content/experience-content.jsx"),
      server.ssrLoadModule("/src/components/page-content/projects-content.jsx"),
    ]);

  const parts = [];

  //Welcome is assembled from its data rather than its component because the
  //travel map is a React.lazy import that cannot resolve during a sync render.
  //The country list carries the same information for a reader anyway.
  for (const entry of welcomeUtils.welcomeContent) {
    if (entry.header === "Places I've Traveled") continue;
    parts.push(
      section(
        entry.header,
        typeof entry.textcontent === "string"
          ? React.createElement("p", null, entry.textcontent)
          : entry.textcontent
      )
    );
  }

  const countries = [
    ...new Set(travel.travelLocations.map((l) => l.country)),
  ].sort();
  parts.push(
    section(
      "Places I've Traveled",
      React.createElement(
        "ul",
        null,
        countries.map((c) => React.createElement("li", { key: c }, c))
      )
    )
  );

  parts.push(section("Experience", React.createElement(experience.default)));
  parts.push(section("Projects", React.createElement(projects.default)));

  const block =
    `<div id="sr-content" class="sr-only">` +
    `<h1>Sita Robinson — Software Developer</h1>` +
    parts.join("") +
    `</div>`;

  let html = await fs.readFile(OUT, "utf8");
  if (html.includes('id="sr-content"')) {
    throw new Error("build/index.html already contains a prerendered block");
  }
  html = html.replace("</body>", `    ${block}\n  </body>`);
  await fs.writeFile(OUT, html);

  const kb = (Buffer.byteLength(block) / 1024).toFixed(1);
  console.log(`prerender: injected ${kb} kB of static content into build/index.html`);
} finally {
  await server.close();
}

//This file contains the content used for the welcome section of the application.  Rendered in welcome-content.js

import { lazy, Suspense } from "react";
import { SkillsCard, Skeleton, WhiteCard } from "../components/export-components";
import { travelLocations } from "./travel-locations";

//Leaflet is a large dependency, so the map is code split out of the main bundle
//and only downloaded once the rest of the page has rendered.
const TravelMap = lazy(() => import("../components/reusable-components/travel-map"));

export const welcomeContent = [
  {
    header: "About Me",
    textcontent: (
      <WhiteCard>
        <p>
          I'm a Lead Software Engineer who has spent six years building web applications end to end,
          from React frontends to the APIs behind them. For the past four years I've been at Booz
          Allen Hamilton working on Recreation.gov, the platform people use to discover and book
          campsites, permits, and tours across national parks and federal lands. Before that, I spent two
          years at Vanguard building the Java and Spring APIs supporting their investment platform.
        </p>
        <p>
          I hold a BS in Data Science with a CS minor from Drexel University and an MBA from the
          University of Maryland.
        </p>
        <p>
          Outside of work, my hobbies include building side projects, crochet (amigurumi), landscape
          photography, quilting, playing Scrabble and traveling around the world. I am a Northern
          Virginia/Metro D.C. native.
        </p>
      </WhiteCard>
    ),
  },
  {
    header: "Skills",
    textcontent: (
      <div className="column">
        <div className="row">
          <SkillsCard
            category="Frontend"
            groups={[
              { label: "Languages", skills: "HTML/CSS, SCSS, JavaScript, Typescript" },
              { label: "Frameworks", skills: "React.js, Next.js" },
              { label: "State & Data", skills: "Redux, TanStack Query" },
              { label: "Build", skills: "Webpack, Vite" },
            ]}
          />
          <SkillsCard
            category="Backend"
            groups={[
              { label: "Languages", skills: "Java, Python" },
              { label: "Frameworks", skills: "Spring Framework, Flask" },
              { label: "Databases", skills: "SQL, Firebase" },
              { label: "Build", skills: "Maven" },
            ]}
          />
        </div>
        <div className="row">
          <SkillsCard
            category="Infrastructure & Operations"
            groups={[
              { label: "Deploy", skills: "Jenkins, ArgoCD, Github Actions, Bamboo" },
              { label: "Cloud", skills: "AWS, Google Cloud" },
              { label: "Monitoring", skills: "Splunk, Honeycomb" },
            ]}
          />
          <SkillsCard
            category="Design & Tooling"
            groups={[
              { label: "Design & UX", skills: "Figma, Responsive Design, Accessibility" },
              { label: "AI", skills: "Claude Code, Codex" },
            ]}
          />
        </div>
      </div>
    ),
  },
  {
    header: "Places I've Traveled",
    textcontent: (
      //The fallback matches the map's height so nothing shifts when it loads.
      <Suspense fallback={<Skeleton height="640px" />}>
        <TravelMap locations={travelLocations} />
      </Suspense>
    ),
  },
];

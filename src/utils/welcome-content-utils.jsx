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
          <SkillsCard category="Frameworks/Libraries" skills="React.js, Spring Framework, Flask, Next.js" />
          <SkillsCard category="State Management" skills="Redux" />
        </div>
        <div className="row">
          <SkillsCard category="JS Build Systems" skills="Webpack, Vite" />
          <SkillsCard category="Languages" skills="HTML/CSS, SCSS, JavaScript, Node.js, Python, Java, Typescript" />
        </div>
        <div className="row">
          <SkillsCard category="Databases" skills="SQL, Firebase, MongoDB Atlas" />
          <SkillsCard category="Tools" skills="Jupyter Notebook, Tableau" />
        </div>
        <div className="row">
          <SkillsCard category="Monitoring Tools" skills="Splunk, Honeycomb" />
          <SkillsCard category="Cloud Computing" skills="AWS, Google Cloud" />
        </div>
        <div className="row">
          <SkillsCard category="AI Tools" skills="Github Copilot, Amazon Q, Cursor" />
          <SkillsCard category="UX Collaboration & Prototyping" skills="Figma, MockFlow, Responsive Design, Accessibility (WCAG)" />
        </div>
        <div className="row">
          <SkillsCard category="Other" skills="Jenkins, ArgoCD, Github Actions, Bamboo, Git, Bitbucket, Java Debugger, Chrome Dev Tools" />
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

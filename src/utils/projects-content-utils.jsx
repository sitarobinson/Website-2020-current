//This file contains the content used for projects.  Rendered in projects-content.js

import { groupArrayBySize } from "./array-utils";
import BayBenedictProj from "../project-images/BayBenedictProj.webp";
import SnailandProj from "../project-images/SnailandProj.webp";
import FamilyTreeProj from "../project-images/FamilyTreeProj.webp";
import FinProj from "../project-images/FinProj.webp";
import ToastProj from "../project-images/ToastProj.webp";
import ZestyProj from "../project-images/ZestyProj.webp";

export const projectsContent = [
  {
    title: "Bay Benedict Restaurant",
    image: BayBenedictProj,
    description: (
      <div>
        A frontend-focused demo of a Chesapeake-themed brunch restaurant
        experience, showcasing personalized menu recommendations and a simulated
        cart-to-checkout ordering flow.  Built with Next.js, Tailwind CSS and hosted via Vercel.  Development was supported by AI-assisted workflows using Claude Code.
      </div>
    ),
    socialBoxOptions: [
      {
        icon: "code",
        url: "https://github.com/sitarobinson/Bay-Benedict-Restaurant",
        label: "Bay Benedict Restaurant Github code",
      },
      {
        icon: "link",
        url: "https://bay-benedict-restaurant.vercel.app/",
        label: "Bay Benedict Restaurant link",
      },
    ],
  },
  {
    title: "Family Tree",
    image: FamilyTreeProj,
    description: (
      <div>
        An interactive family tree visualization built with React and D3.js.
        Browse through expandable family cards organized by founding couples,
        drill into generations, view ancestor lines, and explore family photos,
        or switch to a zoomable tree view with hover tooltips and biographical
        details. Search by name to jump to any family member across both views.
        Hosted on Firebase.
      </div>
    ),
    socialBoxOptions: [
      {
        icon: "code",
        url: "https://github.com/sitarobinson/FamilyTree",
        label: "Family Tree Github code",
      },
      {
        icon: "link",
        url: "https://smrfamilytree.web.app/",
        label: "Family Tree link",
      },
    ],
  },
  {
    title: "Snailand",
    image: SnailandProj,
    description: (
      <div>
        Snailand is a snail-themed endless runner built with React, featuring
        character selection, a canvas-based game loop with obstacles and star
        pickups, plus sound effects.
      </div>
    ),
    socialBoxOptions: [
      {
        icon: "code",
        url: "https://github.com/sitarobinson/Snailand",
        label: "Snailand Github code",
      },
      {
        icon: "link",
        url: "https://snailand.web.app/",
        label: "Snailand link",
      },
    ],
  },

  {
    title: "Fin",
    image: FinProj,
    description: (
      <div>
        An application used to keep track of deposits and withdraws in an
        account. Created using Angular and Spring (Java) API. The Angular
        frontend application is deployed using Firebase Hosting. The Spring API
        backend is deployed using Heroku.
      </div>
    ),
    socialBoxOptions: [
      {
        icon: "code",
        url: "https://github.com/sitarobinson/Fin",
        label: "Fin Github code",
      },
    ],
  },
  {
    title: "Toast",
    image: ToastProj,
    description: (
      <div>
        A financial planning application for financial advisors and their
        clients using React and Django. Developed the React portion of the
        application and deployed to Firebase Hosting.
      </div>
    ),
    socialBoxOptions: [
      {
        icon: "code",
        url: "https://github.com/cci-toast",
        label: "Toast Github code",
      },
      {
        icon: "video",
        url: "https://youtu.be/nUC91Z_Uhfw",
        label: "Toast video",
      },
    ],
  },
  {
    title: "Zesty",
    image: ZestyProj,
    description: (
      <div>
        A recipe management and grocery list generator app created using HTML,
        Javascript, Bootstrap, Jinja and Flask (Python) hosted on a Google Cloud
        VM instance.
      </div>
    ),
    socialBoxOptions: [
      {
        icon: "code",
        url: "https://github.com/sitarobinson/Zesty",
        label: "Zesty Github code",
      },
      {
        icon: "video",
        url: "https://youtu.be/5NR1RibM4Mc",
        label: "Zesty video",
      },
    ],
  },
];

//Groups projects into arrays of two to make it easier to put two projects on each row.
export const projectGroup = groupArrayBySize(projectsContent, 2);

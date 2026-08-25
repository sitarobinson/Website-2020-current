//This file contains the data used for the header, navbar and footer in app.js

import { lazy } from "react";
//Welcome is the tab shown on load, so it stays in the main bundle.  The rest are
//code split and only downloaded when their tab is selected.
import WelcomeContent from "../components/page-content/welcome-content";
import { ContentSkeleton, PhotoGridSkeleton } from "../components/export-components";

const ExperienceContent = lazy(() =>
  import("../components/page-content/experience-content")
);
const ProjectsContent = lazy(() =>
  import("../components/page-content/projects-content")
);
const PhotosContent = lazy(() =>
  import("../components/page-content/photos-content")
);
const TestimonialContent = lazy(() =>
  import("../components/page-content/testimonial-content")
);

//Data used for the header.
export const headerData = {
  imgdir: "../me.png",
  header: "Sita Robinson",
  subheader: "Software Developer",
};

//Social box icons and urls.  Part of the header but is optional if you wish.
export const socialBoxOptions = [
  { icon: "envelope", url: "mailto:sita.robinson@gmail.com", label: "Email contact" },
  { icon: "github", url: "https://github.com/pinkdragon1000", label: "GitHub profile" },
  { icon: "linkedin", url: "https://www.linkedin.com/in/sitarobinson/", label: "LinkedIn profile" },
];

//Navbar options and components used in the content of the page.  The fallback is
//shown while a code split tab downloads, so it is shaped like that tab's content.
export const navbarOptions = [
  {
    name: "Welcome",
    component: <WelcomeContent />,
  },
  {
    name: "Experience",
    component: <ExperienceContent />,
    fallback: <ContentSkeleton />,
  },
  {
    name: "Projects",
    component: <ProjectsContent />,
    fallback: <ContentSkeleton />,
  },
  {
    name: "Photos",
    component: <PhotosContent />,
    fallback: <PhotoGridSkeleton />,
  },
  {
    name: "Testimonials",
    component: <TestimonialContent />,
    fallback: <ContentSkeleton />,
  },
];

//Data used in the footer.
export const footerData = "Ⓒ Sita Robinson 2025";

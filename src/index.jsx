import "./index.css";
import App from "./components/app";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);

//#sr-content is the prerendered copy of the page that crawlers read before any
//JavaScript runs (see scripts/prerender.js).  It is a sibling of #root, so React
//never clears it, and leaving it in place would make screen readers announce the
//whole site twice.
document.getElementById("sr-content")?.remove();

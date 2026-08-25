//style-it ships CommonJS, and Rollup's interop hands back the module's exports
//object rather than the Style class itself, so Style.it comes out undefined.
//Every component imports "style-it", which vite.config.js aliases here so the
//unwrapping happens in exactly one place.
import StyleItModule from "style-it/lib/index.js";

const Style =
  typeof StyleItModule?.it === "function" ? StyleItModule : StyleItModule?.default;

export default Style;

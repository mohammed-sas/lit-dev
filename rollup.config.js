import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/index.js", // Use the new entry point file
  output: {
    file: "dist/bundle.js", // Single output file for all components
    format: "esm", // ES module format for modern JavaScript
    sourcemap: false,
  },
  plugins: [
    resolve(), // Resolve modules from node_modules
    commonjs(), // Convert CommonJS to ES modules
    production && terser(), // Minify for production
  ],
};

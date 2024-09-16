import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default [
  {
    input: "src/components/fc-icon.js",
    output: {
      file: "dist/fc-icon.js",
      format: "esm", // immediately-invoked function expression — suitable for <script> tags
      sourcemap: false,
    },
    plugins: [
      resolve(), // tells Rollup how to find date-fns in node_modules
      commonjs(), // converts date-fns to ES modules
      production && terser(), // minify, but only in production
    ],
  },
  {
    input: "src/components/fc-image.js",
    output: {
      file: "dist/fc-image.js",
      format: "esm", // immediately-invoked function expression — suitable for <script> tags
      sourcemap: false,
    },
    plugins: [
      resolve(), // tells Rollup how to find date-fns in node_modules
      commonjs(), // converts date-fns to ES modules
      production && terser(), // minify, but only in production
    ],
  },
];

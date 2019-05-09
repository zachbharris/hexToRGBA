import pkg from "./package.json";

export default [
  {
    input: "src/index.js",
    output: {
      file: "dist/bundle.js",
      format: "cjs"
    }
  },
  {
    input: "src/index.js",
    output: { file: pkg.main, format: "cjs" }
  }
];

import { build } from "esbuild";
import fs from "node:fs";
import path from "node:path";

const pkg = JSON.parse(fs.readFileSync(path.resolve("./package.json")));

const external = [
  ...Object.keys({
    ...pkg.dependencies,
    ...pkg.peerDependencies,
  }),
  "../dist/server/entry-server.js",
];

build({
  entryPoints: ["./_start.ts"],
  outdir: "dist",
  target: "es2022",
  platform: "node",
  bundle: true,
  minify: false,
  sourcemap: true,
  format: "esm",
  outExtension: {
    ".js": ".mjs",
  },
  banner: {
    js: `
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
  `,
  },
  external,
})
  .then(() => {
    console.log("build complete!");
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

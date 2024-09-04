import { build, emptyDir } from "@deno/dnt";

await emptyDir("./npm");

await build({
  entryPoints: ["./mod.ts", "./types.ts"],
  outDir: "./npm",
  shims: {
    // see JS docs for overview and more options
    deno: true,
  },
  package: {
    // package.json properties
    name: "xcodereleases-deno-sdk",
    version: Deno.args[0],
    description: "xcodereleases.com Deno SDK",
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://github.com/whywaita/xcodereleases-deno-sdk.git",
    },
    bugs: {
      url: "https://github.com/whywaita/xcodereleases-deno-sdk/issues",
    },
    typeCheck: "both",
  },
  postBuild() {
    // steps to run after building and before running the tests
    Deno.copyFileSync("LICENSE", "npm/LICENSE");
    Deno.copyFileSync("README.md", "npm/README.md");
  },
});
import { fileURLToPath } from "node:url";

export default function () {
  console.log("env-node module reporting for duty");

  return {
    src: "src/",
    boilerplate: fileURLToPath(new URL("boilerplate/", import.meta.url)),
  };
}

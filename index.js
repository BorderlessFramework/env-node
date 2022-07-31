import { fileURLToPath } from "node:url";

export default function (config) {
  return {
    src: "src/",
    boilerplate: fileURLToPath(new URL("boilerplate/", import.meta.url)),
    buildCommand: "npm run build",
    buildOutputFolder: "build/",
    getDeployCommand: (config) =>
      `echo "Deploying to ${config.host} using provider: '${config.provider}'"`,
  };
}

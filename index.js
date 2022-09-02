import { fileURLToPath } from "node:url";

import { BorderlessEnvironment } from "@borderlessjs/borderless";

export default class NodeEnvironment extends BorderlessEnvironment {
  constructor(name, config) {
    super(
      name,
      config,
      "src",
      "build",
      fileURLToPath(new URL("boilerplate/", import.meta.url)),
      "npm run build"
    );
  }

  getDeployCommand(deploymentConfig) {
    `echo "Deploying to ${deploymentConfig.host} using provider: '${deploymentConfig.provider}'"`;
  }
}

import { config } from "./config";
import * as app from "./app";

const server = app.listen(config.port, async () => {
  console.log(`Server listening on port: ${config.port}`);
});

export = server;

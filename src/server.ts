import { config } from "./config";
import app from "./app";

console.log("Running...");

const server = app.listen(config.port, async () => {
  console.log(`Server listening on port: ${config.port}`);
});

export default server;

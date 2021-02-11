import { config } from "./config";
import app from "./app";
import * as listStorage from "./storage/list";

(async () => {
  await listStorage.createListElement("Hello, list!");
  await listStorage.createListElement("Hi, Prisma!");

  let elems = await listStorage.getListElements();

  console.log(elems);
})();

console.log("Running...");

const server = app.listen(config.port, async () => {
  console.log(`Server listening on port: ${config.port}`);
});

export default server;

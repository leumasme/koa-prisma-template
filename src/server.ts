import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "koa2-cors";
import logger from "koa-logger";

import { config } from "./config";

import helloRoutes from "./routes/hello";

const app = new Koa();

app.use(bodyParser());
app.use(
  cors({
    origin: "*",
  })
);
app.use(logger());

app.use(helloRoutes.routes());

const server = app
  .listen(config.port, async () => {
    console.log(`Server listening on port: ${config.port}`);
  })
  .on("error", (err) => {
    console.error(err);
  });

export default server;

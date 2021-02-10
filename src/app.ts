import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "koa2-cors";
import logger from "koa-logger";

import helloRoutes from "./routes/hello";
import listRoutes from "./routes/list";

const app = new Koa();

app.use(bodyParser());
app.use(
  cors({
    origin: "*",
  })
);
app.use(logger());

app.use(helloRoutes.routes());
app.use(listRoutes.routes());

export = app;

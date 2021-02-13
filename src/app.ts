import Koa, { HttpError } from "koa";
import bodyParser from "koa-bodyparser";
import cors from "koa2-cors";
import logger from "koa-logger";

import helloRoutes from "./routes/hello";
import listRoutes from "./routes/list";

const app = new Koa();

app.use(async (ctx: Koa.BaseContext, next: () => Promise<any>) => {
  try {
    await next();
    if (ctx.type == "application/json") {
      ctx.body = {
        success: true,
        data: ctx.body,
      };
    }
  } catch (e) {
    // HttpError ClientError
    if (e instanceof HttpError) {
      ctx.body = {
        success: false,
        message: e.message,
      };
      ctx.type = "application/json";
      ctx.status = e.status;
      return;
    }
    console.log(ctx);
    throw e;
  }
});
app.use(bodyParser());
app.use(
  cors({
    origin: "*",
  })
);
app.use(logger());

app.use(helloRoutes.routes());
app.use(listRoutes.routes());

export default app;

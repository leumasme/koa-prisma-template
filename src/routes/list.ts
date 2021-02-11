import Router from "koa-router";
import * as list from "../storage/list";

const router = new Router();

var elems: string[] = [];

router
  .post(`/list`, async (ctx) => {
    if (
      ctx.request.body == null ||
      ctx.request.body == undefined ||
      typeof ctx.request.body.data != "string"
    ) {
      ctx.throw("Invalid Body", 400);
    }

    await list.createListElement(ctx.request.body.data);

    ctx.body = {
      success: true,
    };
    ctx.status = 201;
  })
  .get(`/list`, async (ctx) => {
    ctx.body = {
      success: true,
      data: await list.getListElements(),
    };
  });

export default router;

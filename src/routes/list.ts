import Router from "koa-router";
import * as list from "../storage/list";

const router = new Router();

var elems: string[] = [];

router
  .post(`/list`, async (ctx: any) => {
    if (
      ctx.request.body == null ||
      ctx.request.body == undefined ||
      typeof ctx.request.body.data != "string"
    ) {
      ctx.throw(400, "Invalid Body");
    }

    await list.createListElement(ctx.request.body.data);

    ctx.body = {
      timestamp: new Date().getTime(),
    };
    ctx.status = 201;
  })
  .get(`/list`, async (ctx) => {
    ctx.body = {
      elements: await list.getListElements(),
    };
  })
  .delete(`/list`, async (ctx) => {
    await list.clearList();
    ctx.body = {
      timestamp: new Date().getTime(),
    };
  });

export default router;

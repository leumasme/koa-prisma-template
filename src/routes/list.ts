import Router from "koa-router";
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

    elems.push(ctx.request.body.data);

    ctx.body = {
      success: true,
    };
    ctx.status = 201;
  })
  .get(`/list`, async (ctx) => {
    ctx.body = {
      success: true,
      data: elems,
    };
  });

export default router;

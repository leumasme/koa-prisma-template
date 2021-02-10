import Router from "koa-router";
const router = new Router();

router.get(`/hello`, async (ctx) => {
  ctx.body = {
    status: "success",
    data: "hello",
  };
});

export default router;

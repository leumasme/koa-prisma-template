import Router from "koa-router";
const router = new Router();

router.get(`/hello`, async (ctx) => {
  ctx.body = {
    message: "hello",
  };
});

export default router;

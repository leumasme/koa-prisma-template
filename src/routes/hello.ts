import Router from "koa-router";
const router = new Router();

router.get(`/hello`, async (ctx) => {
  try {
    ctx.body = {
      status: "success",
      data: "hello",
    };
  } catch (err) {
    console.error(err);
  }
});

export default router;

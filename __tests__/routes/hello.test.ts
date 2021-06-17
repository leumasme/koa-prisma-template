import app from "../../src/app";
import request from "supertest";

const agent = request.agent(app.callback());
agent.host("dev.demodomain.local");

describe("routes/hello", () => {
  it("should hello", async () => {
    const response = await agent.get("/hello");
    expect(response.status).toEqual(200);
    expect(response.type).toEqual("application/json");
    expect(response.body.success).toEqual(true);
    expect(response.body.data.message).toEqual("hello");
  });
});

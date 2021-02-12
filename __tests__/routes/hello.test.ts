import server from "../../src/app";
import request from "supertest";

describe("routes/hello", () => {
  it("should hello", async () => {
    const response = await request(server.callback()).get("/hello");
    expect(response.status).toEqual(200);
    expect(response.type).toEqual("application/json");
    expect(response.body.success).toEqual(true);
    expect(response.body.data.message).toEqual("hello");
  });
});

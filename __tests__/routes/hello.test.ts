import server from "../../src/app";
import request from "supertest";

describe("routes/hello", () => {
  it("should hello", async () => {
    const response = await request(server.callback()).get("/hello");
    expect(response.status).toEqual(200);
    expect(response.type).toEqual("application/json");
    expect(response.body.status).toEqual("success");
    expect(response.body.data).toEqual("hello");
  });
});

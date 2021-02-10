import server from "../../src/server";
import request from "supertest";

// close the server after each test
afterEach((done) => {
  server.close(done);
});

describe("routes/hello", () => {
  it("should hello", async () => {
    const response = await request(server).get("/hello");
    expect(response.status).toEqual(200);
    expect(response.type).toEqual("application/json");
    expect(response.body.status).toEqual("success");
    expect(response.body.data).toEqual("hello");
  });
});

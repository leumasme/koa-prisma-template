import server from "../../src/app";
import request from "supertest";

describe("routes/list", () => {
  it("should add an item to the list", async () => {
    const response = await request(server.callback()).post("/list").send({ "data": "My Element" });
    expect(response.status).toEqual(201);
  });
  it("should list all added items", async () => {
    const response = await request(server.callback()).get("/list");
    expect(response.status).toEqual(200);
    expect(response.type).toEqual("application/json");
    expect(response.body).toEqual(["My Element"]);
  });
});

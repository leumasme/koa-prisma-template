import server from "../../src/app";
import request from "supertest";

describe("routes/list", () => {
  it("should add an item to the list", async () => {
    let response = await request(server.callback())
      .post("/list")
      .send({ data: "My Element" });
    expect(response.status).toEqual(201);
    expect(response.type).toEqual("application/json");
    expect(response.body).toEqual({ success: true });
  });
  it("should reject invalid post data", async () => {
    let response = await request(server.callback())
      .post("/list")
      .send("Hehe stinky");
    expect(response.status).toEqual(400);
    expect(response.type).toEqual("application/json");
    expect(response.body).toEqual({
      success: false,
      message: "Invalid Body",
    });
  });
  it("should list all added items", async () => {
    let response = await request(server.callback()).get("/list");
    expect(response.status).toEqual(200);
    expect(response.type).toEqual("application/json");
    expect(response.body).toEqual({
      success: true,
      data: ["My Element"],
    });
  });
});

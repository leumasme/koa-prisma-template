import app from "../../src/app";
import request from "supertest";
import { clearList } from "./../../src/storage/list";

const agent = request.agent(app.callback());

beforeAll((done) => {
  clearList().then(done);
});

describe("routes/list", () => {
  it("should reject invalid post data", async (done) => {
    // Post Invalid Data and confirm unsuccessful response
    let response = await agent.post("/list").send("Hehe stinky");
    expect(response.status).toEqual(400);
    expect(response.type).toEqual("application/json");
    expect(response.body).toEqual({
      success: false,
      message: "Invalid Body",
    });
    done();
  });
  it("should provide consistent storage", async (done) => {
    // Add to List
    let response = await agent.post("/list").send({ data: "My Element" });
    expect(response.status).toEqual(201);
    expect(response.type).toEqual("application/json");
    expect(response.body.success).toEqual(true);
    expect(response.body.data.timestamp).toBeCloseTo(new Date().getTime(), -4);

    // Get List and confirm that the element was Created
    response = await agent.get("/list");
    expect(response.status).toEqual(200);
    expect(response.type).toEqual("application/json");
    expect(response.body).toEqual({
      success: true,
      data: {
        elements: ["My Element"],
      },
    });
    done();
  });
  it("should allow clearing storage", async (done) => {
    // Add to List
    let response = await agent.post("/list").send({ data: "My Element" });
    expect(response.status).toEqual(201);
    expect(response.type).toEqual("application/json");
    expect(response.body.success).toEqual(true);
    expect(response.body.data.timestamp).toBeCloseTo(new Date().getTime(), -4);

    // Clear List
    response = await agent.delete("/list");
    expect(response.status).toEqual(200);
    expect(response.type).toEqual("application/json");
    expect(response.body.success).toEqual(true);
    expect(response.body.data.timestamp).toBeCloseTo(new Date().getTime(), -4);

    // Get List and confirm that it's empty
    response = await agent.get("/list");
    expect(response.status).toEqual(200);
    expect(response.type).toEqual("application/json");
    expect(response.body).toEqual({
      success: true,
      data: {
        elements: [],
      },
    });

    done();
  });
});

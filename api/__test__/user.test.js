import app from "../server";
import * as testDB from "../config/dbTestConnect";
import supertest from "supertest";
import makeToken from "../helpers/makeToken";

const request = supertest(app);

describe("POST - /api/user/create", () => {
  let testToken;
  beforeAll(async () => {
    await testDB.connect();

    const testUserRes = await request.post("/api/testUser/makeToken").send({
      email: "testUser@test.com",
    });

    testToken = testUserRes.body.token;
  });

  afterAll(async () => {
    await testDB.clearDatabase();
    await testDB.closeDatabase();
  });

  test("Should return error message, if authentication doesn't exist.", async () => {
    const res = await request.post("/api/user/create").send({
      email: "newEmail@test.com",
    });

    expect(res.body).toEqual({
      success: false,
      message: "Invalid Authentication",
    });
  });

  test("Should return error message, if user already added.", async () => {
    const res = await request
      .post("/api/user/create")
      .set("authorization", testToken)
      .send({
        email: "testUser@test.com",
      });

    expect(res.body).toEqual({ success: false, message: "User already exist" });
  });

  test("Should return success message, if user added successfuly.", async () => {
    const res = await request
      .post("/api/user/create")
      .set("authorization", testToken)
      .send({
        email: "newEmail@test.com",
      });

    expect(res.body).toEqual({
      success: true,
      message: "Email sent successfully!",
    });
  });
});

describe("POST - /api/user/signin", () => {
  let testToken;
  beforeAll(async () => {
    await testDB.connect();

    const testUserRes = await request.post("/api/testUser/makeToken").send({
      email: "testUser@test.com",
    });

    testToken = testUserRes.body.token;
  });

  afterAll(async () => {
    await testDB.clearDatabase();
    await testDB.closeDatabase();
  });

  test("Should return error message, if user doesn't exist.", async () => {
    const res = await request.post("/api/user/signin").send({
      email: "newEmail@test.com",
    });

    expect(res.body).toEqual({ success: false, message: "Invalid email" });
  });

  test("Should return success message, if user exist.", async () => {
    const res = await request.post("/api/user/signin").send({
      email: "testUser@test.com",
    });

    expect(res.body).toEqual({
      success: true,
      message: "Email sent successfully!",
    });
  });
});

describe("GET - /api/user/info", () => {
  let testToken;
  beforeAll(async () => {
    await testDB.connect();

    const testUserRes = await request.post("/api/testUser/makeToken").send({
      email: "testUser@test.com",
    });

    testToken = testUserRes.body.token;
  });

  afterAll(async () => {
    await testDB.clearDatabase();
    await testDB.closeDatabase();
  });

  test("Should return error message, if authentication doesn't exist.", async () => {
    const res = await request.get("/api/user/info");

    expect(res.body).toEqual({
      success: false,
      message: "Invalid Authentication",
    });
  });

  test("Should return success message, if user returned successfuly.", async () => {
    const res = await request
      .get("/api/user/info")
      .set("authorization", testToken);

    expect(res.body).toEqual(
      expect.objectContaining({
        success: true,
        message: "User is successfully returned!",
      })
    );
    expect(res.body.userInfo).toEqual(
      expect.objectContaining({ email: "testUser@test.com" })
    );
  });
});

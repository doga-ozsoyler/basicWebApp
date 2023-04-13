import app from "../server";
import * as testDB from "../config/dbTestConnect";
import supertest from "supertest";

const request = supertest(app);

describe("first test", () => {
  beforeAll(async () => {
    await testDB.connect();
  });

  afterAll(async () => {
    await testDB.clearDatabase();
    await testDB.closeDatabase();
  });

  test("first test", async () => {
    expect(1).toEqual(1);
  });
});

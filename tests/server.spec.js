const request = require("supertest");
const server = require("../index");
const app = require("../index");

describe("Operaciones CRUD de cafes", () => {

    it("Devuelve estado 200", async () => {
        const { statusCode } = await request(app).get("/cafes").send();
        expect(statusCode).toBe(200);
      });
    

});

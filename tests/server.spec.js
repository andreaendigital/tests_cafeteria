const request = require("supertest");
const server = require("../index");
const app = require("../index");

describe("Operaciones CRUD de cafes", () => {

    it("Devuelve estado 200", async () => {
        const { statusCode } = await request(app).get("/cafes").send();
        expect(statusCode).toBe(200);
      });
    

      it("Devuelve un array", async () => {
        const response = await request(app).get("/cafes");
        expect(response.body).toBeInstanceOf(Array);
      });

      it("Devuelve un array con al menos un objeto", async () => {
        const response = await request(app).get("/cafes");
        expect(response.body.length).toBeGreaterThan(0);
      });
});

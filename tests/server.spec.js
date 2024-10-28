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

      it("Devuelve 404 al intentar eliminar un café con un id que no existe.", async () => {
        const response = await request(app)
          .delete(`/cafes/60`)
          .set("Authorization", `Bearer`);
        expect(response.status).toBe(404);
      });
    
      it("POST/cafes Agregar un nuevo café y devolver un código 201", async () => {
        const nuevoCafe = {
          nombre: "Café Colombiano",
        };
        const response = await request(app).post("/cafes").send(nuevoCafe);
        expect(response.status).toBe(201);
        expect(response.body).toContainEqual(nuevoCafe);
      });

     
        it("Devolver un code 400 en ruta PUT /cafes/:id si los parámetros no coinciden", async () => {
          const cafeActualizado = {
            id: 1,
            nombre: "Café Irish",
            descripcion:
              "Mezcla de whisky irlandés, una cucharada de azúcar y café, pero finalmente va cubierto por dos centímetros de crema de leche",
          };
          const response = await request(app).put("/cafes/2").send(cafeActualizado);
          expect(response.status).toBe(400);
        });
   

});

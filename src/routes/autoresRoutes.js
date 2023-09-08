import express from "express";
import AutorController from "../controllers/autorController.js";

const routes = express.Router();

routes.get("/autor", AutorController.listarAutores);
routes.post("/autor", AutorController.criarAutor);
routes.get("/autor/:id", AutorController.listarAutorPorId);
routes.put("/autor/:id", AutorController.atualizarAutorPorId);
routes.delete("/autor/:id", AutorController.removerAutorPorId);

export default routes;
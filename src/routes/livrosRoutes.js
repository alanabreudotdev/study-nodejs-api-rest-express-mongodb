import express from "express";
import LivroController from "../controllers/livroControllers.js";

//instacia metodo router do express para chamadas das rotas da aplicação
const routes = express.Router();

routes.get("/livros", LivroController.listarLivros);
routes.get("/livros/busca", LivroController.listarLivrosPorEditora);
routes.get("/livros/:id", LivroController.listarLivroPorId);
routes.post("/livros", LivroController.cadastrarLivro);
routes.put("/livros/:id", LivroController.atualizarLivroPorId);
routes.delete("/livros/:id", LivroController.removerLivroPorId);

export default routes;
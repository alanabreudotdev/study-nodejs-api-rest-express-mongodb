import express from "express";
import 'dotenv/config'

import clientes from "./models/Cliente.js";
import conectaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";


const conexao = await conectaDatabase();
conexao.on("error", console.log.bind(console, 'Erro de conexao!'));
conexao.once("open", () => {
  console.log("Conexão com o banco realizada com sucesso!");
})

const app = express();
routes(app);

app.get('/clientes', (req, res) => {
  clientes.find((err, clientes) => {
    res.status(200).json(clientes)
  });
})

app.get('/clientes/:id', (req, res) => {
  clientes.findById(req.params.id, (err, clientes) => {
    res.status(200).json(clientes);
  });

})

// app.get('/livros/:id', (req, res) => {
//   let index = buscaLivro(req.params.id);
//   res.json(livros[index]);
// })

// app.post('/livros', (req, res) => {
//   livros.push(req.body);
//   res.status(201).send('Livro foi cadastrado com sucesso')
// })

// app.put('/livros/:id', (req, res) => {
//   let index = buscaLivro(req.params.id);
//   livros[index].titulo = req.body.titulo;
//   res.json(livros);
// })

// app.delete('/livros/:id', (req, res) => {
//   let {id} = req.params;
//   let index = buscaLivro(id);
//   livros.splice(index, 1);
//   res.send(`Livros ${id} removido com sucesso`);
// })

// function buscaLivro(id) {
//   return livros.findIndex(livro => livro.id == id)
// }

export default app
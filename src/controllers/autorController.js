import { autor } from "../models/Autor.js";

class AutorController {

  static async listarAutores(req, res) {
    const getAutores = await autor.find({});
    res.status(200).json(getAutores);
  }

  static async listarAutorPorId(req, res) {
    try {
      const id = req.params.id;
      const listarAutorById = await autor.findById(id);
      res.status(200).json(listarAutorById)
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha na requisicao do autor` })
    }
  }

  static async criarAutor(req, res) {
    try {
      const novoAutor = await autor.create(req.body);
      res.status(201).json({
        message: "Autor criado com sucesso!",
        autor: novoAutor
      });
    } catch (error) {
      res.status(500).json({message: `${error.message} - falha ao criar novo autor`});
    }
  }

  static async atualizarAutorPorId(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message : "Autor Atualizado"});
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha na requisicao do autor` })
    }
  }

  static async removerAutorPorId(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndDelete(id);
      res.status(200).json({ message: "Autor excluido com sucesso!"});
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha ao excluir o autor` })
    }
  }

}

export default AutorController;
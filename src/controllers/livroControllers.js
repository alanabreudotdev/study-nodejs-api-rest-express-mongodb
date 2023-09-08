import { autor } from "../models/Autor.js";
import livros from "../models/Livro.js";

class LivroController {

  static async listarLivros(req, res) {
    //const listaLivros = await livros.find({});
    const listaLivros = await livros.find({}).populate("autor");
    res.status(200).json(listaLivros);
  }

  static async listarLivroPorId(req, res) {
    try {
      const id = req.params.id;
      const listarLivrosId = await livros.findById(id);
      res.status(200).json(listarLivrosId);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha na requisicao do livro` })
    }
  }

  static async cadastrarLivro(req, res) {
    const novoLivro = req.body;
    try {
      const autorEncontrado = await autor.findById(novoLivro.autor);
      const livroCompleto = { 
        ...novoLivro, 
        autor: { ...autorEncontrado._doc }
      };
      const livroCriado = await livros.create(livroCompleto);
      res.status(201).json({ 
        message: "Criado com sucesso.", 
        livro: livroCriado
      });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha ao cadastrar livro` });
    }
  }

  static async atualizarLivroPorId(req, res) {
    try {
      const id = req.params.id;
      await livros.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message : "Livro Atualizado"});
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha na requisicao do livro` })
    }
  }

  static async removerLivroPorId(req, res) {
    try {
      const id = req.params.id;
      await livros.findByIdAndDelete(id);
      res.status(200).json({ message: "Livro excluido com sucesso!"});
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha ao excluir o livro` })
    }
  }

  static async listarLivrosPorEditora (req, res) {
    const editora = req.query.editora;
    try {
      const livrosPorEditora = await livros.find({ editora: editora });
      res.status(200).json(livrosPorEditora);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha na busca do livro` })
    }
  }

};

export default LivroController;
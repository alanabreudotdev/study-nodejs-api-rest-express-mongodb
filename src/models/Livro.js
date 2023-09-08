import mongoose from "mongoose";
import { autor } from "./Autor.js";

const livroSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    autor: { type: String, required: true },
    editora: { type: String, required: true },
    numeroPaginas: { type: Number },
    autor: { type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true }
  }, { versionKey: false });

const livros = mongoose.model('livros', livroSchema);

export default livros;
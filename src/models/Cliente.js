import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema(
  {
    id: {type: String},
    name: {type: String, required: true}
  }
)

const clientes = mongoose.model('clientes', clienteSchema);

export default clientes;
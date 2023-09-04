import mongoose from "mongoose";

mongoose.connect("mongodb+srv://aas2512:vLb24LezjjP0Cv6X@perebasdb.wxhxkbn.mongodb.net/alura-node");

let db = mongoose.connection;

export default db
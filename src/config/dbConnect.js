import mongoose from "mongoose";

mongoose.connect("mongodb+srv://<USER>:<PASS>@perebasdb.wxhxkbn.mongodb.net/alura-node");

let db = mongoose.connection;

export default db
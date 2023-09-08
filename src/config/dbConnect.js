import mongoose from "mongoose";
import 'dotenv/config'

let mongoUser = process.env.MONGOUSER;
let mongoPass = process.env.MONGOPASS;

async function conectaDatabase() {
  mongoose.connect(`mongodb+srv://${mongoUser}:${mongoPass}@perebasdb.wxhxkbn.mongodb.net/alura-node`);

  return mongoose.connection;
}

export default conectaDatabase


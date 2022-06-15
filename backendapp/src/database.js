import mysql from "mysql2/promise.js";
import { config } from "./config.js";
 
const connect = async () => {
  const conn = await mysql.createConnection(config);

const result = conn.query('SELECT 1 + 1'); 
console.log(result);
};

connect();
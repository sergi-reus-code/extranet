import mysql from "mysql2/promise.js";
import { config } from "./config.js";
 
const connect = async () => {
  return await mysql.createConnection(config);
};

export default connect;
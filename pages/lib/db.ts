export {};
import mysql from "mysql2";
let db: any;
try {
  db = mysql.createConnection({
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE,
  });
} catch (err) {
  console.error(err);
}

export default db;

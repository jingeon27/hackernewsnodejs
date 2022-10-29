export {};
import mysql from "mysql2";
let db: any;
// MYSQL_HOST = "127.0.0.1";
// MYSQL_PORT = 3306;
// MYSQL_DATABASE = "dev";
// MYSQL_USER = "dev01";
// MYSQL_PASSWORD = "1234";
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

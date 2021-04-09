import mysql from "mysql2/promise";
import * as dotenv from "dotenv";
dotenv.config();

export const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

db.on('connection', function (connection) {
  console.log('DB Connection established');
  connection.on('error', function (err: any) {
    console.error(new Date(), 'MySQL error', err.code);
  });
  connection.on('close', function (err: any) {
    console.error(new Date(), 'MySQL close', err);
  });
});
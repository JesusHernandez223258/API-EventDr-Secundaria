import dotenv from "dotenv";
import mysql from "mysql2/promise";
import { Signale } from "signale";

dotenv.config();
const sigOptions = {
    secrets: ["([0-9]{4}-?)+"]
}
const signale = new Signale(sigOptions);

const dbConfig = {
  host: "database-1.cpgcg2mw0e6g.us-east-1.rds.amazonaws.com",
  user: "admin",
  database: "jesusDB",
  password: "michi123",
  connectionLimit: 10,
};

const pool = mysql.createPool(dbConfig)

export async function query(sql: string, params: any[]){
    try {
        const conn = await pool.getConnection();
        signale.success("Success connection to DB");
        const result = await conn.execute(sql, params);
        conn.release();
        return result;
    } catch (error) {
        signale.error(error);
        return null;
    }
}
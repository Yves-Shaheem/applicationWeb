import express from "express";
import mariadb from "mariadb";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const port = 5000;

const db = mariadb.createPool({
    host: "127.0.0.1",
    port: "3306",
    user: "root",
    password: "",
    database: "projet"
});

app.listen(port, () => {
    console.log(`Server is listening in port: ${port}`) ;
});


import mariadb from "mariadb";

const db = mariadb.createPool({
    host: "127.0.0.1",
    port: "3306",
    user: "root",
    password: "",
    database: "projet"
});
export default db;
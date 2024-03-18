import express from "express";
import mariadb from "mariadb";
import cors from "cors";
import patientRoute from  "./pController.js";
import docteurRoute from "./dController.js";
import reservationRoute from "./rController.js";


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

app.use(patientRoute);
app.use(docteurRoute);
app.use(reservationRoute);


app.listen(port, () => {
    console.log(`Server is listening in port: ${port}`) ;
});





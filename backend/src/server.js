import express from "express";
import mariadb from "mariadb";
import cors from "cors";
import patientRoute from  "./pController.js";
import docteurRoute from "./dController.js";
import reservationRoute from "./rController.js";
import resultatRoute from "./resultatController.js";


const app = express();
app.use(express.json());
app.use(cors());

const port = 5000;

app.use(patientRoute);
app.use(docteurRoute);
app.use(reservationRoute);
app.use(resultatRoute);


app.listen(port, () => {
    console.log(`Server is listening in port: ${port}`) ;
});





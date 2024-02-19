import express from "express";
import mariadb from "mariadb";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const port = 9000;

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

// async => syncronisation
app.get('/patient',
    async (request, response) => {
        let connection;
        try {
            connection = db.getConnection();
            if(connection){
                console.log("Connected to DB");
            }
            const query = "Select * from patient";
            const rs = await connection.query(query, function (err, result) {
                if (err) {
                    console.log(err)
                    response.json({msg: 'Unable to get the patients'});
                } else {
                    response.json(result);
                }
            });
        } catch (error) {
            console.log(error);
        } finally {
            if (connection) connection.end;
            // Ultra important pour éviter les injections SQL
        }
    });
app.get('/status', async (request, response) => {
  response.json({msg: "In use" });
});
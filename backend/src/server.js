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
        let conn;
        try {
            conn = await db.getConnection();
            if(conn){
                console.log("Connected to DB");
            }
            const toto = "Select * from patient";
            const rs = await conn.query(toto);
            console.log(rs);
            return response.json(rs);
        }
        catch (error) {
            console.log(error);
        } finally {
            if (conn) {
                conn.end;
            }
            // Ultra important pour éviter les injections SQL
        }
    });

app.post('/CreatePatient',
    async (request, response) => {
        let conn;
        const fn = request.query.firstname;
        const ln = request.query.lastname;
        const rq = request.query.ramq;
        const values = [fn, ln, rq];
        try {
            conn = await db.getConnection();
            if(conn){
                console.log("Connected to DB");
            }
            const toto = "Insert into patient(firstname, lastname, ramq) values(?,?,?)";
            const rs = await conn.prepare(toto);
            await rs.execute(values);
            console.log(rs);
            return response.json(rs);
        }
        catch (error) {
            console.log(error);
        } finally {
            if (conn) {
                conn.end;
            }
            // Ultra important pour éviter les injections SQL
        }
    });
app.get('/UpdatePatient',
    async (request, response) => {
        let conn;
        const index = request.query.id;
        const fn = request.query.firstname;

        const values = [fn,index];
        try {
            conn = await db.getConnection();
            if(conn){
                console.log("Connected to DB");
            }
            const patient = "Select * from patient where id=?";
            const rs = await conn.prepare(patient);
            await rs.execute(values);
            console.log(rs);

        }
        catch (error) {
            console.log(error);
        } finally {
            if (conn) {
                conn.end;
            }
            // Ultra important pour éviter les injections SQL
        }
    });

app.get('/status', async (request, response) => {
  response.json({msg: "In use" });
});
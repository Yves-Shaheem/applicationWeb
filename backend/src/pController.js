import express from "express";
import mariadb from "mariadb";
import cors from "cors";
import database from "./properties.js";

const app = express();
const router =express.Router();
app.use(cors());

const db = database;


/*
    * @author Shaheem et Jimmy Nguyen
    *
    * */


// async => syncronisation
router.get('/patient',
    async (request, response) => {
        let conn;
        try {
            conn = await db.getConnection();
            if(conn){
                console.log("Connected to DB");
            }
            const toto = "Select * from patient where status=1";
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



router.post('/CreatePatient',
    async (req, response) => {
        let conn;
        
        const fn = req.body.firstname;
        const ln = req.body.lastname;
        const rq = req.body.ramq;
        const el = req.body.email;
        const pass = req.body.pass;


        const st = true;
        const values = [fn, ln, rq,el,pass,st];
        try {
            conn = await db.getConnection();
            if(conn){
                console.log("Connected to DB");
            }
            const query = "Insert into patient(firstname, lastname, ramq,email,password,status) values(?,?,?,?,?,?)";
            const rs = await conn.prepare(query);
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

router.put('/UpdatePatient',
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
            const patient = "Update patient Set firstname= ? where patient_id= ?";
            const rs = await conn.prepare(patient);
            await rs.execute(values);
            console.log(rs);
            response.send("OK");
            //return response.json(rs);
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
router.put('/DeletePatient',
    async (request, response) => {
        let conn;
        const index = request.body.index;
        const status =false;
        const values = [status,index];
        try {
            conn = await db.getConnection();
            if(conn){
                console.log("Connected to DB");
            }
            const patient = "Update patient Set status= ? where user_id= ?";
            const rs = await conn.prepare(patient);
            await rs.execute(values);
            console.log(rs);
            response.send("OK");
            //return response.json(rs);
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



router.get('/status', async (request, response) => {
    response.json({msg: "In use" });
});

export default router;
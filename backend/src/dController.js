import express from "express";
import mariadb from "mariadb";
import cors from "cors";
import database from "./properties.js";

const app = express();
const router =express.Router();
app.use(cors());

const db = database;


router.get('/docteur',
    async (request, response) => {
        let conn;
        try {
            conn = await db.getConnection();
            if(conn){
                console.log("Connected to DB");
            }
            const query = "Select * from docteur where status=true";
            const rs = await conn.query(query);
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



router.post('/CreateDocteur',
    async (request, response) => {
        let conn;
        const fn = request.body.firstname;
        const ln = request.body.lastname;
        const sp = request.body.specialite;
        const lc = request.body.licence;
        const el = request.body.email;
        const pw = request.body.password;
        const st = true;
        const values = [fn, ln, sp,lc,el,pw,st];
        try {
            conn = await db.getConnection();
            if(conn){
                console.log("Connected to DB");
            }
            const query = "Insert into docteur(firstname, lastname, specialite,licence,email,password,status) values(?,?,?,?,?,?,?)";
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

router.put('/UpdateDocteur',
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
            const query = "Update docteur Set firstname= ? where docteur_id= ?";
            const rs = await conn.prepare(query);
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
router.put('/DeleteDoctor',
    async (request, response) => {
        let conn;
        const index = request.query.id;
        const status =false;

        const values = [status,index];
        try {
            conn = await db.getConnection();
            if(conn){
                console.log("Connected to DB");
            }
            const query = "Update docteur Set status= ? where docteur_id= ?";
            const rs = await conn.prepare(query);
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
router.get('/resultat',
    async (request, response) => {
        let conn;
        try {
            conn = await db.getConnection();
            if(conn){
                console.log("Connected to DB");
            }
            const query = "Select * from resultat where status=true";
            const rs = await conn.query(query);
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



router.post('/CreateResultat',
    async (request, response) => {
        let conn;
        const rq = request.body.ramq;
        const pe = request.bodybody.patientEmail;
        const de = request.query.docteurEmail;
        const ms = request.query.message;
        const st = true;
        const values = [rq, pe, de,ms,st];
        try {
            conn = await db.getConnection();
            if(conn){
                console.log("Connected to DB");
            }
            const query = "Insert into resultat(ramq, patientEmail, doctorEmail,message,status) values(?,?,?,?,?)";
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

export default router;
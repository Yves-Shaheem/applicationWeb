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
 

router.get('/resultat',
    async (request, response) => {
        let conn;
        try {
            conn = await db.getConnection();
            if(conn){
                console.log("Connected to DB");
            }
            const query = "Select * from resultat where status=1";
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

router.post('/CreateResult',
    async (req, response) => {
        let conn;
        const rq = req.body.ramq;
        const pe = req.body.patientEmail;
        const de = req.body.doctorEmail;
        const mess = req.body.message;
        const st = true;
        const values = [rq,pe,de,mess,st];
        try {
            conn = await db.getConnection();
            if(conn){
                console.log("Connected to DB");
            }
            const query = "Insert into resultat( ramq, patientEmail, doctorEmail, message, status) values(?,?,?,?,?)";
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

router.put('/UpdateResultat',
    async (request, response) => {
        let conn;
        const index = request.body.index;
        const status = request.body.status;

        const values = [status,index];
        try {
            conn = await db.getConnection();
            if(conn){
                console.log("Connected to DB");
            }
            const reservation = "Update resultat Set status= ? where reservation_id= ?";
            const rs = await conn.prepare(reservation);
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


export default router;

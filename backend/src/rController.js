import express from "express";
import mariadb from "mariadb";
import cors from "cors";

const app = express();
const router =express.Router();
app.use(cors());

const db = mariadb.createPool({
    host: "127.0.0.1",
    port: "3306",
    user: "root",
    password: "",
    database: "projet"
});


router.get('/reservation',
    async (request, response) => {
        let conn;
        try {
            conn = await db.getConnection();
            if(conn){
                console.log("Connected to DB");
            }
            const query = "Select * from reservation where status=1";
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

router.post('/CreateReservation',
    async (request, response) => {
        let conn;
        const pe = request.query.patientEmail;
        const de = request.query.doctorEmail;
        const rq = request.query.ramq;
        const tp = request.query.temps;
        const rn = request.query.raison;
        const st = true;
        const values = [pe,rq,de,tp,rn,st];
        try {
            conn = await db.getConnection();
            if(conn){
                console.log("Connected to DB");
            }
            const query = "Insert into reservation(patientEmail,ramq,doctorEmail,temps, raison, status) values(?,?,?,?,?,?)";
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

router.put('/UpdateReservation',
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
            const reservation = "Update reservation Set status= ? where reservation_id= ?";
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

    router.put('/UpdateReservationTime',
    async (request, response) => {
        let conn;
        const index = request.body.index;
        const temps=request.body.temps;
      

        const values = [temps,index];
        try {
            conn = await db.getConnection();
            if(conn){
                console.log("Connected to DB");
            }
            const reservation = "Update reservation Set temps=? where reservation_id=?";
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

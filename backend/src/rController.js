import express from "express";
import mariadb from "mariadb";
import cors from "cors";
import database from "./properties.js";

const app = express();
const router =express.Router();
app.use(cors());

/*
    * @author Shaheem et Jimmy Nguyen
    *
    * */

const db = database;

router.get('/reservation',
    async (request, response) => {
        let conn;
        try {
            conn = await db.getConnection();
            
            const query="select  reservation.reservation_id,reservation.email , reservation.ramq, docteur.email as doctorEmail, reservation.temps, reservation.raison from reservation join docteur ON reservation.id_doctor=docteur.user_id where reservation.status=1"
            const rs = await conn.query(query);
            return response.json(rs);
        }
        catch (error) {
            console.log(error);
        } finally {
            if (conn) {
                conn.end;
            }
            
        }
    });

router.post('/CreateReservation',
    async (request, response) => {
        let conn;
        const pe = request.body.email;
        const rq = request.body.ramq;
        const te = request.body.telephone;
        const tp = request.body.temps;
        const rn = request.body.raison;
        const idDoct=request.body.idDoctor;
        const st = true;
        const values = [pe,rq,te,tp,rn,idDoct,st];
        try {
            conn = await db.getConnection();
            const query = "Insert into reservation(email,ramq,telephone,temps, raison,id_doctor, status) values(?,?,?,?,?,?,?)";
            const rs = await conn.prepare(query);
            await rs.execute(values);
            return response.json(rs);
        }
        catch (error) {
            console.log(error);
        } finally {
            if (conn) {
                conn.end;
            }
           
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
            const reservation = "Update reservation Set status= ? where reservation_id= ?";
            const rs = await conn.prepare(reservation);
            await rs.execute(values);
            response.send("OK");
        }
        catch (error) {
            console.log(error);
        } finally {
            if (conn) {
                conn.end;
            }
            
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
            const reservation = "Update reservation Set temps=? where reservation_id=?";
            const rs = await conn.prepare(reservation);
            await rs.execute(values);
            response.send("OK");
        }
        catch (error) {
            console.log(error);
        } finally {
            if (conn) {
                conn.end;
            }
            
        }
    });

export default router;

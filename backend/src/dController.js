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


router.get('/docteur',
    async (request, response) => {
        let conn;
        try {
            conn = await db.getConnection();
            
            const query = "Select * from docteur where status=true";
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
            
            const query = "Insert into docteur(firstname, lastname, specialite,licence,email,password,status) values(?,?,?,?,?,?,?)";
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

router.put('/UpdateDocteur',
    async (request, response) => {
        let conn;
        const index = request.query.id;
        const fn = request.query.firstname;

        const values = [fn,index];
        try {
            conn = await db.getConnection();
            
            const query = "Update docteur Set firstname= ? where docteur_id= ?";
            const rs = await conn.prepare(query);
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
router.put('/DeleteDoctor',
    async (request, response) => {
        let conn;
        const index = request.query.id;
        const status =false;

        const values = [status,index];
        try {
            conn = await db.getConnection();
            const query = "Update docteur Set status= ? where docteur_id= ?";
            const rs = await conn.prepare(query);
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
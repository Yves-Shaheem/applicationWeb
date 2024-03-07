import express from "express";
import mariadb from "mariadb";
import cors from "cors";

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
            const toto = "Select * from patient where status=true";
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
        const el = request.query.email;
        const st = true;
        const values = [fn, ln, rq,el,st];
        try {
            conn = await db.getConnection();
            if(conn){
                console.log("Connected to DB");
            }
            const query = "Insert into patient(firstname, lastname, ramq,email,status) values(?,?,?,?,?)";
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

app.put('/UpdatePatient',
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
app.put('/DeletePatient',
    async (request, response) => {
        let conn;
        const index = request.query.id;
        const st =false;

        const values = [st,index];
        try {
            conn = await db.getConnection();
            if(conn){
                console.log("Connected to DB");
            }
            const patient = "Update patient Set status= ? where patient_id= ?";
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
app.get('/reservation',
    async (request, response) => {
        let conn;
        try {
            conn = await db.getConnection();
            if(conn){
                console.log("Connected to DB");
            }
            const query = "Select * from reservation";
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

app.post('/CreateReservation',
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
            const query = "Insert into reservation(patientEmail,ramq,doctorEmail,temps, raison, status) values(?,?,?,?,?)";
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

app.put('/UpdateReservation',
    async (request, response) => {
        let conn;
        const index = request.query.index;
        const status = request.query.status;

        const values = [status,index];
        try {
            conn = await db.getConnection();
            if(conn){
                console.log("Connected to DB");
            }
            const reservation = "Update revervation Set status= ? where reservation_id= ?";
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

app.get('/docteur',
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



app.post('/CreateDocteur',
    async (request, response) => {
        let conn;
        const fn = request.query.firstname;
        const ln = request.query.lastname;
        const sp = request.query.specialite;
        const lc = request.query.license;
        const el = request.query.email;
        const st = true;
        const values = [fn, ln, sp,lc,el,st];
        try {
            conn = await db.getConnection();
            if(conn){
                console.log("Connected to DB");
            }
            const query = "Insert into patient(firstname, lastname, specialite,license,email,status) values(?,?,?,?,?)";
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

app.put('/UpdateDocteur',
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
app.put('/DeleteDoctor',
    async (request, response) => {
        let conn;
        const index = request.query.id;
        const st =false;

        const values = [st,index];
        try {
            conn = await db.getConnection();
            if(conn){
                console.log("Connected to DB");
            }
            const query = "Update doctor Set status= ? where patient_id= ?";
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
app.get('/resultat',
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



app.post('/CreateResultat',
    async (request, response) => {
        let conn;
        const rq = request.query.ramq;
        const pe = request.query.patientEmail;
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

app.get('/status', async (request, response) => {
  response.json({msg: "In use" });
});
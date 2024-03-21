import axios from "axios";
import React, {useEffect} from "react";
 
 
 
function HomePatient (){
 
    const baseURL = "http://localhost:5000/reservation";
    const baseURL2="http://localhost:5000/UpdateReservation";
    const [reservation, setReservation] = React.useState([]);
 
   
   
 
    useEffect(() => {
 
        axios.get(baseURL)
            .then(res => setReservation(res.data))
            .catch(err => console.log(err));
 
         
        axios.put(baseURL2)
            .then(res2=>setReservation(res2.data))
            .catch(err=>console.log(err));
 
}, [])
 
 
    return (
        <div className="hero">
            <div className="container">
                <h1>Page HomePatient</h1>
                <table className="table table-striped">
                    <thead>
                    <h3>Liste des reservations</h3>
                    <tr>
                    <th>Id</th>
                    <th>PatientEmail</th>
                    <th>RAMQ</th>
                    <th>DoctorEmail</th>
                    <th>temps</th>
                    <th>raison</th>
 
                    </tr>
                    </thead>
                    <tbody>
                    {
                        reservation.map((resv,i) => (
                            <tr>
 
                                <td>{resv.reservation_id}</td>
                                <td>{resv.patientEmail}</td>
                                <td>{resv.ramq}</td>
                                <td>{resv.doctorEmail}</td>
                                <td>{resv.temps}</td>
                                <td>{resv.raison}</td>
                                <button /*onClick={}*/ className="btn btn-danger">Annuler</button>
 
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
 
            </div>
 
        </div>
    );
    }
    export default HomePatient;
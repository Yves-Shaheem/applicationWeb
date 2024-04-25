import axios from "axios";
import React, {useEffect} from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css"

function HomePatient (){
 
    const baseURL = "http://localhost:5000/reservation";
    const baseURL2="http://localhost:5000/UpdateReservation";
    const baseURL3="http://localhost:5000/resultat"
    const [reservation, setReservation] = React.useState([]);
    const [resultat,setResultat]=React.useState([]);
 

 
    useEffect(() => {

        axios.get(baseURL)
            .then(res => setReservation(res.data))
            .catch(err => console.log(err));
 
}, [])


useEffect(() => {

    axios.get(baseURL3)
        .then(res => setResultat(res.data))
        .catch(err => console.log(err));

}, [])




const postData=(id)=>{
    axios.put(baseURL2,{
        index:id,
        status:false
        })
        .then(res=>{
            console.log(res.data);
            setReservation(todo=>todo.filter(resv=>resv.reservation_id!==id));//source1: Voir a la fin de la page
        })
        .catch(err=>console.log(err));
        
}

    return (
        
            <div className="container">
                <div className="hero col-6">
                <div>
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
                        reservation.map((resv) => (
                            <tr key={resv.reservation_id}>
 
                                <td>{resv.reservation_id}</td>
                                <td>{resv.email}</td>
                                <td>{resv.ramq}</td>
                                <td>{resv.doctorEmail}</td>
                                <td>{resv.temps}</td>
                                <td>{resv.raison}</td>
                                <td>
                                <button onClick={()=>postData(resv.reservation_id)} className="btn btn-danger">Annuler</button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
                </div>

            <div className="col-12">

            <h3>Réception des résultats</h3>
            <table className="table">
                <thead>
                <tr>
                    <th>Résultats</th>
                </tr>
                
                </thead>
                <tbody>
                    {resultat.map((resultat)=>(
                    <tr><Popup trigger={<button className="btn btn-primary">Infos resultats pour le patient email {resultat.patientEmail}</button>} modal nested>
                        {
                            close=>(
                                <div className="">
                                <div className="content">
                                    <h3>Les résultas des rendez-vous médicaux</h3>
                                </div>
                                <div>
                                    <table className="table table-bordered">
                                        <thread>
                                            <tr>
                                                <th scope="col">Votre RAMQ</th>
                                                <th scope="col">Votre email</th>
                                                <th scope="col">Le docteur email</th>
                                                <th scope="col">Le resultat</th>
                                            </tr>
                                            <tr>
                                                <th scope="col">{resultat.ramq}</th>
                                                <th scope="col">{resultat.patientEmail}</th>
                                                <th scope="col">{resultat.doctorEmail}</th>
                                                <th scope="col">{resultat.message}</th>

                                            </tr>
                                        </thread>
            
                                    </table>
                                    <button className="btn btn-info" onClick={()=>close()}>Fermer la page</button>
                                </div>

                                </div>
                            )
                        }
                        
                        </Popup>
                        </tr>
                    ))
                    }
                </tbody>
                </table>

            </div>
        
            </div>
            </div>
 
        
    );
    }
    export default HomePatient;

    /*
    source1:https://stackoverflow.com/questions/57341541/removing-object-from-array-using-hooks-usestate
    */
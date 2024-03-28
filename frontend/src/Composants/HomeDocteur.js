import axios from "axios";
import React, {useEffect} from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';




 
function HomeDocteur (){
 
    const baseURL = "http://localhost:5000/reservation";
    const baseURL2="http://localhost:5000/UpdateReservation";
    const baseURL3="http://localhost:5000/UpdateReservationTime";
    const [reservation, setReservation] = React.useState([]);
 
   
   
    useEffect(() => {

        axios.get(baseURL)
            .then(res => setReservation(res.data))
            .catch(err => console.log(err));
 
}, [])

/*
const supprimer=(index)=>{
    const newList=[...listItems]
    newList.splice(index,1)
    setListe(newList)
}
 */

const postData=(id)=>{
    axios.put(baseURL2,{
        index:id,
        status:false
        })
        .then(res=>{
            console.log(res.data);
            setReservation(todo=>todo.filter(resv=>resv.reservation_id!==id));//source1: Voir a la fin de la page
        })

          /*
       .then(res=>{
        console.log(res.data)
        const updateReservation=[...reservation]
        updateReservation.splice(id,1)
        setReservation(updateReservation)
       })
       //Erreur de logique, marche pas correctement
*/
        

        .catch(err=>console.log(err));
        
}

    const postData2=(id)=>{
        axios.put(baseURL3, {
            index:id,
            status:false
        })
        .then(res=>{
            console.log(res.data);
            setReservation(todo=>todo.filter(resv=>resv.reservation_id!==id));//source1: Voir a la fin de la page
        })
    }


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
                        reservation.map((resv) => (
                            <tr key={resv.reservation_id}>
 
                                <td>{resv.reservation_id}</td>
                                <td>{resv.patientEmail}</td>
                                <td>{resv.ramq}</td>
                                <td>{resv.doctorEmail}</td>
                                <td>{resv.temps}</td>
                                <td>{resv.raison}</td>
                                <td>
                                <button onClick={()=>postData(resv.reservation_id)} className="btn btn-danger">Annuler</button>
                                <Popup trigger={
                                    <button className="btn btn-info">Modifier</button>}
                                    modal nested>
                                        {
                                            close=>(
                                                <div className="">
                                                    <div className="content">
                                                        Modifier votre temps de RV
                                                    </div>
                                                    <div>
                                                        <button onClick={()=>close()}>Close page</button>
                                                    </div>
                                                </div>
                                            )
                                        }
                                
                                
                                </Popup>
                               
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
 
            </div>
 
        </div>
    );
    }
    export default HomeDocteur;

    /*
    source1:https://stackoverflow.com/questions/57341541/removing-object-from-array-using-hooks-usestate
    */
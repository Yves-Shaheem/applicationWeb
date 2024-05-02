import axios from "axios";
import React, {useEffect} from "react";

/*
    * @author Shaheem et Jimmy
    *
    * */


function PatientCrud() {

    const getPatient = "http://localhost:5000/patient";
    const [patient, setPatient] = React.useState([]);
    const deletePatient = "http://localhost:5000/DeletePatient";

    const deletePatientData=(id)=>{
        console.log(id);
        axios.put(deletePatient,{
            index:id,
            status:false
        })
            .then(res=>{
                console.log(res.data);
                setPatient(todo=>todo.filter(user=>user.user_id!==id));
            })
            .catch(err=>console.log(err));
    }

    useEffect(() => {
        axios.get(getPatient)
            .then(res => setPatient(res.data))
            .catch(err => console.log(err));

    }, [])
    return (
        <table className="table table-sm table-bordered">
            <caption>Liste des patients</caption>
               <thead>
                    <tr>
                        <th scope="col">Nom complet</th>
                        <th scope="col">Ramq</th>
                        <th scope="col">Email </th>
                        <th scope="col">Status activité</th>
                        <th scope="col">Désactiver Compte</th>
                    </tr>
               </thead>
                <tbody>
                    {
                    patient.map((user, i) => (
                        <tr key={user.user_id}>
                            <td>{user.firstname} {user.lastname}  </td>
                            <td>{user.ramq}  </td>
                            <td>{user.email}  </td>
                            <td>{user.status}  </td>
                            <td>
                                <button className="btn btn-danger btn-sm"
                                    onClick={() => deletePatientData(user.user_id)}>Fermer le compte
                                </button>
                            </td>
                        </tr>
                        ))
                    }
                </tbody>
        </table>
    );
}

export default PatientCrud;


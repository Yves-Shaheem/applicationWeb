import axios from "axios";
import React, {useEffect} from "react";



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
        <div className="hero">
            <div className="container">
                <table>
                    <thead>
                    <tr>
                        <th>Prénom</th>
                        <th>Nom</th>
                        <th>ramq</th>
                        <th>email</th>
                        <th>status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        patient.map((user,i) => (
                            <tr key={user.user_id}>
                                <td>{user.firstname}  </td>
                                <td>{user.lastname} </td>
                                <td>{user.ramq}  </td>
                                <td>{user.email}  </td>
                                <td>{user.status}  </td>
                                <td><button className="btn btn-danger" onClick={() => deletePatientData(user.user_id)}>Fermer le compte</button></td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>

            </div>

        </div>
    );
}

export default PatientCrud;


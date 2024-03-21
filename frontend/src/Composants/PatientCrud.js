import axios from "axios";
import React, {useEffect} from "react";



function PatientCrud() {

    const getPatient = "http://localhost:5000/patient";
    const [patient, setPatient] = React.useState([]);

    useEffect(() => {

        axios.get(getPatient)
            .then(res => setPatient(res.data))
            .catch(err => console.log(err));

    }, [])
    return (
        <div className="hero">
            <div className="container">
                <h1>Page Home</h1>
                <table>
                    <thead>
                    <tr>
                        <th>id</th>

                        <th>Date de la réservation</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        patient.map((user,i) => (
                            <tr>
                                <td>{user.firstname}</td>
                                <td>{user.lastname}</td>
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


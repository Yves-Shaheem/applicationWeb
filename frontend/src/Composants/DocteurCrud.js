import axios from "axios";
import React, {useEffect} from "react";

/*
*
* @author Shaheem 
*
*/

function DocteurCrud() {
   


    const getDocteur = "http://localhost:5000/docteur";
    const [docteur, setDocteur] = React.useState([]);
    const deleteDocteur = "http://localhost:5000/DeleteDocteur";

    const deleteDocteurData=(id)=>{
        axios.put(deleteDocteur,{
            index:id,
            status:false
        })
            .then(res=>{
                console.log(res.data);
                setDocteur(todo=>todo.filter(user=>user.user_id!==id));
            })
            .catch(err=>console.log(err));
    }

    useEffect(() => {
        axios.get(getDocteur)
            .then(res => setDocteur(res.data))
            .catch(err => console.log(err));

    }, [])
    return (
                <table className="table table-sm">
                    <caption>Liste des docteurs</caption>
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
                        docteur.map((user, i) => (
                            <tr key={user.user_id}>
                                <td>{user.firstname} {user.lastname}  </td>
                                <td>{user.ramq}  </td>
                                <td>{user.email}  </td>
                                <td>{user.status}  </td>
                                <td>
                                    <button className="btn btn-danger btn-sm"
                                            onClick={() => deleteDocteurData(user.user_id)}>Fermer le compte
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
    );
}

export default DocteurCrud;


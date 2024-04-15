import axios from "axios";
import React, { useEffect } from "react";
import Popup from "reactjs-popup";


function RechercherDocteur() {


    // Données docteurs
    const getDocteur = "http://localhost:5000/docteur";
    const [docteur, setDocteur] = React.useState([]);

    useEffect(() => {
        axios.get(getDocteur)
            .then(res => setDocteur(res.data))
            .catch(err => console.log(err))
    }, [])


    const [value, setValue] = React.useState("");


    function handleChange(event) {
        setValue(event.target.value);
    }

    // Source donné à la fin du code
    return (
        <div className="hero">
            <div className="col-12">
                <h1>Chercher un docteur</h1>
                <div className="rechercheBar">
                    <input
                        type="text"
                        value={value}
                        onChange={handleChange}
                        name="recherche"
                        placeholder=""
                    />
                    <button onClick={() => console.log(value)}>
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>

                <div className="resultat">
                    <h4>Résultat à votre recherche</h4>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Prenom</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

                            {value &&
                                docteur
                                    .filter((user) =>
                                        user.firstname.includes(value) && user.firstname.startsWith(value, 0) || user.lastname.includes(value) && user.lastname.startsWith(value, 0) // Filtrer 
                                    )



                                    .map((user, i) => ( // Bouclé
                                        <tr onClick={() => console.log("Clique réussi")} key={i}>
                                            <td>{user.firstname}</td>
                                            <td>{user.lastname}</td>
                                            <td><Popup trigger={<button className="btn btn-info">Voir les infos</button>}
                                                modal nested>
                                                {
                                                    close=>(
                                                    <div className="">
                                                        <div className="content">
                                                            <h3>Informations sur {user.firstname} {user.lastname}</h3>
                                                        </div>
                                                        <br></br>
                                                        <div>
                                                            <table className="table table-bordered">
                                                                <thead>
                                                                    <tr>
                                                                        <th scope="col">Nom</th>
                                                                        <th scope="col">Prenom</th>
                                                                        <th scope="col">Spécialité</th>
                                                                        <th scope="col">Comment le contacter ?</th>
                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="col">{user.firstname}</th>
                                                                        <th scope="col">{user.lastname}</th>
                                                                        <th scope="col">{user.specialite}</th>
                                                                        <th scope="col">{user.email}</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                </tbody>
                                                            </table>
                                                            <div>
                                                        <button className="btn btn-info" onClick={()=>close()}>Fermer la page</button>
                                                    </div>
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
        </div>
    )
}

export default RechercherDocteur;


/**
 SOURCE : https://www.youtube.com/watch?v=Na7Xg93YBpM
 */

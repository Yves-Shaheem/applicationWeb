import axios from "axios";
import React, {useEffect} from "react";

function RechercherDocteur(){


    // Données docteur
    const getDocteur = "http://localhost:5000/docteur";
    const [docteur, setDocteur] = React.useState([]);

useEffect(() => {
    axios.get(getDocteur)
    .then(res => setDocteur(res.data) )
    .catch(err => console.log(err))
},[])


const [value, setValue] = React.useState("");


function handleChange(event) {
    setValue(event.target.value);
  }

    // Source donné à la fin du code
    return(
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

            <div className="resultat"></div>
            <h4>Résultat à votre recherche  </h4>
                <table>
                    <thead>
                    <tr>
                        <th>Nom</th>

                        <th>Prenom</th>

                        <th>Spécialité</th>
                    </tr>
                    </thead>
                    <tbody>
                        
                    { value &&
                        docteur
                        .filter((user) => 
                            user.firstname.toLowerCase().includes(value.toLowerCase()) // Filtrer 
                        )

                        .map((user, i) => ( // Bouclé
                            <tr onClick={() => setDocteur(user)} key={i}> 
                                <td>{user.firstname}</td>
                                <td>{user.lastname}</td>
                                <td>{user.specialite}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
        </div>
    </div>
    )
}

export default RechercherDocteur;


/**
 SOURCE : https://www.youtube.com/watch?v=Na7Xg93YBpM
 */
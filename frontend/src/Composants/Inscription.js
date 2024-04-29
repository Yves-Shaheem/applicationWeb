import { Link } from "react-router-dom"
import React from "react";
import axios from "axios";
import InscriptionPatient from "./InscriptionPatient";
import InscriptionDocteur from "./InscriptionDocteur";


function Inscription(){
    const [form, setForm] = React.useState(false);

     const handleClick = () => {
            setForm(!form);
        }

    return(
        <div className="container p-2">
            <div className=" text-center m-4">
                <button className="btn btn-primary rounded-pill m-2 p-2" onClick={handleClick}>Patient</button>
                <button className="btn btn-primary rounded-pill m-2 p-2 "onClick={handleClick}>Docteur</button>
            </div>
            <div>
                {
                    form ? (<InscriptionPatient/>) : (<InscriptionDocteur/>)
                }


            </div>
        </div>
    )
}

export default Inscription;
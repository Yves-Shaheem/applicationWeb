import { Link } from "react-router-dom"
import React from "react";
import axios from "axios";
import InscriptionPatient from "./InscriptionPatient";


function Inscription(){
    const [form, setForm] = React.useState(true);

 const handleClick = () => {

    }

    return(
        <div className="container">
            <div>
            <InscriptionPatient/>
            <button>Change Form</button>
            </div>
        </div>
    )
}

export default Inscription;
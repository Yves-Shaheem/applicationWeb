import { Link } from "react-router-dom"
import React from "react";
import axios from "axios";


function InscriptionPatient(){
    /*
    * @author Shaheem
    *
    * */
    const baseURL = "http://localhost:5000/CreatePatient";
    const [checked, setChecked] = React.useState(true);
    const patientValues = {
        firstname: "",
        lastname: "",
        ramq:"",
        email:"",
        password:"",
        TermsOfUse:checked
    }
    const [patient, setPatient] = React.useState(patientValues);
    const[formErrors, setFormErrors] = React.useState({});
    function handleChange(event) {
        setPatient(
            {
                ...patient,
                [event.target.name] : [event.target.value]
            }
        )}
    function isValidE(email) {
        let regex = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
        return regex.test(email);
    };
    function isValidR(ramq) {
        let regex = /^(?=^.{12}$)[A-Z]{4}\d*$/
        return regex.test(ramq);
    };
    function DataValidation(inputValues) {
        const errors ={
            value:"",
            termsOfUse:"",
            ramq:"",
            email:"",
            success:"Votre compte a été créer"
        };
        console.log(inputValues);
        if(!inputValues.lastname[0] || !inputValues.firstname[0]
            || !inputValues.email[0] || !inputValues.ramq[0] || !inputValues.password[0]) {
            errors.value = "Aucun champ ne doit etre vide ! ";
            errors.success = "";
        }
        if(checked){ errors.termsOfUse = "Accept terms of use !"; errors.success = "" ;}

        if(!isValidR(inputValues.ramq[0])) {
            errors.success = "";
            errors.ramq = "Veuillez rentrer l'information comme telle 'XXXX00000000' ";
        }
        if(!isValidE(inputValues.email[0])) {
            errors.success = "";
            errors.email = "Veuillez entrez un email valide";
        }
        return errors;
    }
    function handleSubmit(event){
        event.preventDefault();
        setFormErrors(DataValidation(patient));
        const userData = {
            firstname:patient.firstname[0],
            lastname: patient.lastname[0],
            ramq:patient.ramq[0],
            email:patient.email[0],
            pass:patient.password[0]
        }
        if(formErrors.ramq === "" && formErrors.email === "" && formErrors.value === "" && formErrors.termsOfUse === ""){
            axios.post(baseURL, userData,{
                headers: {
                    'Content-Type': 'application/json'
                }})
                .then((res) =>{ console.log(res.status, res.data)})
                .catch(err => console.log(err));
        }
    }

    /*
    * author Shaheem Yanni
    * */

    return(
                <form onSubmit={handleSubmit}>
                    <div>
                        Prénom: <span style={{color: "red"}}>*</span><br/>
                        <input onChange={handleChange} type="text" name="firstname"/>
                    </div>

                    <div>
                        Nom: <span style={{color: "red"}}>*</span><br/>
                        <input onChange={handleChange} type="text" name="lastname"/>
                    </div>

                    <div>
                        RAMQ: <span style={{color: "red"}}>*</span><br/>
                        <input onChange={handleChange} type="text" name="ramq" maxLength={12}/>
                    </div>
                    <div>
                        Email: <span style={{color: "red"}}>*</span> <br/>
                        <input onChange={handleChange} type="text" name="email"/>
                    </div>

                    <div>
                        Password: <span style={{color: "red"}}>*</span><br/>
                        <input onChange={handleChange} type="password" name="password"/>
                    </div>
                    <br></br>
                    <input type="checkbox" name="TermsOfUse" onChange={() => {
                        setChecked(!checked);
                    }} value={checked}/> &nbsp;
                    <Link to="/TermsOfUse">Accept terms of use.</Link>
                    <br/>

                    <p> <span className="text-danger">
                        {formErrors.termsOfUse}<br/>
                        {formErrors.value}<br/>
                        {formErrors.ramq}<br/>
                        {formErrors.email}<br/>
                                        </span>
                        <span className="text-success">{formErrors.success}</span><br/>
                    </p>
                    <button onClick={handleSubmit} type="button" className="btn btn-primary">
                        Inscrivez-vous
                    </button>
                </form>
    )
}

export default InscriptionPatient;
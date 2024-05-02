import { Link } from "react-router-dom"
import React from "react";
import axios from "axios";


function InscriptionDocteur(){
    /*
    * @author Yanni et Jimmy
    *
    * */
 

    const baseURL = "http://localhost:5000/CreateDocteur";
    const [checked, setChecked] = React.useState(true);
    const docteurValues = {
        firstname: "",
        lastname: "",
        licence: "",
        email:"",
        specialite:"",
        password:"",
        TermOfUse:checked
    }

    const [docteur, setDocteur] = React.useState(docteurValues);
    const[formErrors, setFormErrors] = React.useState({});
    function handleChange(event){
        setDocteur(
            {
                ...docteur,
                [event.target.name] : [event.target.value]
            }
        )
    }
    function isValidE(email){
        let regex = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
        return regex.test(email);
    };
    function isValidR(licence){
        let regex = /^(?=^.{12}$)[A-Z]{4}\d*$/
        return regex.test(licence);
    };
    function DataValidation(inputValues){
        const errors = {
            value:"",
            termsOfUse:"",
            licence:"",
            email:"",
            success:"Votre compte a été créer"
        };
        console.log(inputValues);
        if(!inputValues.lastname[0] || !inputValues.firstname[0]
        || !inputValues.email[0] || !inputValues.licence[0] || !inputValues.specialite[0]|| !inputValues.password[0]) {
            errors.value = "Aucun champ ne doit être vide !";
            errors.success = "";
        }
        if(checked){ errors.termsOfUse = "Accept terms of use !"; errors.success = "";}

        if(!isValidR(inputValues.licence[0])){
            errors.success = "";
            errors.licence = "Veuillez rentrer l'information comme telle 'X0X0' ";

        }
        if(!isValidE(inputValues.email[0])){
            errors.success = "";
            errors.email = "Veuillez entrer un email valide";
        }
        return errors;
    }

    function handleSubmit(event){
        event.preventDefault();
        setFormErrors(DataValidation(docteur));
        const userData = {
            firstname:docteur.firstname[0],
            lastname: docteur.lastname[0],
            licence:docteur.licence[0],
            email:docteur.email[0],
            specialite:docteur.specialite[0],
            password:docteur.password[0]
        }
        if(formErrors.licence === "" && formErrors.email === "" && formErrors.value === "" && formErrors.termsOfUse === ""){
            axios.post(baseURL, userData,{
                headers: {
                    'Content-Type': 'application/json'
                }})
                .then((res) =>{ console.log(res.status, res.data)})
                .catch(err => console.log(err));
        }
    }

    return(
        <div className="hero">
            <div className="col-12">
                <h1>Inscription pour les docteurs</h1>
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
                        Numéro de licence : <span style={{color: "red"}}>*</span> <br/>
                        <input onChange={handleChange} type="text" name="licence" maxLength={12}/>
                    </div>

                    <div>
                        Email : <span style={{color: "red"}}>*</span> <br/>
                        <input onChange={handleChange} type="text" name="email"/>
                    </div>

                    <div>
                        Spécialité : <span style={{color: "red"}}>*</span> <br/>
                        <input onChange={handleChange} type="text" name="specialite"/>
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
                        {formErrors.licence}<br/>
                        {formErrors.email}<br/>
                                        </span>
                        <span className="text-success">{formErrors.success}</span><br/>
                    </p>
                    <button onClick={handleSubmit} type="button" className="btn btn-primary">
                        Inscrivez-vous
                    </button>
                </form>
            </div>
        </div>
    )
}


export default InscriptionDocteur;
import { Link } from "react-router-dom"
import React, {useEffect} from "react";
import axios from "axios";


function Inscription(){
    /*
    * @author Shaheem
    *  */
    const baseURL = "http://localhost:5000/CreatePatient";
    // useEffect(() => {
    //     const postData = () => {
    //         axios
    //             .post(baseURL, {
    //                 firstname:patient.fn,
    //                 lastname: patient.ln,
    //                 ramq:patient.rq,
    //                 email:patient.el
    //             })
    //             .then(res => console.log(res))
    //             .catch(err => console.log(err));
    //     };
    //     if(formErrors.length == 0){
    //         postData();
    //     }
    //     axios
    //         .post(baseURL, {
    //             firstname:patient.fn,
    //             lastname: patient.ln,
    //             ramq:patient.rq,
    //             email:patient.el
    //         })
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err));
    //
    //
    // }, [])
    const patientValues = {
        fn: "",
        ln: "",
        rq:"",
        el:"",
        pwd:""
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
        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let flag = regex.test(email)
        return flag;

    };
    function isValidR(ramq) {
        let regex = /^(?=^.{12}$)[A-Z]{4}\d*$/
        let flag = regex.test(ramq)
        return flag;

    };
    function DataValidation(inputValues) {
        const errors ={};
        if(!inputValues.ln || !inputValues.fn
            || !inputValues.el || !inputValues.rq || !inputValues.pwd){
            errors.value = "Aucun champ ne doit etre vide ! ";
        }
        if(!isValidR(inputValues.rq)){
            errors.ramq = "Veuillez rentrer l'information comme telle 'XXXX00000000' ";
        }
        if(!isValidE(inputValues.el)){
            errors.email = "Veuillez entrez un email valide";
        }
        return errors;
    }
    function handleSubmit(event){
        event.preventDefault();
        setFormErrors(DataValidation(patient))
        console.log(patient);
        axios.post(baseURL, {
                firstname:patient.fn,
                lastname: patient.ln,
                ramq:patient.rq,
                email:patient.el
            })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
    /*
    * author Shaheem Yanni*/
    return(
        <div className="hero">
            <div className="col-12">
                <h1>Inscriptions</h1>
            <form  onSubmit={handleSubmit}>
                <div>
                    Prénom: <span style={{color:"red"}}>*</span><br />
                    <input onChange={handleChange} type="text" name="fn" />
                </div>
          
                <div>
                    Nom: <span style={{color:"red"}}>*</span><br/>
                    <input onChange={handleChange} type="text" name="ln" />
                </div>

                <div>
                    RAMQ: <span style={{color:"red"}}>*</span><br/>
                    <input onChange={handleChange} type="text" name="rq" maxLength={12} />
                </div>
                <div>
                    Email: <span style={{color: "red"}}>*</span> <br/>
                    <input onChange={handleChange} type="text" name="el" />
                </div>

                <div>
                    Password: <span style={{color:"red"}}>*</span><br/>
                    <input onChange={handleChange} type="password" name="pwd" />
                </div>
                <br></br>
                <input type="checkbox" name="TermsOfUse" value="" /> &nbsp;
                <Link to="/TermsOfUse">Accept terms of use.</Link>
         
                <br></br><br></br>
                <p> <span style={{color:"red"}}>{formErrors.value}<br/>
                 {formErrors.ramq}<br/>
                {formErrors.email}</span></p>
      <button onClick={handleSubmit} type="button" className="btn btn-primary">Inscrivez-vous</button>
    </form>
    </div>
    </div>
)


}
export default Inscription;
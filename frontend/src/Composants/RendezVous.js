import React from "react";
import axios from "axios";
import { useEffect } from "react";

function RendezVous(){

  const baseURL = "http://localhost:5000/CreateReservation";
  const getDocteur = "http://localhost:5000/docteur";

  const [docteur, setDocteur] = React.useState([]);

    const reservationValues = {
        ramq: "",
        email: "",
        telephone:"",
        temps:"",
        raison:"",
        idDoctor:""
    }
    const [reservation, setReservation] = React.useState(reservationValues);
    const[formErrors, setFormErrors] = React.useState({});


    function handleChange(event) {
      setReservation(
          {
          ...reservation,
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
  function DataValidation(inputValues,selectDoctor) {
      const errors ={
          value:"",
          ramq:"",
          email:"",
          telephone:"",
          temps:"",
          raison:"",
          success:"Votre réservation a été créer"
      };
      console.log(inputValues);
      if(!inputValues.ramq[0] || !inputValues.email[0]
          || !inputValues.telephone[0] || !inputValues.temps[0] || !inputValues.raison[0]) {
          errors.value = "Aucun champ ne doit etre vide ! ";
          errors.success = "";
      }
      if(!isValidR(inputValues.ramq[0])) {
          errors.success = "";
          errors.ramq = "Veuillez rentrer l'information comme telle 'XXXX00000000' ";
      }
      if(!isValidE(inputValues.email[0])) {
          errors.success = "";
          errors.email = "Veuillez entrez un email valide";
      }
      if(!selectDoctor || selectDoctor=="NoChoice" ){
        errors.value="Veuillez selectionner un docteur";
        errors.success="";
    }
      return errors;
  }
  function handleSubmit(event){
      event.preventDefault();
      setFormErrors(DataValidation(reservation,valueDoct));
      const userData = {
          ramq:reservation.ramq[0],
          email: reservation.email[0],
          telephone:reservation.telephone[0],
          temps:reservation.temps[0],
          raison:reservation.raison[0],
          idDoctor:valueDoct
      }
      console.log("userData:",userData);
      if(formErrors.ramq === "" && formErrors.email === "" && formErrors.value === ""){
          axios.post(baseURL, userData,{
              headers: {
                  'Content-Type': 'application/json'
              }})
              .then((res) =>{ console.log(res.status, res.data)})
              .catch(err => console.log(err));
      }
  }


  
  const [valueDoct, setValueDoct] = React.useState("");


  function handleChange2(event) {
      setValueDoct(event.target.value);
      console.log("ID doct:",event.target.value);
  }
  
  
  useEffect(() => {
    axios.get(getDocteur)
        .then(res => setDocteur(res.data))
        .catch(err => console.log(err))
}, [])

    return(
        <div className="hero">
            <div className="col-12">
                <h1>Prendre rendez-vous</h1>
                <form  onSubmit={handleSubmit}>
                <div>
            ramq: <br />
            <input onChange={handleChange} type="text" name="ramq" maxLength={12} />
          </div>

          <div>
            Email: <br />
            <input onChange={handleChange} type="text" name="email" />
          </div>

          <div>
            Numéro de téléphone: <br />
            <input onChange={handleChange} type="text" name="telephone"/>
          </div>
          
          <div>
            Date : <br />
            <input onChange={handleChange} type="date" name="temps" />
          </div>


          <div>
            Raison du rendez-vous: <br />
            <input onChange={handleChange} type="text" name="raison" />
          </div>

            <div>
                Docteur: <br />
                <select onChange={handleChange2} name="selectionDocteurs">
                <option value="NoChoice">Selectionner un docteur</option>    
               {docteur.map((user)=>(
                    <option key={user.user_id} value={user.user_id}>{user.firstname} {user.lastname}</option>

               ))}    

                </select> 
            </div>

          <br></br>
          <p> <span className="text-danger">
                        {formErrors.value}<br/>
                        {formErrors.ramq}<br/>
                        {formErrors.email}<br/>
                                        </span>
                        <span className="text-success">{formErrors.success}</span><br/>
                    </p>
          <button onClick={handleSubmit} type="button" className="btn btn-danger">Réserver</button>
            </form>
            </div>


        </div>
        

    )
}
export default RendezVous;
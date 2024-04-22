import React from "react";
import axios from "axios";

function RendezVous(){

  const baseURL = "http://localhost:5000/CreateReservation";
    const reservationValues = {
        ramq: "",
        email: "",
        telephone:"",
        temps:"",
        raison:""
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
  function DataValidation(inputValues) {
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
      return errors;
  }
  function handleSubmit(event){
      event.preventDefault();
      setFormErrors(DataValidation(reservation));
      const userData = {
          ramq:reservation.ramq[0],
          email: reservation.email[0],
          telephone:reservation.telephone[0],
          temps:reservation.temps[0],
          raison:reservation.raison[0]
      }
      if(formErrors.ramq === "" && formErrors.email === "" && formErrors.value === ""){
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
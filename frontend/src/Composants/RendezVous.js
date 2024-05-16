import React from "react";
import axios from "axios";
import { useEffect } from "react";

function RendezVous(){
    /*
    * @author Jimmy Nguyen et Yanni
    *
    * */
 

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
      
  }
  
  
  useEffect(() => {
    axios.get(getDocteur)
        .then(res => setDocteur(res.data))
        .catch(err => console.log(err))
}, [])

    return(
        <div className="d-flex justify-content-center p-2 bg-light-subtle">


            <form onSubmit={handleSubmit}
                  className="justify-content-center border border-dark-subtle p-3 rounded bg-body-tertiary">

                <h1 className="text-center"> Prendre rendez-vous </h1>

                <div className="mt-3 ">
                    <label className="col-sm-2 col-form-label">RAMQ:</label>

                    <input onChange={handleChange} type="text" name="ramq" maxLength={12} className="form-control"
                           placeholder="EX: CVCV21323419"/>
                </div>

                <div className="mt-3">
                    <label className="form-label">Email:</label>
                    <input onChange={handleChange} type="email" name="email" className="form-control "
                           placeholder="noname@noname.co"/>
                </div>

                <div className="mt-3">
                    <label className="form-label">Téléphone:</label>
                    <input onChange={handleChange} type="" name="telephone" className="form-control "/>
                </div>

                <div className="mt-3">
                    <label className="form-label">Date:</label>
                    <input onChange={handleChange} type="date" name="temps" className="form-control "/>
                </div>


                <div className="mt-3">
                    <label className="form-label">Raison:</label>
                    <input onChange={handleChange} type="text" name="raison" className="form-control "/>
                </div>

                <div className="mt-3">
                    <label className="form-label">Docteur: </label>
                    <select onChange={handleChange2} name="selectionDocteurs" className="form-control ">
                        <option value="NoChoice"> Sélectionner un docteur</option>
                        {docteur.map((user) => (
                            <option key={user.user_id}
                                    value={user.user_id}>{user.firstname} {user.lastname}</option>

                        ))}

                    </select>
                </div>
                <div className="text-center mt-3">
                <button onClick={handleSubmit} type="button" className="btn btn-danger mt-3 justify-item-center">Réserver</button>
                </div>
                    <div className="mt-3"> <span className="text-danger">
                        {formErrors.value}<br/>
                    {formErrors.ramq}<br/>
                    {formErrors.email}<br/>
                                        </span>
                    <span className="text-success">{formErrors.success}</span><br/>
                </div>
            </form>


        </div>
    )
}

export default RendezVous;
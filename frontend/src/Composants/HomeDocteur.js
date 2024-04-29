import axios from "axios";
import React, {useEffect} from "react";
import Popup from 'reactjs-popup';
 
function HomeDocteur (){
 
    const baseURL = "http://localhost:5000/reservation";
    const baseURL2="http://localhost:5000/UpdateReservation";
    const baseURL3="http://localhost:5000/UpdateReservationTime";
    const baseURL4="http://localhost:5000/CreateResult";

    const [reservation, setReservation] = React.useState([]);
    const [newTemps,setNewTemps]=React.useState("");

    const ResultatValues = {
        ramq:"",
        patientEmail: "",
        doctorEmail: "",
        message:""
    }
    const [resultat, setResultat] = React.useState(ResultatValues);
    const[formErrors, setFormErrors] = React.useState({});

    function handleChange2(event) {
        setResultat(
            {
            ...resultat,
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
            patientEmail:"",
            doctorEmail:"",
            message:"",
            success: "Votre resultat a été créer"
        };
        console.log(inputValues);
        if(!inputValues.ramq[0] || !inputValues.patientEmail[0] || !inputValues.doctorEmail[0] || !inputValues.message[0]) {
            errors.value = "Aucun champ ne doit etre vide ! ";}

        if(!isValidR(inputValues.ramq[0])) {
            errors.success="";
            errors.ramq = "Veuillez rentrer l'information comme telle 'XXXX00000000' ";
        }
        if(!isValidE(inputValues.patientEmail[0])) {
            errors.success="";
            errors.patientEmail = "Veuillez entrez un email patient valide";
        }
        if(!isValidE(inputValues.doctorEmail[0])) {
            errors.success="";
            errors.doctorEmail = "Veuillez entrez un email docteur valide";
        }

        return errors;
    }

    function handleSubmit(event){
        event.preventDefault();
        setFormErrors(DataValidation(resultat));
        const userData = {
            ramq:resultat.ramq[0],
            patientEmail:resultat.patientEmail[0],
            doctorEmail: resultat.doctorEmail[0],
            message:resultat.message[0] 
        }

        if(formErrors.ramq === "" && formErrors.patientEmail === "" && formErrors.doctorEmail === "" && formErrors.value === ""){
            axios.post(baseURL4, userData,{
                headers: {
                    'Content-Type': 'application/json'
                }})
                .then((res) =>{ console.log(res.status, res.data)})
                .catch(err => console.log(err));
        }
        
    }

   
    useEffect(() => {

        axios.get(baseURL)
            .then(res => setReservation(res.data))
            .catch(err => console.log(err));
 
}, [])



const postData=(id)=>{
    axios.put(baseURL2,{
        index:id,
        status:false
        })
        .then(res=>{
            console.log(res.data);
            setReservation(todo=>todo.filter(resv=>resv.reservation_id!==id));//source1: Voir a la fin de la page
        })

        .catch(err=>console.log(err));
        
}

    const postData2=(id)=>{
        axios.put(baseURL3, {
            index:id,
            temps:newTemps
        })
        .then(res=>{
            console.log(res.data);
            
        })
    }

        function handleChange (event) {
           setNewTemps(event.target.value);
        }

        


    return (
        <div className="container">
        <div className="row">
        <div className="text-center">
                <h1>Page HomeDocteur</h1>
                </div>
                <div className="col-6 border border-dark-subtle bg-body-tertiary p-3">
                <table className="table table-striped">
                    <thead>
                    <h3>Liste des reservations</h3>
                    <tr>
                    <th>Id</th>
                    <th>PatientEmail</th>
                    <th>RAMQ</th>
                    <th>DoctorEmail</th>
                    <th>temps</th>
                    <th>raison</th>
 
                    </tr>
                    </thead>
                    <tbody>
                    {
                        reservation.map((resv) => (
                            <tr key={resv.reservation_id}>
 
                                <td>{resv.reservation_id}</td>
                                <td>{resv.email}</td>
                                <td>{resv.ramq}</td>
                                <td>{resv.doctorEmail}</td>
                                <td>{resv.temps}</td>
                                <td>{resv.raison}</td>
                                <td>
                                <button onClick={()=>postData(resv.reservation_id)} className="btn btn-danger">Annuler</button>
                                <Popup trigger={
                                    <button className="btn btn-info">Modifier</button>}
                                    modal nested>
                                        {
                                            close=>(
                                                <div className="">
                                                    <div className="content">
                                                        Modifier votre temps de RV
                                                    </div>
                                                    <form >
                                                    <div>New temps:
                                                        <input type="date" value={newTemps} onChange={handleChange} name="newTemps"></input>
                                                    </div>
                                                    <br></br>
                                                    <div>
                                                        <button onClick={()=>postData2(resv.reservation_id)}>Add new time</button>
                                                    </div>
                                                    <br></br>
                                                    <div>
                                                        <button onClick={()=>close()}>Close page</button>
                                                    </div>
                                                    </form>
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

            <div className="col-6 border border-dark-subtle bg-body-tertiary p-3">
           <div className="text-center">
            <h3>Soumissions des résultats</h3>
            </div>
            <form onSubmit={handleSubmit} >

            <div className="mt-3">
            <label className="col-form-label">RAMQ:</label>
            <input type="text" name="ramq" maxLength={12} onChange={handleChange2} className="form-control" />
          </div>
          
            <div>
            <label className="col-form-label">PatientEmail:</label>
            <input type="text" name="patientEmail" onChange={handleChange2} className="form-control"/>
          </div>

          <div>
          <label className="col-form-label">DocteurEmail:</label>
            <input type="text" name="doctorEmail" onChange={handleChange2} className="form-control"/>
          </div>

          <div>
          <label className="col-form-label">Message:</label>
            <textarea type="text" name="message" rows="5" cols="50" onChange={handleChange2} className="form-control"/>
          </div>

          
          <button onClick={handleSubmit} type="button" className="btn btn-primary mt-3">Envoyer le formulaire</button>

          <br></br>

          <p>
                        <span className="text-danger">
                            {formErrors.ramq}<br />
                            {formErrors.patientEmail}<br />
                            {formErrors.doctorEmail}<br />
                            {formErrors.value}<br />
                        </span>
                        <span className="text-success">{formErrors.success}</span><br />
                    </p>

            </form>
            

            </div>

            </div>
            
        </div>
        
    );
}
    export default HomeDocteur;

    /*
    source1:https://stackoverflow.com/questions/57341541/removing-object-from-array-using-hooks-usestate
    */
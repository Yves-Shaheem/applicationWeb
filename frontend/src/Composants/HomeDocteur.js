import axios from "axios";
import React, {useEffect} from "react";
import Popup from 'reactjs-popup';
 
function HomeDocteur (){
 
    const baseURL = "http://localhost:5000/reservation";
    const baseURL2="http://localhost:5000/UpdateReservation";
    const baseURL3="http://localhost:5000/UpdateReservationTime";
    const [reservation, setReservation] = React.useState([]);
    const [newTemps,setNewTemps]=React.useState("");
 
   
   
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
    /*

    function handleChange(event) {
        setNewTemps(
            {...newTemps,
            [event.target.name] : [event.target.value]
        }
        )}

*/
        function handleChange (event) {
           setNewTemps(event.target.value);
        }



    return (
        <div className="container">
        <div className="hero col-6">
            <div>
                <h1>Page HomeDocteur</h1>
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
                                <td>{resv.patientEmail}</td>
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
                                                        <input type="text" value={newTemps} onChange={handleChange} name="newTemps"></input>
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
            
            <div className="col-12">

            <h3>Soumissions des résultats</h3>
            <form >
            <div>
            PatientEmail: <br />
            <input type="text" name="patientEmail"/>
          </div>

          <div>
            RAMQ: <br />
            <input type="text" name="ramq" />
          </div>

          <div>
            DocteurEmail: <br />
            <input type="text" name="docteurEmail" maxLength={12}/>
          </div>

          <div>
            Message: <br />
            <textarea type="text" name="message" rows="4" cols="50" />
          </div>


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
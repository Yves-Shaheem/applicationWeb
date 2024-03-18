import React from "react";
import { useState } from "react";
import Taches from "./Taches1";


function HomePatient (){
    const [listItems, setListe] =React.useState([])
    const[unItem,setItem]=useState("")

    const handleButton=()=>{
        setListe([unItem,...listItems])
    }
    const handleText=(ev) =>{
        setItem(ev.target.value)
    }

    const supprimer=(index)=>{
        const newList=[...listItems]
        newList.splice(index,1)
        setListe(newList)
    }


    return (
        <div >
            <br></br>  <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>

            <h1>Liste des taches</h1>
            <input onChange={handleText} type="text" />
            <button onClick={handleButton}>Ajouter</button>

            <table className="table table-striped">
                <tbody>
                {
                    listItems.map((e,index)=>
                        <tr>
                            <td>
                                <Taches texte={e} supprimer={supprimer}/>                                
                            </td>
                        </tr>
                    )

                }
                </tbody>
            </table>

        </div>
    )

}

export default HomePatient;
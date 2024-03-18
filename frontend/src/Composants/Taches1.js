import { useState } from "react";


function Taches({texte,supprimer}){


    const [estActif, changer] = useState(true);


    const handleButton2 = ()=>{
        changer(!estActif)
    }


    return(
        <div className="d-flex justify-content-end">
            <div className="col-6">
                {estActif? texte:<del>{texte}</del>}
            </div>
            <div className="col-4">
                <button onClick={handleButton2} className={estActif ? "btn btn-secondary":"btn btn-success"}>
                    {estActif ? "A faire":"Terminer"}
                </button>
            </div >
            <div className="col-2 ">
                <div>
                    <button onClick={supprimer} className="btn btn-danger">Supprimer</button>
                </div>
            </div>
        </div>
    )

}
export default Taches;
import React from "react";
import PatientCrud from "./PatientCrud";
import DocteurCrud from "./DocteurCrud";


/*
    * @author Shaheem
    *
    * */

function AdminPanel() {
    return (
        <div className="hero">
            <div className="container">
                <PatientCrud/>
                <DocteurCrud/>
            </div>
        </div>
    );
}

export default AdminPanel;



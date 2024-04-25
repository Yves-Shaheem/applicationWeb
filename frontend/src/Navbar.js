// NavBar

import { Link } from "react-router-dom"

function NavBar(){
    return(
        <nav className="navbar navbar-default bg-light">
            <div className="container-fluid">
                <div className="navbar-header">

                <h1 className="navbar-brand">MedHub</h1>
                </div>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <div className="dropdown">
                            <p className="btn dropdown-toggle" type="button" id="dropdownMenuButton"
                               data-toggle="dropdown">
                                home
                            </p>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <Link to="/HomePatient" className="dropdown-item">HomePatient</Link>
                                <Link to="/HomeDocteur" className="dropdown-item">HomeDocteur</Link>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link to="/About" className="nav-link text-dark ">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Services" className="nav-link text-dark ">Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Contact" className="nav-link text-dark">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/RendezVous" className="nav-link text-dark">Rendez-vous</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/RechercherDocteur" className="nav-link text-dark">RechercherDocteur</Link>
                    </li>
                    <li className="nav-item">
                        <div className="dropdown">
                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton"
                                    data-toggle="dropdown">
                                <i className="fa-solid fa-bars"></i>
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <Link to="/Admin" className="dropdown-item">AdminPanel</Link>
                                <Link to="/Inscription" className="dropdown-item">Inscription</Link>
                                <p className="dropdown-item">Pas terminé</p>
                                <Link to="/SeConnecter" className="nav-link text-dark">Se Connecter</Link>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>


    );
}


export default NavBar;
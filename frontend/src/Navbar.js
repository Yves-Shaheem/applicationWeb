// NavBar

import { Link } from "react-router-dom"

const NavBar = () => {
    return(
        <nav className="navbar nav-light ">
            <div className="container-fluid">
                <Link to="/Admin" className="nav-link">AdminPanel</Link>
                <h1 className="navbar-brand">MedHub</h1>
                <ul className="navbar-nav d-flex flex-row">
                    <li className="nav-item">
                        <Link to="/HomePatient" className="nav-link">HomePatient</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/HomeDocteur" className="nav-link">HomeDocteur</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/About" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Services" className="nav-link">Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Contact" className="nav-link">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Inscription" className="nav-link">Inscription</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/SeConnecter" className="nav-link">Se Connecter</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/RendezVous" className="nav-link">Rendez-vous</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/RechercherDocteur" className="nav-link">RechercherDocteur</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                           aria-expanded="false">
                            Dropdown
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>

                </ul>
            </div>
        </nav>


    );
}


export default NavBar;
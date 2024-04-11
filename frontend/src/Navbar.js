// NavBar

import { Link } from "react-router-dom"

const NavBar = () => {

    return(

        <nav className="nav">
            <div className="container">
                <Link to="/Admin">AdminPanel</Link>
                <h1 className="logo"><Link to="/">MedHub</Link></h1>
                <ul>
                    <li> 
                        <Link to="/">Home</Link>
                    </li>
                    <li> 
                        <Link to="/About">About</Link>
                    </li>
                    <li> 
                        <Link to="/Services">Services</Link>
                    </li>
                    <li> 
                        <Link to="/Contact">Contact</Link>
                    </li>

                    <li> 
                        <Link to="/Inscription">Inscription</Link>
                    </li>
                    <li> 
                        <Link to="/SeConnecter">Se Connecter</Link>
                    </li>
                    <li> 
                        <Link to="/RendezVous">Rendez-vous</Link>
                    </li>

                    <li> 
                        <Link to="/HomePatient">HomePatient</Link>
                    </li>

                    <li>
                        <Link to="/HomeDocteur">HomeDocteur</Link>
                    </li>
                    <li> 
                        <Link to="/RechercherDocteur">RechercherDocteur</Link>
                    </li>



                </ul>
            </div>
        </nav>


    );
}


export default NavBar;
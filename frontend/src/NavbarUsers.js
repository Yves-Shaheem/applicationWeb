// NavBarUsers

import { Link } from "react-router-dom"

const NavBar = () => {

    return(

        <nav className="nav">
            <div className="container">
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
                        <Link to="/Contact">Rendez-vous</Link>
                    </li>
                    <button type="button" className="btn btn-danger">Deconnexion</button>
                </ul>
            </div>
        </nav>


    );
}


export default NavBar;
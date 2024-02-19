import { Link } from "react-router-dom"

function SeConnecter() {
    return(
        <div className="hero">
            <div className="col-12">
                <h1>Se connecter...</h1>
                <form method="get">
                <div>
                Code : <br />
                <input type="text" name="code" />
                </div>
                <div>
                Password: <br />
                <input type="password" name="password" />
          </div>
          <br/>
            <button type="button" className="btn btn-primary">Connectez-vous</button>
                
                </form>

            <h3> Vous n'avez pas de compte?</h3>
           
            <li> 
                <Link to="/Inscription">Inscrivez-vous ici.</Link>
            </li>
         
                </div>
            </div>
    )
}

export default SeConnecter;
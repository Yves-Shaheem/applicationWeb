import { Link } from "react-router-dom"


function Inscription(){
    return(


        <div className="hero">
            <div className="col-12">
                <h1>Inscriptions</h1>
                <form  method="get">
                <div>
            Prénom: <br />
            <input type="text" name="firstname" />
          </div>
          
          <div>
            Nom: <br />
            <input type="text" name="lastname" />
          </div>

          <div>
            RAMQ: <br />
            <input type="text" name="ramq" maxLength={12}/>
          </div>

          <div>
            Email: <br />
            <input type="text" name="email" />
          </div>

          <div>
            Password: <br />
            <input type="password" name="password" />
          </div>
          <br></br>
          <input type="checkbox" name="TermsOfUse" value="" /> &nbsp;    
          
              <Link to="/TermsOfUse">Accept terms of use.</Link>
         
            <br></br><br></br>
          <button type="button" className="btn btn-primary">Inscrivez-vous</button>
            </form>
            </div>

        </div>
    )


}
export default Inscription;
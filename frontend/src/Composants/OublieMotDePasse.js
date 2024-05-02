    /*
    * @author Yanni
    *
    * */



function OublieMotDePasse() {
    return(
        <div className="hero">
            <div className="col-12">
                <h1>Vous avez oublié votre mot de passe ?</h1>
                <h3>Veuillez suivre les consignes pour en récupérer un autre</h3>
                <br/><br/><br/>

                <h1>Formulaire pour récupérer un mot de passe.</h1>
                <form method="get">
                <div>
                Votre Nom :  <br />
                <input type="text" name="code" />
                </div>
                <div>
                Votre email :  <br />
                <input type="text" name="code" />
                </div>
                <div>
          </div>
          <br/>
            <button type="button" className="btn btn-primary">Envoyer code email</button>
            </form>
            </div>
        </div>
    )
}


export default OublieMotDePasse
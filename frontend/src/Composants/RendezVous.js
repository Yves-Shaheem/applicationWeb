function RendezVous(){
    return(
        <div className="hero">
            <div className="col-12">
                <h1>Prendre rendez-vous</h1>
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
            Numéro de téléphone: <br />
            <input type="text" name="ramq" maxLength={12}/>
          </div>

          <div>
            Email: <br />
            <input type="text" name="email" />
          </div>

          <div>
            Raison du rendez-vous: <br />
            <input type="text" name="raison" />
          </div>
          <br></br>
          <button type="button" className="btn btn-danger">Réserver</button>
            </form>
            </div>



        </div>
        

    )
}
export default RendezVous;
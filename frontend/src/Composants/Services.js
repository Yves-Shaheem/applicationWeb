function Services() {
    return(
        /*
    * @author Yanni
    *
    * */
 
        <div className="container p-2">
            <div className="border border-dark-subtle p-2 rounded bg-body-tertiary">
                <div className="pt-1">
                 <div className="entete">  
                <h1>Nos services médicaux</h1>
                <p>Si vous avez des questions générales sur la médecine...</p></div> 
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Symptomes</th>
                            <th scope="col">Ce que vous avez</th>
                            <th scope="col">Petites solutions pour enlever la douleur</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="table-danger">
                            <th scope="row">1</th>
                            <td>Mal à la gorge</td>
                            <td>Fièvre, attraper froid...</td>
                            <td>Sommeil, repos, médicaments.</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Mal à la tête</td>
                            <td>Fièvre, manque de sommeil</td>
                            <td>Sommeil, repos, médicaments pour enlever la douleur.</td>
                        </tr>
                        <tr className="table-danger">
                            <th scope="row">3</th>
                            <td>Mal au ventre</td>
                            <td>Manque de nourriture , gastro</td>
                            <td>Médicaments, manger , boire de l'eau</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Mal au dos</td>
                            <td>Mauvais geste, froid</td>
                            <td>Sommeil, massage, crème</td>
                        </tr>
                        <tr className="table-danger">
                            <th scope="row">5</th>
                            <td>Mal au pied</td>
                            <td>Simple douleur, mauvais geste</td>
                            <td>Attendre que la douleur disparais</td>
                        </tr>
                    </tbody>
                </table>
                <div className="text-center">
                    <h4>⚠ Si vous avez des douleurs assez graves et elle ne se retrouvent pas dans le tableau, veuillez nous contacter. ⚠</h4>
                    <h5>Le tableau sera mis à jour !</h5>
                </div>
            </div>
        </div>
    )
}
 
export default Services;
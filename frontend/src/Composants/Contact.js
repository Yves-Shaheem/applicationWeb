import { Link } from "react-router-dom"
function Contact() {
    return(
        <div className="container text-center ">
            <div>
                <div className="mt-5">
                    <h1>Page Contact</h1>
                    <h4>Contactez-nous si vous avez des questions. Nous sommes disponibles toute la semaine.</h4>
                </div>

                <div className="row mt-5">
                    <div className="col-sm"><i className="fa-solid fa-phone fa-4x"></i><br/>Par téléphone <br/>
                        <b>514-595-9201</b></div>
                    <div className="col-sm"><i class="fa-regular fa-envelope fa-4x"></i><br/>Par email <br/>
                        <b>MedHub@gmail.com</b></div>
                    <div className="col-sm"><i class="fa-solid fa-location-dot fa-4x"></i><br/>Notre adresse<br/> <b>729 rue
                    laFrontiere, Montréal QC, B8J 9J7</b></div>
                </div>
                <br/><br/><br/><br/><br/><br/><br/>
                <div>
                    <h1>Vous avez toujours des questions ? Regardez notre</h1>
                    <Link to="/Faq" className="text-decoration-none text-body-secondary">
                        <h1>FAQ 📃</h1>
                    </Link>
                </div>


            </div>
        </div>
    )
}

export default Contact;
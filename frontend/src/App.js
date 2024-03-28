import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from './Navbar';
import  Home from './Composants/Home'
import About from './Composants/About'
import Footer2 from './Composants/Footer2';
import Services from './Composants/Services'
import Contact from "./Composants/Contact"
import NotFound from './Composants/NotFound';
import Inscription from './Composants/Inscription';
import SeConnecter from './Composants/SeConnecter';
import RendezVous from './Composants/RendezVous';
import TermsOfUse from './Composants/TermsOfUse';
import HomePatient from "./Composants/HomePatient";
import AdminPanel from "./Composants/AdminPanel";
import Faq from "./Composants/Faq";
import HomeDocteur from "./Composants/HomeDocteur";
import OublieMotDePasse from "./Composants/OublieMotDePasse";
import RechercherDocteur from './Composants/RechercherDocteur';

function App() {
  return (
    <>
   <BrowserRouter>
      <NavBar />
      <div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Contact' element={<Contact/>}/>
          <Route path="*" element={<NotFound/>} />
          <Route path="/Inscription" element={<Inscription/>} />
          <Route path="/SeConnecter" element={<SeConnecter/>} />
          <Route path="/RendezVous" element={<RendezVous/>} />
          <Route path="/TermsOfUse" element={<TermsOfUse/>} />
          <Route path='/HomePatient' element={<HomePatient/>} />
          <Route path='/Admin' element={<AdminPanel/>} />
          <Route path='/Faq' element={<Faq/>} />
          <Route path='/HomeDocteur' element={<HomeDocteur/>}/>
          <Route path='/OublieMotDePasse' element={<OublieMotDePasse/>} />
          <Route path='/RechercherDocteur' element={<RechercherDocteur/>} />

        </Routes>
      </div>
    </BrowserRouter>
    <Footer2 />
    
    </>
  );
}

export default App;
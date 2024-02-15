import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from './Navbar';
import  Home from './Composants/Home'
import About from './Composants/About'
import Footer2 from './Composants/Footer2';

function App() {
  return (
    <>
   <BrowserRouter>
      <NavBar />
      <div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/About' element={<About/>} />
        </Routes>
      </div>
    </BrowserRouter>
    <Footer2 />
    
    </>
  );
}

export default App;
// import logo from './logo.svg';
import './style/App.css';
import Footer from './component/Footer';
//import NavBar from './component/NavBar';
import Carousel from './component/Carousel';
import Cities from './component/Cities';
import NavBarDos from './component/NavBarDos';
import {Routes,Route } from "react-router-dom"
import Home from "./component/Home"

//-----LOGICA------


function App() {// FUNCION DONDE HABITA TODO EL CONTENIDO

  return (//RETURN DE APP()



    <div className='app'>
     
    
     <Routes>
        <Route path="*" element={<Home />}></Route>
        <Route path="/Home" element={<Carousel />}>  </Route>
        <Route path="/Cities" element={<NavBarDos />}></Route>
        <Route path="/AboutUs" element={<Footer/>}></Route>
      </Routes>

      
      <div></div>
    </div>
  );
}

export default App;

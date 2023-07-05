// import logo from './logo.svg';
import './style/App.css';
import Home from './component/Home';
import Cities from './component/Cities';
import CityDetails from './component/CityDetails';
import Activities from './component/Activities';
import { Routes, Route } from "react-router-dom"

//-----LOGICA------

function App() {// FUNCION DONDE HABITA TODO EL CONTENIDO

  return (//RETURN DE APP()
    <div className='app'>
      <Routes>
        <Route path="*" element={<Home />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Cities" element={<Cities />}></Route>
        <Route path="/CityDetails/:id" element={<CityDetails />}></Route>
        <Route path="/Activities" element={<Activities />}></Route>
      </Routes>
    </div>
  );
}

export default App;
// import logo from './logo.svg';
import './style/App.css';
import Footer from './component/Footer';
//import NavBar from './component/NavBar';
import Carousel from './component/Carousel';
import Cities from './component/Cities';

//-----LOGICA------


function App() {// FUNCION DONDE HABITA TODO EL CONTENIDO

  return (//RETURN DE APP()
    <div className='app'>
      <Routes>
        <Route path="*" element={<Home />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Cities" element={<Cities />}></Route>
      </Routes>
    </div>
  );
}

export default App;

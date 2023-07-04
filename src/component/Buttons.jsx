import { FaArrowUp } from "react-icons/fa";
import "../style/App.css"
import { useNavigate } from 'react-router-dom';


function Buttons() {
    
    const navigate = useNavigate();

    const clickToHome = () => {
        navigate('/Home'); // Ruta a la que se redirigirá al hacer clic en el botón
    };
    const clickToCities = () => {
        navigate('/Cities'); // Ruta a la que se redirigirá al hacer clic en el botón
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return(
        <div className="buttons">
            <div className="nav-bar">
                <button onClick={clickToHome}>Home</button>
                <button onClick={clickToCities}>Cities</button>
            </div>
            <button className="btn-top" onClick={scrollToTop}><FaArrowUp /></button>
        </div>
    )
}

export default Buttons;
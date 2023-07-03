import { useNavigate } from 'react-router-dom';
import { FaGlobe } from "react-icons/fa";

function CallToAction() {
  const navigate = useNavigate();

  const clickToAction = () => {
    navigate('/Cities'); // Ruta a la que se redirigirá al hacer clic en el botón
  };

  return (
    <div className="call-to-action">
      <div className="title">
        <h1>My Tinerary</h1>
        <h4>Find your perfect trip, designed by insiders who know and love their cities</h4>
        <button className="btn-call-to-action" onClick={clickToAction}><FaGlobe /> CITIES</button>
      </div>
    </div>
  );
}

export default CallToAction;

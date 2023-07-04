import { useNavigate } from 'react-router-dom';
import { FaGlobe } from "react-icons/fa";

function CallToAction() {
  const navigate = useNavigate();

  const clickToAction = () => {
    navigate('/Cities'); // Ruta a la que se redirigirá al hacer clic en el botón
  };

  return (
    <button className="btn-call-to-action" onClick={clickToAction}><FaGlobe /> CITIES</button>
  );
}

export default CallToAction;

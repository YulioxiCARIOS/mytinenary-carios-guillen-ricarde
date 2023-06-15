import { useNavigate } from 'react-router-dom';

function CallToAction() {
  const navigate = useNavigate();

  const clickToAction = () => {
    navigate('/cities'); // Ruta a la que se redirigirá al hacer clic en el botón
  };

  return (
    <div className="call-to-action">
      <div className="title">
        <h1>My Tinerary</h1>
        <p>Find your perfect trip, designed by insiders who know and love their cities</p>
        <button className="btn-call-to-action" onClick={clickToAction}>Cities</button>
      </div>
    </div>
  );
}

export default CallToAction;

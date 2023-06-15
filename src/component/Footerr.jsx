import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import InstagramLink from "./LinkInsta";
import FacebookLink from "./LinkFace";
import TwitwLink from "./LinkTwi";
import YouTLink from "./LinkYouT";

function Footerr() {
 
    const navigate = useNavigate();

    const clickToHome = () => {
      navigate('/Home'); // Ruta a la que se redirigirá al hacer clic en el botón
    };
    const clickToCities = () => {
        navigate('/Cities'); // Ruta a la que se redirigirá al hacer clic en el botón
      };
      

    return (
        <div className="footer">
            <div className="footer-row">
               
                <div className="log-redes">

                    <div className="red">
                        <div className="twitter">
                            <TwitwLink />
                        </div>
                        <div className="facebook">
                            <FacebookLink  />
                        </div>
                        <div className="instagram">
                           < InstagramLink/>
                        </div>
                        <div className="youtube">
                            <YouTLink />
                        </div>
                    </div>
                </div>
                <div className="links">
                    <h4>Links</h4>
                    <ul>
                        <li onClick={clickToHome}>Home</li>
                        <li onClick={clickToCities}>Cities</li>
                    </ul>
                </div>
                <div className="other">
                    <h4>Other Links</h4>
                    <ul>
                        <li>Legal Warning</li>
                        <li>Privacy Policy</li>
                        <li>Terms and Conditions</li>
                    </ul>
                </div>
                <div className="quick">
                    <h4>Quick Contact</h4>
                    <ul>
                        <li>+123-456-7890</li>
                        <li>MyTinerary@gmail.com</li>
                        <li>Federal Capital, Argentina</li>
                    </ul>
                </div>
                <div className="logo" onClick={clickToHome}></div>
            </div>
            <div className="copyright">
                <p>Copyright @ 2023 by Carios-Guillen-Ricarde</p>
            </div>
        </div>
    )
}
export default Footerr

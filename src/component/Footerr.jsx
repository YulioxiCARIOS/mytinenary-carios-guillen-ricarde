import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footerr() {
    return (
        <div className="footer">
            <div className="footer-row">
                <div>
                    <div className="logo"></div>
                    <div><div className="twitter">
                        <FaTwitter />
                    </div>
                        <div className="facebook">
                            <FaFacebookF />
                        </div>
                        <div className="instagram">
                            <FaInstagram />
                        </div>
                        <div className="youtube">
                            <FaYoutube />
                        </div>
                    </div>
                </div>
                <div>
                    <h4>Links</h4>
                    <ul>
                        <li>Home</li>
                        <li>Cities</li>
                    </ul>
                </div>
                <div>
                    <h4>Other Links</h4>
                    <ul>
                        <li>Legal Warning</li>
                        <li>Privacy Policy</li>
                        <li>Terms and Conditions</li>
                    </ul>
                </div>
                <div>
                    <h4>Quick Contact</h4>
                    <ul>
                        <li>+123-456-7890</li>
                        <li>MyTinerary@gmail.com</li>
                        <li>Federal Capital, Argentina</li>
                    </ul></div>
            </div>
            <div className="copyright">
                <p>Copyright @ 2023 by Carios-Guillen-Ricarde</p>
            </div>
        </div>
    )
}
export default Footerr
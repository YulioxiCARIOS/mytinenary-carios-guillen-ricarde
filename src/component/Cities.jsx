import NavBar from "../component/NavBar"
import Footerr from "./Footer"
import { FaExclamationTriangle } from "react-icons/fa";

function Cities() {
    return (
        <>
            <NavBar />
            <div className="cities">
                <FaExclamationTriangle className="exclamation-triangle"/>
                <h1>WEB SITE</h1>
                <h3>UNDER CONSTRUCTION</h3>
            </div>
            <Footerr />
        </>
    )
}
export default Cities
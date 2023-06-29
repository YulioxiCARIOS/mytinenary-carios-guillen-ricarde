import NavBar from "../component/NavBar";
import Footerr from "./Footer";
//import CitiesPrueba from "./CitiesPrueba"
import { FaExclamationTriangle } from "react-icons/fa";

function Cities() {
    return (
        <>
            <NavBar />
            <div className="cities">
                <FaExclamationTriangle className="exclamation-triangle" />
                <h1>PAGE</h1>
                <h3>UNDER CONSTRUCTION</h3>
            </div>

            {/* <CitiesPrueba /> */}


            <Footerr />
        </>
    )
}
export default Cities
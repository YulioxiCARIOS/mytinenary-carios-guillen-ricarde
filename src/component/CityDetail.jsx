import NavBar from "../component/NavBar"
import Footer from "./Footer"
import { FaExclamationTriangle } from "react-icons/fa";

function CityDetail() {

    return (
        <>
            <NavBar />
            <div className="cities">
                <FaExclamationTriangle className="exclamation-triangle" />
                <h1>PAGE</h1>
                <h3>UNDER CONSTRUCTION</h3>
            </div>
            <Footer />
        </>
    )
}
export default CityDetail
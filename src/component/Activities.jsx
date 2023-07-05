import "../style/App.css"
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import { FaExclamationTriangle } from "react-icons/fa";

function Activities() {

    return (
        <>
            <NavBar />
            <div className="activities">
                <FaExclamationTriangle />
                <h2>PAGE</h2>
                <h3>UNDER CONSTRUCTION</h3>
            </div>
            <Footer />
        </>
    )
}

export default Activities;
import { useEffect, useState } from "react";
import NavBar from "../component/NavBar";
import axios from "axios";
import Footerr from "./Footer";
//import CitiesPrueba from "./CitiesPrueba"
import { FaExclamationTriangle } from "react-icons/fa";

function Cities() {
    const [cities, setCities] = useState([])
    let citiesDb
    async function getData() {
        citiesDb = await axios.get("http://localhost:4000/api/cities")
        setCities(citiesDb.data.response.cities)
        
        console.log(citiesDb)
    }
    useEffect(() => {
        getData()
  
    },[])
    useEffect(() => {
        console.log(cities)
    },[cities])
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
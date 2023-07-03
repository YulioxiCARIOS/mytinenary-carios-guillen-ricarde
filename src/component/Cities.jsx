import { useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import "../style/App.css"
import NavBar from "../component/NavBar";
import axios from "axios";
import Footerr from "./Footer";
import { FaExclamationTriangle } from "react-icons/fa";

function Cities() {
    // const [cities, setCities] = useState([])
    // let citiesDb
    // async function getData() {
    //     //citiesDb = await axios.get("http://localhost:4000/api/cities")
    //     //setCities(citiesDb.data.response.cities)
    //     //console.log(citiesDb)
    // }
    // useEffect(() => {
    //     getData()

    // }, [])
    // useEffect(() => {
    //     console.log(cities)
    // }, [cities])
    
    const navigate = useNavigate();

    const clickCities = () => {
        navigate('/CityDetail'); // Ruta a la que se redirigirá al hacer clic en el botón
    };

    return (
        <>



            <NavBar />
            <div className="cities">
                <div className="card-content">
                    <div className="card">
                        <div className='image-cities'></div>
                        <div className="text">
                            <h2>Buenos Aires</h2>
                            <p>Argentina</p>
                        </div>
                        <div className="text-info">
                            <p><i className="fa-solid fa-money-bill-wave"></i>Price: $</p>
                            <button className="btn-cities" onClick={clickCities}>Ver Detalles</button>
                        </div>
                    </div>
                </div>
                {/* <FaExclamationTriangle className="exclamation-triangle" />
                <h1>PAGE</h1>
                <h3>UNDER CONSTRUCTION</h3> */}
            </div>
            <Footerr />
        </>
    )
}
export default Cities
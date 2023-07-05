import NavBar from "./NavBar"
import Footer from "./Footer"
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { FaBuilding } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaAtlas } from "react-icons/fa";

function CityDetails() {

    const [city, setCity] = useState([])

    const { id } = useParams()
    console.log(id)

    async function getCity(id) {
        let cityDB
        cityDB = await axios.get("http://localhost:4000/api/cities/" + id)
        setCity(cityDB.data.response)
    }
    useEffect(() => {
        getCity(id)
    }, [])


    const navigate = useNavigate();

    const clickToActivities = () => {
        navigate('/Activities'); // Ruta a la que se redirigirá al hacer clic en el botón
    };

    return (
        <>
            <NavBar />
            <div className="main-citydetails">
                {city.length > 0 ?
                    <div className="container-citydetails">
                        <img className="image-citydetails" src={city[0].image} alt="" />
                        <div className="text-citydetails">
                            <div className="location"></div>
                            <h4>{city[0].name}, {city[0].country}</h4>
                        </div>
                        <div className="details-citydetails">
                            <h2>Description:</h2>
                            <h3>{city[0].description}</h3>
                            <div className="container-details-citydetails">
                                <div className="row-details-citydetails">
                                    <h4 className="key-row-details-citydetails"><FaBuilding /> City</h4>
                                    <h4 className="value-row-details-citydetails">: {city[0].name}</h4>
                                </div>
                                <div className="row-details-citydetails">
                                    <h4 className="key-row-details-citydetails"><FaGlobeAmericas /> Country</h4>
                                    <h4 className="value-row-details-citydetails">: {city[0].country}</h4>
                                </div>
                                <div className="row-details-citydetails">
                                    <h4 className="key-row-details-citydetails"><FaGlobe /> Continent</h4>
                                    <h4 className="value-row-details-citydetails">: {city[0].continent}</h4>
                                </div>
                                <div className="row-details-citydetails">
                                    <h4 className="key-row-details-citydetails"><FaAtlas /> Language</h4>
                                    <h4 className="value-row-details-citydetails">: {city[0].language}</h4>
                                </div>
                            </div>
                        </div>
                        <button className="btn-activities" onClick={clickToActivities}>See Activities...</button>
                    </div>

                    : <h1>Loading...</h1>}
            </div >
            <Footer />
        </>
    )
}
export default CityDetails
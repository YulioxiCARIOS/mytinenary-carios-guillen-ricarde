import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../style/App.css"
import NavBar from "../component/NavBar";
import axios from "axios";
import Footer from "./Footer";
import { Link as LinkRouter } from 'react-router-dom';
import { FaArrowUp } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

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

    }, [])
    useEffect(() => {
        console.log(cities)
    }, [cities])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // const navigate = useNavigate();

    // const clickCities = () => {
    //     navigate('/CityDetail'); // Ruta a la que se redirigirá al hacer clic en el botón
    // };

    return (
        <>
            <NavBar />
            <div className="main-cities">
                <div className="search">
                    <div className="search-icon"><FaSearch /></div>
                    <input type="search" placeholder="Find Your City Here.."/>
                </div>
                {cities.length > 0 ?
                    <div className="card-container-cities">
                        {cities.map((city, index) =>
                            <div className="card-cities" key={index}>
                                <img className="image-cities" src={city.image} alt={city.name} />
                                <div className="row-cities">
                                    <div className="location-cities">

                                    </div>
                                    <div className="text-cities">
                                        <h3>{city.name}, <span>{city.country}</span></h3>
                                    </div>
                                </div>
                                <div className="card-cities-hover">
                                    <h4>Description:</h4>
                                    <p>{city.description}</p>
                                    <LinkRouter to={"/CityDetails/" + city._id}><button className="btn-cities">See More...</button></LinkRouter>
                                </div>
                            </div>
                        )}
                    </div>
                    : <h1>Loading...</h1>}
                <button className="btn-top" onClick={scrollToTop}><FaArrowUp /></button>
            </div >
            <Footer />
        </>
    )
}

export default Cities;
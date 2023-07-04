import { useEffect, useState } from "react";
import "../style/App.css"
import NavBar from "../component/NavBar";
import axios from "axios";
import Footer from "./Footer";
import { Link as LinkRouter } from 'react-router-dom';
import '../style/Carousel.css';
import Buttons from "../component/Buttons";
import InputSearch from "./InputSearch";



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

    return (
        <>
            <NavBar />
            <div className="main-cities">
                {cities.length > 0 ?
                    <div className="container-cities">
                        <InputSearch />
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
                                        <LinkRouter to={"/CityDetails/" + city._id}><button className="btn-cities">See More...</button></LinkRouter>
                                    </div>
                                </div>
                            )}
                        </div>
                        <Buttons />
                    </div>
                    : <h1>Loading...</h1>}
            </div >
            <Footer />
        </>
    )
}

export default Cities;
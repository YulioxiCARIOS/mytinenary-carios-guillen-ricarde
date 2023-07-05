import { useEffect, useState } from "react";
import "../style/App.css"
import NavBar from "./NavBar";
import axios from "axios";
import Footer from "./Footer";
import { Link as LinkRouter } from 'react-router-dom';
import '../style/Carousel.css';
import Buttons from "../component/Buttons";
import { Plane } from "./Plane";
import { FaSearch } from "react-icons/fa";
// import React from 'react';
// import { Plane } from '@bit/mhnpd.react-loader-spinner.plane';
// import { getRandomColor } from '@bit/joshk.jotils.get-random-color'



function Cities() {
    const [cities, setCities] = useState([]);
    const [search, setSearch] = useState("");
    const [arrayToFilter, setArrayToFilter] = useState([]);

    let citiesDb
    async function getData() {
        citiesDb = await axios.get("https://zoralia-guillen-api-cities-crud.onrender.com/api/cities")
        setCities(citiesDb.data.response.cities)
        setArrayToFilter(citiesDb.data.response.cities)
        console.log(citiesDb)
    }

    const input = e => {
        setSearch(e.target.value)
        filtered(e.target.value);
    }

    const filtered = (inputSearch) => {
        var resultSearch = arrayToFilter.filter((element) => {
            if (element.name.toLowerCase().startsWith(inputSearch.toLowerCase())) {
                return (element)
            }
        })
        setCities(resultSearch)
    }

    useEffect(() => {
        getData()
    }, [])

    console.log(search)

    return (
        <>
            <NavBar />
            <div className="main-cities">
                <div className="input-search">
                    <div className="search-icon"><FaSearch /></div>
                    <input type="search" value={search} placeholder="Find Your City Here.." onChange={input} />
                </div>
                {cities.length > 0 ?
                    <div className="container-cities">
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
                                        <LinkRouter to={"/CityDetails/" + city._id}><button className="btn-cities">See Details..</button></LinkRouter>
                                    </div>
                                </div>
                            )}
                        </div>
                        <Buttons />
                    </div>
                    : search === ""? <Plane/> :<div><h1>No se encontro</h1></div>
                }
            </div >
            <Footer />
        </>
    )
}

export default Cities;
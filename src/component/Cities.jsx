import { useEffect, useState } from "react";
import "../style/App.css"
import NavBar from "../component/NavBar";
import axios from "axios";
import Footer from "./Footer";
import { Link as LinkRouter } from 'react-router-dom';
import '../style/Carousel.css';
import Buttons from "../component/Buttons";
import { FaSearch } from "react-icons/fa";
// import React from 'react';
// import { Plane } from '@bit/mhnpd.react-loader-spinner.plane';
// import { getRandomColor } from '@bit/joshk.jotils.get-random-color'



function Cities() {
    const [cities, setCities] = useState([]);
    const [search, setSearch] = useState("");

    let citiesDb
    async function getData() {
        citiesDb = await axios.get("http://localhost:4000/api/cities")
        setCities(citiesDb.data.response.cities)
        console.log(citiesDb)
    }

    const input=e=>{
        setSearch(e.target.value)
        filtered(e.target.value);
    }

    const filtered=(inputSearch)=>{
        var resultSearch=cities.filter((element)=>{
            if(element.name.toLowerCase().startsWith(inputSearch.toLowerCase())){
            return (element)
            }
            else if(cities.length === 0){
                return(
           <h1>No se encontro</h1>
            )}
        })
        setCities(resultSearch)
    }

    useEffect(() => {
        getData()
    }, [])



    return (
        <>
            <NavBar />
            <div className="main-cities">
                {cities.length > 0 ?
                    <div className="container-cities">
                        <div className="input-search">
                            <div className="search-icon"><FaSearch /></div>
                            <input type="search" value={search} placeholder="Find Your City Here.." onChange={input} />
                        </div>
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
                    : <div>
                        {/* <Plane
                    color={getRandomColor()}
                    height={150}
                    width={150}
                /> */} Loading
                </div >
                        }
            </div >
            <Footer />
        </>
    )
}

export default Cities;
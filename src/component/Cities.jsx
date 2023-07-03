import { useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import "../style/App.css"
import NavBar from "../component/NavBar";
import axios from "axios";
import Footerr from "./Footer";
import { Link as LinkRouter } from 'react-router-dom';

function Cities() {

    const [cities, setCities] = useState([])
    let citiesDB
    async function getData() {
        citiesDB = await axios.get("http://localhost:4000/api/cities")
        console.log(citiesDB)
        setCities(citiesDB.data.response.cities)
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
            <div className="main">
                <div><input className="Allcity-input" name="text" type="text" placeholder="Find Your City"/></div>
                {cities.length > 0 ? (
                    <div className="card-content-cities" >
                        {cities.map((city) => 
                            <div className="card-cities" key={city._id}>
                                <img className="image-cities" src={city.image} alt="" />
                                
                                <div className="row-cities">
                                    <div className="location-cities"></div>
                                    <div className="name-cities">
                                        <h2>{city.name}, <span>{city.country}</span></h2>
                                    </div>
                                </div>
                                <div className="hover">
                                    {city.description}
                                    <LinkRouter to={'/CityDetails/'+city._id}><button >See Details</button></LinkRouter>
                                </div>
                            </div>
                        )}
                    </div>
                ) : <h1>Loading...</h1>}
            </div >
            <Footerr />
        </>
    )
}
export default Cities
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import NavBar from "../component/NavBar";
import axios from "axios";
import Footerr from "./Footer";


function Cities() {
    const [cities, setCities] = useState([])
    let citiesDb
    async function getData() {
        citiesDb = await axios.get("http://localhost:4000/api/cities")
        setCities(citiesDb.data.response.cities)
        //console.log(citiesDb)
    }
    useEffect(() => {
        getData()

    }, [])
    useEffect(() => {
        console.log(cities)
    }, [cities])

    const navigate = useNavigate();

    const clickCities = () => {
        navigate('/CityDetail'); // Ruta a la que se redirigirá al hacer clic en el botón
    };

    return (
        <>



            <NavBar />





            <div className="cities">
                {cities.length > 0 ? (
                    <div>
                        {cities.map((city) => (
                            <div className="card-content" key={city.id}>
                                <div className="card">
                                    <div className='image-cities'> <img src={city.image} alt="" /> </div>
                                    <div className="text">
                                        <h2>{city.name}</h2>
                                        <p>{city.country}</p>
                                    </div>
                                    <div className="text-info">
                                        <p><i className="fa-solid fa-money-bill-wave"></i>Price: $</p>
                                        <button className="btn-cities" onClick={clickCities}>Ver Detalles</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : <h1>Loading...</h1>}
            </div>




            <Footerr />
        </>
    )
}
export default Cities
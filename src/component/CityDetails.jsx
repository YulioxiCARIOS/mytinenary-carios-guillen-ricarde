import NavBar from "./NavBar"
import Footer from "./Footer"
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from "axios";

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

    return (
        <>
            <NavBar />
            <div className="main">
                {city.length > 0 ?
                    <img className="image-city" src={city[0].image} alt="" />
                    : <h1>Loading...</h1>}
            </div >
            <Footer />
        </>
    )
}
export default CityDetails
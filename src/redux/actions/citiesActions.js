import axios from "axios";

const citiesAction={

    searchResult:(filterResult)=>{
        return (dispatch,getState) =>{
            dispatch({type:"searchResult", payload:filterResult})

        }


    },
    getCities : ()=>{
        return async (dispatch,getState)=>{
            const res =  await await axios.get("https://zoralia-guillen-api-cities-crud.onrender.com/api/cities")
            dispatch({type:"loadCities", payload:res.data.response.cities})
        }
    }

}

export default citiesAction;
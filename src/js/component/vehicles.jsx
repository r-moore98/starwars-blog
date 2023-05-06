import React, {useState, useEffect} from "react";
import axios from "axios";

const Vehicles = () =>{
    const [data, setData] = useState([]);
    const [favorites, setFavorites] = useState([]);
    
    const apiVehicles = "https://swapi.dev/api/Vehicles/"

    useEffect (() => {
        axios.get (apiVehicles).then ((resonse) =>{
            setData(resonse.data.results);
        })
        .catch((error) => {
            console.log(error);
        })
    }, []);

    return(
        <h2 style={{display: "flex", color: "red"}}>
            Vehicles
        </h2>
    )


}





export default Vehicles;
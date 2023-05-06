import React, {useState, useEffect} from "react";
import axios from "axios";
import { Card } from "react-bootstrap";

const Planets = () =>{
    const [data, setData] = useState([]);
    const [favorites, setFavorites] = useState([]);
    
    const apiPlanets = "https://swapi.dev/api/planets/"

    useEffect (() => {
        axios.get (apiPlanets).then ((resonse) =>{
            setData(resonse.data.results);
        })
        .catch((error) => {
            console.log(error);
        })
    }, []);


    return(
        <div>
            <h2 style={{display: "flex", color: "red"}}>
                Planets
            </h2>
            <div style={{overflow:"scroll", display:"felx"}}>
                {data.map((item, index) =>(
                    <Card key={index}
                    style={{minWidth: "18rem", margin: "0 10px" }}>
                    <Card.Img
                    variant="top"
                    src={`https://starwars-visualguide.com/assets/img/planets/${index + 1}.jpg`}
                    />

                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                            <b>Population:</b>{item.population} <br/>
                            <b>Terrain:</b>{item.terrain} <br/>
                        </Card.Text>
                    </Card.Body>

                    </Card>
                ))
                }
                
            </div>
        </div>
    )


}




export default Planets;
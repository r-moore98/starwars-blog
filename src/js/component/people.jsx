import React, {useState, useEffect} from "react";
import {Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const People = () =>{
    const [data, setData] = useState([]);
    const [favorites, setFavorites] = useState([]);
    
    const apiPeople = "https://swapi.dev/api/people/"

    useEffect (() => {
        axios
        .get (apiPeople)
        .then ((resonse) =>{
            setData(resonse.data.results);
        })
        .catch((error) => {
            console.log(error);
        })
    }, []);
    


    return (
        <div>
          <h2 style={{ display: "flex", color: "red", fontWeight: "bold" }}>
            People
          </h2>
          <div style={{ overflowX: "scroll", display: "flex" }}>
            {data.map((item, index) => (
              <Card
                key={index}
                style={{ minWidth: "18rem", margin: "0 10px" }}
              >
                <Card.Img
                  variant="top"
                  src={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`}
                />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    <b>Gender:</b> {item.gender} <br />
                    <b>Hair Color:</b> {item.hair_color}<br />
                    <b>Eye-Color:</b> {item.eye_color} <br />
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <Link
                      to={`/single/people/${index}`}
                      className="btn btn-primary"
                    >
                      View Details
                    </Link>
                    {/* <Button
                      variant="outline-danger"
                      onClick={() => handleFavoriteClick(item)}
                    >
                      <FontAwesomeIcon
                        icon={faHeart}
                        color={
                          favorites.some(
                            (favoritePerson) => favoritePerson.name === item.name
                          )
                            ? "red"
                            : "gray"
                        }
                      />
                    </Button> */}
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
          {/* {favorites.length > 0 && (
            <div>
              <h2 style={{ display: "flex", color: "red", fontWeight: "bold" }}>
                Favorite People
              </h2>
              <div>
                {favorites.map((favorite, index) => (
                  <div key={index}>{favorite.name}</div>
                ))}
              </div>
            </div>
          )} */}
        </div>
      );
    };




export default People;
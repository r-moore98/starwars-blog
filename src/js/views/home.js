import React from "react";
import People from "../component/people.jsx";
import Planets from "../component/planets.jsx";
import Vehicles from "../component/vehicles.jsx";
import "../../styles/home.css";


export const Home = () => (
	<div className="text-center mt-5">
		< People />
		< Planets />
		< Vehicles />
	</div>
);

import React from "react";
import NavBar from "./navBar";
import CardsContainer from "./cardContainer";
import Welcome from "./welcome";

//create your first component
const Home = () => {
	return [<NavBar />, <Welcome />, <CardsContainer />];
};

export default Home;

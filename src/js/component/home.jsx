import React from "react";
import cardContainer from "./cardContainer";
import NavBar from "./navBar";
import CardContainer from "./cardContainer";
import JumbotronContainer from "./jumbotronContainer";
import Footer from "./footer";

//create your first component
const Home = () => {
	return (
		<>
			<NavBar />
			<JumbotronContainer />
			<CardContainer />
			<Footer />
		</>
	);
};

export default Home;

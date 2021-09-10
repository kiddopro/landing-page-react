import React from "react";
import Card from "./card";

const cards = [<Card />, <Card />, <Card />, <Card />];

const CardsContainer = () => {
	return <div className="container d-flex">{cards}</div>;
};

export default CardsContainer;

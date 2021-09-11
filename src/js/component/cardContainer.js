import React from "react";
import Card from "./card";

const CardContainer = () => {
	return (
		<div className="container-fluid d-flex justify-content-center">
			<div className="row ">
				<div className="col-md-3">
					<Card />
				</div>
				<div className="col-md-3 ">
					<Card />
				</div>
				<div className="col-md-3 ">
					<Card />
				</div>
				<div className="col-md-3 ">
					<Card />
				</div>
			</div>
		</div>
	);
};

export default CardContainer;

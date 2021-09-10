import React from "react";
import PropTypes from "prop-types";

const cardStyles = {
	margin: "10px",
	width: "auto"
};

const Card = () => {
	return (
		<div className="card" style={cardStyles}>
			<img
				src="https://picsum.photos/500/325"
				className="card-img-top"
				alt="500x325"
			/>
			<div className="card-body">
				<h5 className="card-title text-center">Card title</h5>
				<p className="card-text text-center">
					Some quick example text to build on the card title and make
					up the bulk of the card&aposs content.
				</p>
				<a href="#" className="btn btn-primary">
					Find Out More!
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	style: PropTypes.string
};

export default Card;

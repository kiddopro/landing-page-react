import React from "react";
import PropTypes from "prop-types";

const welcomeStyles = {
	width: "100%"
};

const welcomeTitle = {
	fontSize: "40px"
};

const Welcome = () => {
	return (
		<div className="container">
			<div className="card py-5" style={welcomeStyles}>
				<div className="card-body">
					<h1 className="card-title" style={welcomeTitle}>
						A Warm Welcome!
					</h1>
					<p className="card-text">
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the industrys
						standard dummy text ever since the 1500s, when an
						unknown printer took a galley of type and scrambled it
						to make a type specimen book. It has survived not only
						five centuries, but also the leap into electronic
						typesetting, remaining essentially unchanged.
					</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
};

Welcome.propTypes = {
	style: PropTypes.string
};

export default Welcome;

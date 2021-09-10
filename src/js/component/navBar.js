import React from "react";

const anchors = [
	<a className="nav-link active text-white" href="#" key="1">
		Home <span className="sr-only">(current)</span>
	</a>,
	<a className="nav-link text-secondary" href="#" key="2">
		About
	</a>,
	<a className="nav-link text-secondary" href="#" key="3">
		Services
	</a>,
	<a className="nav-link text-secondary" href="#" key="4">
		Contact
	</a>
];

const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-dark">
			<a className="navbar-brand text-white ml-3" href="#">
				Start Bootstrap
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavAltMarkup"
				aria-controls="navbarNavAltMarkup"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div
				className="collapse navbar-collapse justify-content-end mr-3"
				id="navbarNavAltMarkup">
				<div className="navbar-nav">{anchors}</div>
			</div>
		</nav>
	);
};

export default NavBar;

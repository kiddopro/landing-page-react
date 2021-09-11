import React from "react";

const NavBar = () => {
	return (
		<nav
			className="navbar navbar-expand-lg navbar-light bg-dark position-sticky sticky-top"
			style={{ width: "100%" }}>
			<a className="navbar-brand text-white " href="#">
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
				className="collapse navbar-collapse justify-content-end "
				id="navbarNavAltMarkup">
				<div className="navbar-nav">
					<a className="nav-link active text-white" href="#">
						Home <span className="sr-only">(current)</span>
					</a>
					<a className="nav-link text-secondary" href="#">
						About
					</a>
					<a className="nav-link text-secondary" href="#">
						Services
					</a>
					<a className="nav-link text-secondary" href="#">
						Contact
					</a>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;

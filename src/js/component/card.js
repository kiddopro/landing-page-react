import React from "react";

const Card = () => {
	return (
		<div className="card my-3" style={{ width: "100%" }}>
			<img
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTAxhe_mfS4YIPO1QrWsMyrSlenDZ5DkLCIw&usqp=CAU"
				className="card-img-top img-fluid"
				alt="..."
			/>
			<div className="card-body text-center">
				<h5 className="card-title ">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the cards content.
				</p>
				<hr />
				<a href="#" className="btn btn-primary">
					Find Out More!
				</a>
			</div>
		</div>
	);
};

export default Card;

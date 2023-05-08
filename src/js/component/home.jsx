import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
	const [selectedColor, setSelectedColor] = useState("red");
	return (
		<div className="traffic-light mx-2 py-2">
			<div className={"light red"  + ((selectedColor === "red") ? "glow" : "")}></div>
			<div className="light yellow"></div>
			<div className="light green"></div>


		</div>
	);
};

export default Home;

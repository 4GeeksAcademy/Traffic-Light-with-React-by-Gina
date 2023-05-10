import React, { useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";

const Home = () => {
	const [selectedColor, setSelectedColor] = useState("");
	return (
	  <div className="container col-2 ">
		<div className="pole"></div>
		<div className="traffic-light py-3 rounded">
		<div
          onClick={() => setSelectedColor("red")}
          className={"light red p-2 " + (selectedColor === "red" ? " glow" : "")}
        >
          {selectedColor === "red" && <span className="stop-text">STOP</span>}
        </div>
		  <div
			onClick={() => setSelectedColor("yellow")}
			className={"light yellow " + (selectedColor === "yellow" ? " glow" : "")}
		  ></div>
		  <div
			onClick={() => setSelectedColor("green")}
			className={"light green p-2" + (selectedColor === "green" ? " glow" : "")}
		  ></div>
		</div>
	  </div>
	);
  };
  
  export default Home;
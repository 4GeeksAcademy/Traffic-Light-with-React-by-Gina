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
			className={"light yellow p-2 " + (selectedColor === "yellow" ? " glow" : "")}
		>
			{selectedColor === "yellow" && <span className="wait-text">WAIT</span>}
		  </div>
		  <div
			onClick={() => setSelectedColor("green")}
			className={"light green p-2" + (selectedColor === "green" ? " glow" : "")}
		>
			{selectedColor === "green" && <span className="go-text">GO</span>}
		  </div>
		</div>
	  </div>
	);
  };
  
  export default Home;
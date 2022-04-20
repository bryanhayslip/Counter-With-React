//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

<script
	src="https://kit.fontawesome.com/026b9a1a2b.js"
	crossorigin="anonymous"></script>;

//import your own components
import SecondsCounter from "./component/SecondsCounter.jsx";

//render your react application
let counter = 0;
let start = Date.now();
setInterval(function () {
	let seconds = Math.floor((Date.now() - start) / 1000);
	counter++;
	ReactDOM.render(
		<div>
			<SecondsCounter seconds={counter} />
			<SecondsCounter seconds={seconds} />
		</div>,
		document.querySelector("#app")
	);
}, 1000);

// ReactDOM.render(
// 	<SecondsCounter seconds={3434} />,
// 	document.querySelector("#app")
// );
// setInterval();

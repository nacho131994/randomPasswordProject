import React from "react";
 
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import Checkbox from "./Checkbox.jsx";
import Options from "./Options.jsx";
//create your first component
const Home = () => {
	return (
		<>
	<Navbar />
	<Hero />
	<Checkbox />
	<Options  />
	</>

	);
};

export default Home;

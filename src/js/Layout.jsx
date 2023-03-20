import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Navbar from "./component/Navbar.jsx";
import MyPasswords from "./views/MyPasswords.jsx";
import Main from "./views/Main.jsx";

const Layout = () => {
    const basename ="";
    return (
		<div>
			<BrowserRouter basename={basename}>
				
					<Navbar />
					<Routes>
						<Route path="/" element={<Main />} />
						<Route path="/my_passwords" element={<MyPasswords />} />
					</Routes>
			</BrowserRouter>
		</div>
	);
};

export default Layout;
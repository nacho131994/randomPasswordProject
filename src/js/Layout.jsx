import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Navbar from "./component/Navbar.jsx";
import MyPasswords from "./views/MyPasswords.jsx";
import Main from "./views/Main.jsx";
import { AppProvider } from "./context/context.jsx";

const Layout = () => {
    const basename ="";
    return (
			<AppProvider>
				<BrowserRouter basename={basename}>
						<Navbar />
						<Routes>
							<Route path="/" element={<Main />} />
							<Route path="/my_passwords" element={<MyPasswords />} />
						</Routes>
				</BrowserRouter>
			</AppProvider>
	);
};

export default Layout;
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// styles
import "./App.css";

// Hooks
import { createBrowserHistory } from "history";
import { ProvideAuth } from "./hooks/useAuth";

// Components
import GetData from "./components/getData";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Mailbox from "./components/Mailbox";
import Compose from "./components/Compose";
import Email from "./components/Email";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Register from "./components/Register";

// Styles
import { GlobalStyle } from "./globalstyle";

function App() {
	const history = createBrowserHistory();
	// const [currentEmail, setCurrentEmail] = useState();

	return (
		<Router history={history}>
			{/* <GetData /> */}
			{/* <Home /> */}
			<ProvideAuth>
				<Navigation />
				<Routes>
					<Route exact path="/register" element={<Register />} />
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/logout" element={<Logout />} />
					<Route exact path="/compose" element={<Compose />} />
					<Route exact path="/read" element={<Email />} />
					<Route exact path="/reply" element={<Email />} />
					<Route exact path="/mailbox/:mailbox" element={<Mailbox />} />
				</Routes>
			</ProvideAuth>
			<GlobalStyle />
		</Router>
	);
}

export default App;

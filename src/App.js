import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// styles
import "./App.css";

// Hooks
import { useMessageFetch } from "./hooks/useMessageFetch";
import { createBrowserHistory } from "history";

// Components
import GetData from "./components/getData";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Mailbox from "./components/Mailbox";
import Compose from "./components/Compose";
import Email from "./components/Email";
import { Login } from "./components/Login";

// Styles
import { GlobalStyle } from "./globalstyle";

function App() {
	const { messages, setMailbox, mailbox } = useMessageFetch();
	const history = createBrowserHistory();
	const [currentEmail, setCurrentEmail] = useState();

	return (
		<Router history={history}>
			<GetData />
			{/* <Home /> */}

			<Navigation mailbox={mailbox} setMailbox={setMailbox} />
			<Routes>
				<Route exact path="/login" element={<Login />} />
				<Route exact path="/compose" element={<Compose />} />
				<Route
					exact
					path="/read"
					element={<Email currentEmail={currentEmail} />}
				/>
				<Route
					exact
					path="/reply"
					element={<Email currentEmail={currentEmail} />}
				/>
				<Route
					exact
					path="/"
					element={
						<Mailbox messages={messages} setCurrentEmail={setCurrentEmail} />
					}
				/>
			</Routes>

			<GlobalStyle />
		</Router>
	);
}

export default App;

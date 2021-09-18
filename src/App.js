import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// styles
import "./App.css";

// Hooks
import { useMessageFetch } from "./hooks/useMessageFetch";
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

// Styles
import { GlobalStyle } from "./globalstyle";

function App() {
	const { messages, setMailbox, mailbox } = useMessageFetch();
	const history = createBrowserHistory();
	const [currentEmail, setCurrentEmail] = useState();
	const [user, setUser] = useState(localStorage.getItem("access_token"));

	return (
		<Router history={history}>
			{/* <GetData /> */}
			{/* <Home /> */}
			<ProvideAuth>
				<Navigation mailbox={mailbox} setMailbox={setMailbox} user={user} />
				<Routes>
					<Route exact path="/login" element={<Login setUser={setUser} />} />
					<Route exact path="/logout" element={<Logout />} />
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
			</ProvideAuth>
			<GlobalStyle />
		</Router>
	);
}

export default App;

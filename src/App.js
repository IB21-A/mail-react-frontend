import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// styles
import "./App.css";

// Hooks
import { useMessageFetch } from "./hooks/useMessageFetch";

// Components
import GetData from "./components/getData";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Mailbox from "./components/Mailbox";
import Compose from "./components/Compose";

// Styles
import { GlobalStyle } from "./globalstyle";

import { createBrowserHistory } from "history";

function App() {
	const { messages, setMailbox, mailbox } = useMessageFetch();
	const history = createBrowserHistory();
	return (
		<Router history={history}>
			<GetData />
			{/* <Home /> */}

			<Navigation mailbox={mailbox} setMailbox={setMailbox} />
			<Routes>
				<Route path="/compose" element={<Compose />} />
				<Route exact path="/" element={<Mailbox messages={messages} />} />
			</Routes>

			<GlobalStyle />
		</Router>
	);
}

export default App;

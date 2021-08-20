import React from 'react';
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// styles
import './App.css';

import GetData from "./components/getData";

// Styles
import { GlobalStyle } from "./globalstyle";

function App() {
	return (
		<React.Fragment>
			<div className="App">
				<GetData />
			</div>
			<GlobalStyle />
		</React.Fragment>
	);
}

export default App;

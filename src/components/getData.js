import React, { Component } from "react";
// import { getMessage } from "./services/apiService";

class GetData extends Component {
	state = {
		message: "",
	};

	componentDidMount() {
		this.getMessage();
	}
	// const myMessage = getMessage();
	// console.log(message);
	getMessage = async () => {
		const apiRoute = "http://127.0.0.1:8000/api/test";
		try {
			const response = await fetch(apiRoute);
			const { message } = await response.json();
			// console.log(message);
			this.setState({ message });
		} catch (ex) {
			if (ex.response && ex.response.status === 400) {
				console.log(ex.response.data);
			}
		}
	};

	render() {
		const info = "data";
		console.log(info);

		return (
			<div>
				"Hello"
				<div>{info}</div>
				<div>{this.state.message}</div>
			</div>
		);
	}
}

export default GetData;

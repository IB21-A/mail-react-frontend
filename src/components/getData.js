import React, { Component } from "react";
import Home from "./Home";
import axiosInstance from "../axios";
// import { getMessage } from "./services/apiService";
import { useMessageFetch } from "./hooks/useMessageFetch";

class GetData extends Component {
	state = {
		message: "",
		user: "",
		emails: {},
	};

	componentDidMount() {
		// this.getMessage();
		this.login();
		// this.getMailBox();
		// this.test();
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

	getMailBox = async () => {
		try {
			axiosInstance.get(`/emails/inbox`).then((res) => {
				// console.log(res.data);
				this.setState({ emails: res.data });
			});
		} catch (ex) {
			if (ex.response && ex.response.status === 400) {
				console.log(ex.response.data);
			}
		}
	};

	test = async () => {
		try {
			axiosInstance.get(`/user/show/`).then((res) => {
				console.log(res.data["Message"]);
				this.setState({ user: res.data["Message"] });
			});
		} catch (ex) {
			if (ex.response && ex.response.status === 400) {
				console.log(ex.response.data);
			}
		}
	};

	login = async () => {
		const apiRoute = "http://127.0.0.1:8000/api/token";
		// const username = "ib21@cs50.com";
		// const password = "a42d8c2019";
		const username = "thom@cs50.com";
		const password = "a42d8c2019";

		try {
			axiosInstance
				.post(`token/`, {
					username: username,
					password: password,
				})
				.then((res) => {
					localStorage.setItem("access_token", res.data.access);
					localStorage.setItem("refresh_token", res.data.refresh);
					axiosInstance.defaults.headers["Authorization"] =
						"JWT " + localStorage.getItem("access_token");
				});

			// const result = await fetch(apiRoute, {
			// 	method: "POST",
			// 	"Content-Type": "application/json",
			// 	accept: "application/json",
			// 	body: JSON.stringify({ username, password }),
			// });
			// console.log(result.access);
			// console.log(result.refresh);
		} catch (ex) {
			if (ex.response && ex.response.status === 400) {
				console.log(ex.response.data);
			}
		}
		return;
	};

	render() {
		const info = "data";
		console.log(info);
		const { emails } = this.state;
		console.log(emails);
		return (
			<div>
				"Hello"
				<div>{info}</div>
				<div>{this.state.message}</div>
				<div>{this.state.user}</div>
				<Home />
			</div>
		);
	}
}

export default GetData;

import React, { useEffect } from "react";
// Styles
import { Wrapper } from "./Register.styles";

// hooks
import { useAuth } from "../../hooks/useAuth";

import API from "../../API";

const Register = () => {
	// const auth = useAuth();
	// useEffect(() => {
	// 	auth.Register();
	// }, []);

	useEffect(() => {
		async function registerUser() {
			const username = "devon@cs50.com";
			const password = "6e72a5a473";
			const res = await API.register(username, password);
			console.log(res.data);
		}

		registerUser();
	}, []);

	return (
		<Wrapper>
			<div>Registering</div>
		</Wrapper>
	);
};

export default Register;

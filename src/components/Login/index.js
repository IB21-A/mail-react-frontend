import React, { useState } from "react";
// Styles
import { Wrapper } from "./Login.styles";
// React components
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const doSubmit = async (e) => {
		e.preventDefault();
	};

	return (
		<Wrapper>
			<Form>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Username</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter Username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<Form.Text className="text-muted">
						The email address you are accessing
					</Form.Text>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</Form.Group>
				<Button variant="primary" type="submit" onSubmit={doSubmit}>
					Submit
				</Button>
			</Form>
		</Wrapper>
	);
};

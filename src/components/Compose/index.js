import React from "react";
import { useState } from "react";

import { Wrapper } from "./Compose.styles";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { useNavigate } from "react-router-dom";

import axiosInstance from "../../axios";

const blankEmail = {
	to: "",
	from: "",
	subject: "",
	body: "",
};

const Compose = ({ email }) => {
	const [recipients, setRecipients] = useState("");
	const [subject, setSubject] = useState("");
	const [body, setBody] = useState("");
	const [isPending, setIsPending] = useState(false);
	let navigate = useNavigate();

	const doSubmit = (e) => {
		e.preventDefault();
		const email = { recipients, subject, body };
		setIsPending(true);
		axiosInstance.post(`emails/compose`, JSON.stringify(email)).then(() => {
			setIsPending(false);
			navigate("/");
		});
	};

	return (
		<Wrapper>
			<Form onSubmit={doSubmit}>
				<Form.Group
					className="mb-3"
					controlId="exampleForm.ControlInput1"
					size="lg">
					<Form.Label>Email to:</Form.Label>
					<Form.Control
						type="email"
						placeholder="name@cs50.com"
						value={recipients}
						onChange={(e) => setRecipients(e.target.value)}
					/>
				</Form.Group>
				<Form.Group
					className="mb-3"
					controlId="exampleForm.ControlInput1"
					size="lg">
					<Form.Label>Subject</Form.Label>
					<Form.Control
						type="subject"
						name="subject"
						value={subject}
						placeholder="Subject"
						onChange={(e) => setSubject(e.target.value)}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
					<Form.Label>Write your email here</Form.Label>
					<Form.Control
						as="textarea"
						rows={3}
						value={body}
						onChange={(e) => setBody(e.target.value)}
					/>
				</Form.Group>
				{!isPending && (
					<Button variant="primary" type="submit" onSubmit={doSubmit}>
						Send
					</Button>
				)}
				{isPending && (
					<Button variant="primary" type="submit" disabled>
						Sending...
					</Button>
				)}
			</Form>
		</Wrapper>
	);
};

export default Compose;

import React, { useEffect, useState } from "react";

import { Wrapper, Content } from "./Email.styles";
import Button from "react-bootstrap/Button";

import { useLocation, useNavigate } from "react-router-dom";

const Email = () => {
	const navigate = useNavigate();
	const { state: email } = useLocation();

	// TODO toggle read/unread status
	// TODO toggle archive status

	const handleReply = () => {
		navigate("/compose", { state: email });
	};

	const handleDelete = () => {
		console.log("delete");
	};

	const handleArchive = () => {
		const redirectedMailbox = "archive";
		navigate("/", { state: redirectedMailbox });
		console.log("redirect to archive");
		// TODO add put request to archive message
	};

	return (
		<Wrapper>
			{email && (
				<Content>
					<div id="sender">From: {email.sender}</div>
					<div id="recipients">To: {email.recipients.join(", ")}</div>
					<div id="timestamp">Time: {email.timestamp}</div>
					<div id="subject">Subject: {email.subject}</div>
					<hr />
					<div id="message-body">{email.body}</div>
					<div id="option-buttons">
						<div className="reply-button">
							<Button variant="outline-primary btn" onClick={handleReply}>
								Reply
							</Button>
						</div>
						<div className="action-buttons">
							<Button variant="outline-danger btn-sm" onClick={handleDelete}>
								Delete
							</Button>
							<Button variant="outline-primary btn-sm" onClick={handleArchive}>
								Archive
							</Button>
						</div>
					</div>
				</Content>
			)}
			{!email && navigate("/")}
		</Wrapper>
	);
};

export default Email;

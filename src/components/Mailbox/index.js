import React from "react";
import { Wrapper } from "./Mailbox.styles";
import MessageLine from "../MessageLine";

import { Link, useNavigate } from "react-router-dom";

const Mailbox = ({ messages, setCurrentEmail }) => {
	const navigate = useNavigate();

	const handleClick = (id) => {
		// call setEmail so the Email component can load that email.
		const email = messages.find((message) => message.id === id);

		// setEmail(email);
		setCurrentEmail(email);
		navigate("/read", { state: email });
	};

	return (
		<Wrapper>
			{messages.map((message) => (
				<MessageLine
					key={message.id}
					id={message.id}
					sender={message.sender}
					subject={message.subject}
					read={message.read}
					timestamp={message.timestamp}
					handleClick={handleClick}
				/>
			))}
		</Wrapper>
	);
	// return (
	// 	<Wrapper>
	// 		{messages.map((message) => (
	//
	// 			<MessageLine
	// 				key={message.id}
	// 				id={message.id}
	// 				sender={message.sender}
	// 				subject={message.subject}
	// 				read={message.read}
	// 				timestamp={message.timestamp}
	// 				handleClick={handleClick}
	// 			/>
	//
	// 		))}
	// 	</Wrapper>
	// );
};

export default Mailbox;

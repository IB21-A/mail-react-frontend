import React, { useEffect, useState } from "react";

// styles
import { Wrapper } from "./Mailbox.styles";

// components
import MessageLine from "../MessageLine";
import Spinner from "../common/Spinner";

import { Link, useNavigate, useParams } from "react-router-dom";

import API from "../../API";

const Mailbox = () => {
	let { mailbox } = useParams();
	const navigate = useNavigate();
	const [currentMailbox, setCurrentMailbox] = useState(mailbox);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		const fetchMessages = async () => {
			try {
				setError(false);
				setLoading(true);

				const emails = await API.fetchMessages(mailbox);

				setMessages(emails);
			} catch (ex) {
				setError(true);
			}
			setLoading(false);
		};

		fetchMessages(mailbox);
	}, [mailbox]);

	const handleClick = (id) => {
		const email = messages.find((message) => message.id === id);
		markAsRead(email);

		// pass the selected message through state props into the read email component
		navigate("/read", { state: email });
	};

	function markAsRead(email) {
		email.read = true;
		API.updateReadOrArchiveStatus(email);
	}
	// TODO add pagination

	return (
		<Wrapper>
			{loading ? (
				<Spinner />
			) : (
				messages.map((message) => (
					<MessageLine
						key={message.id}
						id={message.id}
						sender={message.sender}
						subject={message.subject}
						read={message.read}
						timestamp={message.timestamp}
						handleClick={handleClick}
					/>
				))
			)}
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

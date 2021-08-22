import React from "react";
// Hooks
import { useMessageFetch } from "./hooks/useMessageFetch";
import { useState, useEffect } from "react";
import axiosInstance from "../axios";
// Components
import Navigation from "./Navigation";
import MessageLine from "./MessageLine";
import Mailbox from "./Mailbox";

const Home = () => {
	const { messages, setMailbox, mailbox } = useMessageFetch();

	// const [mailbox, setMailbox] = useState("inbox");
	// const [loading, setLoading] = useState(false);
	// const [error, setError] = useState(false);
	// const [messages, setMessages] = useState([]);

	// initial render
	// useEffect(() => {
	// 	const fetchMessages = async () => {
	// 		try {
	// 			setError(false);
	// 			setLoading(true);

	// 			const result = await axiosInstance.get(`/emails/${mailbox}/`);
	// 			console.log("fetching messages");
	// 			console.log(result.data);

	// 			// setMessages(() => ({
	// 			// 	messages: result.data,
	// 			// }));
	// 			setMessages(result.data);
	// 		} catch (ex) {
	// 			setError(true);
	// 		}
	// 		setLoading(false);
	// 	};

	// 	fetchMessages();
	// }, [mailbox]);


	return (
		<>
			<Navigation mailbox={mailbox} setMailbox={setMailbox} />
			<Mailbox messages={messages}/>
			{/* {messages.map((message) => (
				<MessageLine
					key={message.id}
					sender={message.sender}
					subject={message.subject}
					read={message.read}
					timestamp={message.timestamp}
				/>
			))} */}
		</>
	);
};;

export default Home;

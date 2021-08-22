import React from "react";
import { useState, useEffect } from "react";
import axiosInstance from "./../../axios";


export const useMessageFetch = () => {
	const [mailbox, setMailbox] = useState("inbox");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [messages, setMessages] = useState([]);

	// initial render
	useEffect(() => {
		const fetchMessages = async () => {
			try {
				setError(false);
				setLoading(true);

				const result = await axiosInstance.get(`/emails/${mailbox}/`);
				const emails = result.data;
				// setMessages({ messages: emails }); // Works but creates messages.messages
				setMessages(emails);
			} catch (ex) {
				setError(true);
			}
			setLoading(false);
		};

		fetchMessages(mailbox);
	}, [mailbox]);

	return { mailbox, messages, error, loading, setMailbox };
};

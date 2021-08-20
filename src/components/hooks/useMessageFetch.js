import React from "react";
import { useState, useEffect } from "react";
import axiosInstance from "./../../axios";

export const useMessageFetch = () => {
	const [mailbox, setMailbox] = useState("inbox");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [messages, setMessages] = useState({});

	const fetchMessages = async (mailbox = "inbox") => {
		try {
			setError(false);
			setLoading(true);

			const messages = await axiosInstance.get(`/emails/inbox/`);
			console.log("fetching messages");
			console.log(messages);

			setMessages(() => ({
				messages,
			}));
		} catch (ex) {
			setError(true);
			console.log(error);
		}
		setLoading(false);
	};

	// initial render
	useEffect(() => {
		if (!mailbox) return;

		fetchMessages(mailbox);
	}, [mailbox]);

	return { mailbox, messages, error, loading };
};

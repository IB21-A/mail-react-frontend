import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axios";
import API from "../API";

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

				// const result = await axiosInstance.get(`/emails/${mailbox}/`);
				// const emails = result.data;

				const emails = await API.fetchMessages(mailbox);

				setMessages(emails);
			} catch (ex) {
				setError(true);
			}
			setLoading(false);
		};

		fetchMessages(mailbox);
	}, [mailbox]);

	// useEffect(() => {

	// 	const fetchEmail = async () => {
	// 		const email = messages.find((message) => message.id === currentEmail);

	// 		setEmail(email);
	// 	};

	// 	fetchEmail();
	// }, [currentEmail]);

	return {
		mailbox,
		messages,
		error,
		loading,
		setMailbox,
	};
};

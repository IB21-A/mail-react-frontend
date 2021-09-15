import axiosInstance from "./axios";

const apiSettings = {
	fetchMessages: async (mailbox) => {
		const result = await axiosInstance.get(`/emails/${mailbox}/`);
		const emails = result.data;
		return emails;
	},
	// fetchMessages: async (mailbox, page) => {
	// 	const result = await axiosInstance.get(`/emails/${mailbox}/`);
	// 	const emails = result.data;
	// 	return emails;
	// },
	fetchMessage: async (id) => {
		const result = await axiosInstance.get(`/emails/get/${id}/`);
		const email = result.data;
		return email;
	},
	sendMessage: async (email) => {
		// axiosInstance.post(`emails/compose`, JSON.stringify(email))
		// 	.then((response) => {
		// 		return response.status;
		// 	});
		return await (
			await axiosInstance.post(`emails/compose`, JSON.stringify(email))
		).status;
	},
	updateReadOrArchiveStatus: async (email) => {
		return await await axiosInstance.put(
			`emails/edit/${email.id}`,
			JSON.stringify(email)
		).status;
	},
	deleteMessage: async () => {},
};

export default apiSettings;

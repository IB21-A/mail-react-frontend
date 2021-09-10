import axiosInstance from "./axios";

const apiSettings = {
	fetchMessages: async (mailbox) => {
		const result = await axiosInstance.get(`/emails/${mailbox}/`);
		const emails = result.data;
		return emails;
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
	updateRead: async (email) => {
		return await await axiosInstance.put(
			`emails/edit/${email.id}`,
			JSON.stringify(email)
		).status;
	},
	archiveMessage: async () => {},
	deleteMessage: async () => {},
};

export default apiSettings;

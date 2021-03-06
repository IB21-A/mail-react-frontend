import axiosInstance from "./axios";
import jwtDecode from "jwt-decode";

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
      await axiosInstance.post(`emails/compose/`, JSON.stringify(email))
    ).status;
  },
  updateReadOrArchiveStatus: async (email) => {
    return await await axiosInstance.put(
      `emails/edit/${email.id}`,
      JSON.stringify(email)
    ).status;
  },
  deleteMessage: async (email) => {
    try {
      await axiosInstance.delete(`emails/delete/${email.id}`);
      return;
    } catch (error) {
      return console.log(error);
    }
  },
  register: async (username, password) => {
    const res = await axiosInstance
      .post(`register/`, {
        email: username,
        password: password,
        confirmation: password,
      })
      .catch((error) => {
        console.log(error.response.data);
        return error.response.data.message;
      });

    // If registration works, log user in, else return error
    if (res.status === 201) {
      apiSettings.login(username, password);
      return;
    }

    return res;
  },
  login: async (username, password) => {
    try {
      const res = await axiosInstance.post(`token/`, {
        username: username,
        password: password,
      });
      localStorage.setItem("access_token", res.data.access);
      localStorage.setItem("refresh_token", res.data.refresh);
      axiosInstance.defaults.headers["Authorization"] =
        "JWT " + localStorage.getItem("access_token");

      let user = jwtDecode(res.data.access);

      window.location.href = "/mailbox/inbox";
      return user;
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        console.log(ex.response.data);

        return false;
      }
    }
  },
  logout: async () => {
    try {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      window.location.href = "/login";
    } catch (ex) {}
  },
  getCurrentUser: async () => {
    try {
      let jwt = await jwtDecode(localStorage.getItem("access_token"));

      return jwt.username; // return username
    } catch (ex) {}
  },
};

export default apiSettings;

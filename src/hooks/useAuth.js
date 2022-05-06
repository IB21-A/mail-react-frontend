import React, { useState, useEffect, useContext, createContext } from "react";
import jwtDecode from "jwt-decode";

import API from "../API";

const authContext = createContext();

export function ProvideAuth({ children }) {
	const auth = useProvideAuth();
	return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object
// and re-render when it changes
export const useAuth = () => {
	return useContext(authContext);
};

// provider hook that creates auth object and handles state
export function useProvideAuth() {
	const [user, setUser] = useState(null);

	const login = async (username, password) => {
		console.log("useProvideAuth.login"); // Debug output, delete
		const user = await API.login(username, password);
		console.log(user);
		setUser(user);
		return user;
	};

	const logout = async () => {
		console.log("useProvideAuth.logout"); // Debug output, delete
		setUser(null);
		API.logout();
	};

	const getUser = async () => {
		return await API.getCurrentUser();
		// if (user) {
		// 	try {
		// 		console.log("try getUser");
		// 		return user;
		// 	} catch (ex) {
		// 		console.log("error decoding user");
		// 	}
		// }
		// console.log("nouser");
		// return null;
	};
	//

	// Subscribe to user on mount
	// Because this sets state in the callback it will cause any ...
	// ... component that utilizes this hook to re-render with the ...
	// ... latest auth object.
	useEffect(() => {
		try {
			let token = localStorage.getItem("access_token");
			// if (token === null) {
			// 	setUser(null);
			// 	return;
			// }
			setUser(jwtDecode(token));
		} catch (ex) {
			setUser(null);
			return;
		}

		// Cleanup subscription on unmount
	}, []);

	return { user, login, logout, getUser };
}

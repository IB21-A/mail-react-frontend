import React, { useState, useEffect, useContext, createContext } from "react";
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
		setUser(user);
		return user;
	};

	const logout = async () => {
		console.log("useProvideAuth.logout"); // Debug output, delete
		setUser(null);
		API.logout();
	};
	//

	// Subscribe to user on mount
	// Because this sets state in the callback it will cause any ...
	// ... component that utilizes this hook to re-render with the ...
	// ... latest auth object.
	//   useEffect(() => {
	//     const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
	//       if (user) {
	//         setUser(user);
	//       } else {
	//         setUser(false);
	//       }
	//     });
	//     // Cleanup subscription on unmount
	//     return () => unsubscribe();
	//   }, []);

	return { user, login, logout };
}

import React, { useEffect } from "react";
// Styles
import { Wrapper } from "./Logout.styles";

// helpers
import API from "../../API";

const Logout = () => {
	useEffect(() => {
		API.logout();
	}, []);

	return (
		<Wrapper>
			<div>Logging out...</div>
		</Wrapper>
	);
};

export default Logout;

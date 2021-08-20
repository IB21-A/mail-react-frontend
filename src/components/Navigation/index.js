import React from "react";
// Styles
import { Wrapper } from "./Navigation.styles";
// Bootstrap Component
import Button from "react-bootstrap/Button";

const Navigation = ({ mailbox, setMailbox }) => {
	return (
		<Wrapper className="navigaton">
			<Button variant="outline-primary btn-sm">Inbox</Button>
			<Button variant="outline-primary btn-sm">Compose</Button>
			<Button variant="outline-primary btn-sm">Sent</Button>
			<Button variant="outline-primary btn-sm">Archived</Button>
			<Button variant="outline-primary btn-sm">Logout</Button>
		</Wrapper>
	);
};

export default Navigation;

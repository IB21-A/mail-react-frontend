import React from "react";
// Styles
import { Wrapper } from "./Navigation.styles";
// Bootstrap Component
import Button from "react-bootstrap/Button";

const Navigation = ({ mailbox, setMailbox }) => {
	
	const getButtonClasses = (buttonValue) => {
		return mailbox == buttonValue ? "primary btn-sm" : "outline-primary btn-sm";
	};

	return (
		<>
			<Wrapper className="navigaton">
				<Button
					variant={getButtonClasses("inbox")}
					value="inbox"
					onClick={(e) => setMailbox(e.currentTarget.value)}>
					Inbox
				</Button>
				<Button variant="outline-primary btn-sm">Compose</Button>
				<Button
					variant={getButtonClasses("sent")}
					value="sent"
					onClick={(e) => setMailbox(e.currentTarget.value)}>
					Sent
				</Button>
				<Button
					variant={getButtonClasses("archive")}
					value="archive"
					onClick={(e) => setMailbox(e.currentTarget.value)}>
					Archived
				</Button>
				<Button variant="outline-primary btn-sm">Logout</Button>
			</Wrapper>
		</>
	);
};

export default Navigation;

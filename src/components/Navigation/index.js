import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// Styles
import { Wrapper } from "./Navigation.styles";
// Bootstrap Component
import Button from "react-bootstrap/Button";

import { useLocation, useNavigate } from "react-router-dom";

const Navigation = ({ mailbox, setMailbox, user }) => {
	const getButtonClasses = (buttonValue) => {
		return mailbox == buttonValue ? "primary btn-sm" : "outline-primary btn-sm";
	};

	// hacky way to redirect to archive after archiving an email
	const { state: redirectedMailbox } = useLocation();
	useEffect(() => {
		if (redirectedMailbox && redirectedMailbox.length > 0) {
			setMailbox(redirectedMailbox);
		}
	});

	return (
		<>
			<Wrapper className="navigaton">
				<Link to={`/`}>
					<Button
						variant={getButtonClasses("inbox")}
						value="inbox"
						onClick={(e) => setMailbox(e.currentTarget.value)}>
						Inbox
					</Button>
				</Link>
				<Link to={`/compose`}>
					<Button variant="outline-primary btn-sm">Compose</Button>
				</Link>
				<Link to={`/`}>
					<Button
						variant={getButtonClasses("sent")}
						value="sent"
						onClick={(e) => setMailbox(e.currentTarget.value)}>
						Sent
					</Button>
				</Link>
				<Link to={`/`}>
					<Button
						variant={getButtonClasses("archive")}
						value="archive"
						onClick={(e) => setMailbox(e.currentTarget.value)}>
						Archived
					</Button>
				</Link>
				{user && (
					<Link to={`/logout`}>
						<Button variant="outline-primary btn-sm">Logout</Button>
					</Link>
				)}
				{!user && (
					<Link to={`/login`}>
						<Button variant="outline-primary btn-sm">Login</Button>
					</Link>
				)}
			</Wrapper>
		</>
	);
};

export default Navigation;

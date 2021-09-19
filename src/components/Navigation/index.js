import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
// Styles
import { Wrapper } from "./Navigation.styles";
// Bootstrap Component
import Button from "react-bootstrap/Button";
import { Navbar, Nav, Container } from "react-bootstrap";

import { useLocation, useNavigate } from "react-router-dom";

const Navigation = ({ mailbox, setMailbox, user }) => {
	const getButtonClasses = (buttonValue) => {
		return mailbox == buttonValue ? "primary btn-sm" : "outline-primary btn-sm";
	};

	const activeClassName = "active";
	const className = "inactive";

	// hacky way to redirect to archive after archiving an email
	const { state: redirectedMailbox } = useLocation();
	const location = useLocation();
	useEffect(() => {
		if (redirectedMailbox && redirectedMailbox.length > 0) {
			setMailbox(redirectedMailbox);
		}
	});

	return (
		<>
			<Wrapper className="navigaton">
				<Navbar collapseOnSelect expand="sm" bg="primary" variant="dark">
					<Container>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="me-auto" activeKey={location.pathname}>
								<Nav.Link href="/mailbox/inbox">Inbox</Nav.Link>
								<Nav.Link href="/compose">Compose</Nav.Link>
								<Nav.Link href="/mailbox/sent">Sent</Nav.Link>
								<Nav.Link href="/mailbox/archive">Archive</Nav.Link>
							</Nav>
						</Navbar.Collapse>
						{user && <Navbar.Brand>Username</Navbar.Brand>}
						<Nav>
							{user && <Nav.Link href="/logout">Logout</Nav.Link>}
							{!user && <Nav.Link href="/login">Login</Nav.Link>}
						</Nav>
					</Container>
				</Navbar>
			</Wrapper>
		</>
	);
};

export default Navigation;

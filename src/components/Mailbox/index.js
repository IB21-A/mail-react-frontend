import React from "react";
import { Wrapper } from "./Mailbox.styles";
import MessageLine from "../MessageLine";

const Mailbox = ({ messages }) => {
	return (
		<Wrapper>
			{messages.map((message) => (
				<MessageLine
					key={message.id}
					sender={message.sender}
					subject={message.subject}
					read={message.read}
					timestamp={message.timestamp}
				/>
			))}
		</Wrapper>
	);
};

export default Mailbox;

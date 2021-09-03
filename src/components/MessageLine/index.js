import React from "react";
import { Wrapper, Content } from "./MessageLine.styles";

const MessageLine = ({ sender, subject, read, timestamp, handleClick, id }) => (
	<Wrapper read={read} onClick={() => handleClick(id)}>
		<Content>
			<span className="sender">Sender: {sender}</span>
			<span className="subject"> Subject: {subject}</span>
			<span className="timestamp">{timestamp}</span>
		</Content>
	</Wrapper>
);

export default MessageLine;

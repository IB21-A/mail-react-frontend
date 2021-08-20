import React from "react";
import { Wrapper, Content } from "./MessageLine.styles";

const MessageLine = ({ sender, subject, read, timestamp }) => (
	<Wrapper read={read}>
		<Content>
			<span className="sender">Sender: {sender}</span>
			<span className="subject"> Subject: {subject}</span>
			<span className="timestamp">{timestamp}</span>
		</Content>
	</Wrapper>
);

export default MessageLine;

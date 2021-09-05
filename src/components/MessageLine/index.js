import React from "react";
import { Wrapper, Content } from "./MessageLine.styles";

const MessageLine = ({ sender, subject, read, timestamp, handleClick, id }) => (
	<Wrapper read={read} onClick={() => handleClick(id)}>
		<Content>
			<div className="sender">{sender}</div>
			<div className="subject"> {subject}</div>
			<div className="timestamp">{timestamp}</div>
		</Content>
	</Wrapper>
);

export default MessageLine;

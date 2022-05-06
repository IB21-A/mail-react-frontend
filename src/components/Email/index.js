import React, { useEffect, useState } from "react";

import { Wrapper, Content } from "./Email.styles";
import Button from "react-bootstrap/Button";

import { useLocation, useNavigate } from "react-router-dom";

import API from "../../API";

const Email = () => {
  const navigate = useNavigate();
  const { state: email } = useLocation();
  const [read, setRead] = useState(email.read);
  const [archived, setArchived] = useState(email.archived);

  const toggleRead = () => {
    email.read = !email.read;
    setRead((prevRead) => !prevRead);
    API.updateReadOrArchiveStatus(email);
  };

  // TODO toggle archive status
  const handleArchive = () => {
    email.archived = !email.archived;
    setArchived((prevArchived) => !prevArchived);
    await API.updateReadOrArchiveStatus(email);

    if (email.archived === true) {
    return navigate("/mailbox/archive");
  }
  };

  // const handleArchive = () => {
  // 	const redirectedMailbox = "archive";
  // 	navigate("/", { state: redirectedMailbox });
  // 	console.log("redirect to archive");
  // 	// TODO add put request to archive message
  // };

  const handleReply = () => {
    navigate("/compose", { state: email });
  };

  const handleDelete = () => {
    API.deleteMessage(email);
    navigate("/mailbox/inbox", { state: email });
  };

  return (
    <Wrapper>
      {email && (
        <Content>
          <div id="sender">From: {email.sender}</div>
          <div id="recipients">To: {email.recipients.join(", ")}</div>
          <div id="timestamp">Time: {email.timestamp}</div>
          <div id="subject">Subject: {email.subject}</div>
          <hr />
          <div id="message-body">{email.body}</div>
          <div id="option-buttons">
            <div className="reply-button">
              <Button variant="outline-primary btn" onClick={handleReply}>
                Reply
              </Button>
            </div>
            <div className="action-buttons">
              <Button variant="outline-danger btn-sm" onClick={handleDelete}>
                Delete
              </Button>
              <Button variant="outline-primary btn-sm" onClick={handleArchive}>
                {archived ? "Unarchive" : "Archive"}
              </Button>
              <Button variant="outline-primary btn-sm" onClick={toggleRead}>
                {read ? "Mark Unread" : "Mark Read"}
              </Button>
            </div>
          </div>
        </Content>
      )}
      {!email && navigate("/")}
    </Wrapper>
  );
};

export default Email;

import React from "react";
import { useState, useEffect, useRef } from "react";

import { Wrapper } from "./Compose.styles";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { useNavigate, useLocation } from "react-router-dom";

import API from "../../API";

import Joi from "joi";

const blankEmail = {
  to: "",
  from: "",
  subject: "",
  body: "",
};

const Compose = () => {
  const [recipients, setRecipients] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { state: email } = useLocation();
  const textareaRef = useRef();
  const emailToRef = useRef();

  // const schema = {
  // 	recipients: Joi.string()
  // 		.required()
  // 		.email({ multiple: true })
  // 		.label("Recipients"),
  // 	subject: Joi.string().required(),
  // 	body: Joi.string().required(),
  // };

  useEffect(() => {
    const populateReplyEmail = () => {
      setRecipients(email.sender);
      setSubject(formatSubject());
      setBody(formatBody());
      setCursorPosition();
    };

    const setCursorPosition = () => {
      // set the cursor position above the reply text
      textareaRef.current.focus();

      setTimeout(() => textareaRef.current.setSelectionRange(0, 0), 100);
    };

    const formatSubject = () => {
      const re = /((re:*|Re:*|RE:*|re:*)+(\s)*)+/;
      return "Re: " + email.subject.replace(re, "");
    };

    const formatBody = () => {
      return `\n\nOn ${email.timestamp} ${email.sender} wrote:\n${email.body}`;
    };

    if (email) {
      populateReplyEmail();
    } else {
      emailToRef.current.focus();
    }
  }, [email]);

  const doSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const email = { recipients, subject, body };
    setIsPending(true);
    try {
      // axiosInstance.post(`emails/compose`, JSON.stringify(email)).then(() => {
      // 	setIsPending(false);
      const status = await API.sendMessage(email);
      if (status === 201) {
        navigate("/mailbox/inbox");
      }
    } catch {
      setError("Email doesn't exist");
    }
    setIsPending(false);
  };

  return (
    <Wrapper>
      <Form onSubmit={doSubmit}>
        {error && <div className="error">{error}</div>}
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlInput1"
          size="lg"
        >
          <Form.Label>Email to:</Form.Label>
          <Form.Control
            ref={emailToRef}
            type="email"
            placeholder="name@thomcodes.com"
            value={recipients}
            onChange={(e) => setRecipients(e.target.value)}
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlInput1"
          size="lg"
        >
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type="subject"
            name="subject"
            value={subject}
            placeholder="Subject"
            onChange={(e) => setSubject(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Write your email here</Form.Label>
          <Form.Control
            ref={textareaRef}
            as="textarea"
            rows={10}
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </Form.Group>
        <div className="send-button">
          {!isPending && (
            <Button variant="primary" type="submit" onSubmit={doSubmit}>
              Send
            </Button>
          )}
          {isPending && (
            <Button variant="primary" type="submit" disabled>
              Sending...
            </Button>
          )}
        </div>
      </Form>
    </Wrapper>
  );
};

export default Compose;

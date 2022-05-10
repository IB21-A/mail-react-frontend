import React, { useEffect, useState } from "react";
// Styles
import { Wrapper } from "./Login.styles";
// React-Bootstrap components
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// Referal from ThomCodes
import ThomCodesModal from "../ThomCodesModal";

// hooks
import { useAuth } from "../../hooks/useAuth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const auth = useAuth();

  const doSubmit = async (e) => {
    setError(false);
    console.log("dosubmit");
    e.preventDefault();
    const user = await auth.login(username, password);

    if (!user) {
      setError(true);
    }
  };

  return (
    <Wrapper>
      <ThomCodesModal />
      <h1>Login</h1>
      <Form>
        {error && (
          <div className="error">
            Username or Password incorrect. Try again.
          </div>
        )}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Form.Text className="text-muted">
            The email address you are accessing
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={doSubmit}>
          Login
        </Button>
      </Form>
    </Wrapper>
  );
};

export default Login;

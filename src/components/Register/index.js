import React, { useState } from "react";
// Styles
import { Wrapper } from "./Register.styles";
import { Form, Button } from "react-bootstrap";

// helpers
import Joi from "joi";

// hooks
import { useAuth } from "../../hooks/useAuth";

// API
import API from "../../API";

const Register = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState({});

  const schema = Joi.object({
    email: Joi.string()
      .required()
      .email({ minDomainSegments: 2, tlds: { allow: ["com"] } }),
    password: Joi.string().required().min(5),
  });

  const registerUser = async () => {
    const res = await API.register(data.email, data.password);
    console.log(res.data);
  };

  const validate = async () => {
    setError({});
    const options = { abortEarly: false };
    const validated = schema.validate(data, options);

    let errorObject = {};
    if (validated.error) {
      validated.error.details.map((item) => {
        errorObject[item.path] = item.message;
      });
      setError(errorObject);
      return;
    }
    try {
      const result = await API.register(data.email, data.password);
      errorObject.usernameError = result;
      setError(errorObject);
    } catch (e) {
      console.log(e);
    }

    return;
  };

  const handleChange = ({ currentTarget: input }) => {
    const newData = { ...data };
    newData[input.name] = input.value;
    setData(newData);
  };

  const doSubmit = async (e) => {
    e.preventDefault();
    validate();
    return;
  };

  return (
    <Wrapper>
      <h1>Register</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          {error.usernameError && (
            <div className="error">{error.usernameError}</div>
          )}
          <Form.Label>Username</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter Email i.e. yourname@thomcodes.com"
            value={data.email}
            onChange={(e) => handleChange(e)}
          />
          <Form.Text className="text-muted">
            Your desired Email address
          </Form.Text>
          {error.email && (
            <div className="alert alert-danger">{error.email}</div>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            value={data.password}
            onChange={(e) => handleChange(e)}
          />
          {error.password && (
            <div className="alert alert-danger">{error.password}</div>
          )}
        </Form.Group>
        <Button variant="primary" type="submit" onClick={(e) => doSubmit(e)}>
          Submit
        </Button>
      </Form>
    </Wrapper>
  );
};

export default Register;

import React from "react";
import PropTypes from "prop-types";
import Validator from "validator";
import { Form, Button } from "semantic-ui-react";
import isEmail from "validator/lib/isEmail";
import InlineError from "../messages/InlineError";
import { Link } from "react-router-dom";
import logo from "../../public/AgileSprite logo.png";
import b from "../../public/b.png";
import path4606 from "../../public/path-4606.png";
import path4643 from "../../public/path-4643.png";
import signInPage from "../../public/sign in page.png";
import styled from "styled-components";
import "./signup.css";

const Button1 = styled.button`
  background: #338eff;
  color: white;

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 4.5em;
  border-radius: 3px;
`;

class SignupForm extends React.Component {
  state = {
    data: {
      email: "",
      password: "",

      firstName: "",
      lastName: "",
    },
    loading: false,
    errors: {},
  };

  onChange = (e) =>
    this.setState({
      ...this.state,
      data: { ...this.state.data, [e.target.name]: e.target.value },
    });

  onSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props
        .submit(this.state.data)
        .catch((err) =>
          this.setState({ errors: err.response.data.errors, loading: false })
        );
    }
  };

  validate = (data) => {
    const errors = {};
    if (!Validator.isAlpha(data.firstName))
      errors.firstName = "Invalid First Name";
    if (!Validator.isAlpha(data.lastName))
      errors.lastName = "Invalid Last Name";
    if (!Validator.isEmail(data.email)) errors.email = "Invalid Email";
    if (!data.password) errors.password = "Cannot be blank";
    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;
    const obj = {
      color: "#3266BB",
      fontWeight: "bold",
    };

    return (
      <Form onSubmit={this.onSubmit} loading={this.loading}>
        <div>
          <div>
            <img className="sign-in-page" src={signInPage} />
          </div>
          <img src={logo} alt="Logo" height="200px" width="200px" />
          <h2 style={obj}>Sign Up</h2>
          <Form.Field error={!!this.state.errors.firstName}>
            <label htmlFor="firstName*">firstName*</label>
            <input
              type="firstName"
              id="firstName"
              name="firstName"
              placeholder="Enter your first name"
              value={this.state.data.firstName}
              onChange={this.onChange}
            />
            {this.state.errors.firstName && (
              <InlineError text={this.state.errors.firstName} />
            )}
          </Form.Field>
          <Form.Field error={!!this.state.errors.lastName}>
            <label htmlFor="lastName*">lastName*</label>
            <input
              type="lastName"
              id="lastName"
              name="lastName"
              placeholder="Enter your last name"
              value={this.state.data.lastName}
              onChange={this.onChange}
            />
            {this.state.errors.lastName && (
              <InlineError text={this.state.errors.lastName} />
            )}
          </Form.Field>
          <Form.Field error={!!this.state.errors.email}>
            <label htmlFor="Email Address*">Email Address*</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@example.com"
              value={this.state.data.email}
              onChange={this.onChange}
            />
            {this.state.errors.email && (
              <InlineError text={this.state.errors.email} />
            )}
          </Form.Field>
          <Form.Field error={!!this.state.errors.password}>
            <label htmlFor="Password*">Password*</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Make it secure"
              value={this.state.data.password}
              onChange={this.onChange}
            />
            {this.state.errors.password && (
              <InlineError text={this.state.errors.password} />
            )}
          </Form.Field>
          <Button1 primary>Sign Up</Button1>
          <div>
            <Link to="/login">Already have account? Login there</Link>
          </div>
        </div>
      </Form>
    );
  }
}

SignupForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default SignupForm;

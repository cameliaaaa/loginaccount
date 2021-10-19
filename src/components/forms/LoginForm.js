import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Message } from "semantic-ui-react";
import Validator from "validator";
import InlineError from "../messages/InlineError";
import "./Login.css";
import { Link } from "react-router-dom";
import logo from "../../public/AgileSprite logo.png";
import lock from "../../public/lock.png";
import path54 from "../../public/path54.png";
import styled from "styled-components";
import signInPage from "../../public/sign in page.png";
const Button1 = styled.button`
  background: #338eff;
  color: white;

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 4.5em;
  border-radius: 3px;
`;
class LoginForm extends React.Component {
  state = {
    data: {
      email: "",
      password: "",
    },
    loading: false,
    errors: {},
  };

  onChange = (e) =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value },
    });

  onSubmit = () => {
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
    if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
    if (!data.password) errors.password = "Can't be blank";
    return errors;
  };

  render() {
    const obj = {
      color: "#3266BB",
      fontWeight: "bold",
    };
    return (
      <Form onSubmit={this.onSubmit}>
        {this.state.errors.global && (
          <Message negative>
            <Message.Header>something went wrong</Message.Header>
            <p>{this.state.errors.global}</p>
          </Message>
        )}
        <h2 style={obj}>Login</h2>
        <img className="agile-sprite-2" src={logo} />
        <div>
          <img className="sign-in-page" src={signInPage} />
        </div>
        <Form.Field error={!!this.state.errors.email}>
          <label htmlFor="Email *">Email *</label>
          <div
            className="lock"
            style={{ backgroundImage: `url(${lock})` }}
          ></div>
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
          <label htmlFor="Password *">Password *</label>
          <div className="overlap-group-8">
            <div className="rectangle-52 border-1-5px-dove-gray"></div>
            <img className="path-54" src={path54} />
          </div>
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
        <Button1 primary>Login in</Button1>
        <Link to="/forgot_password">Forget password ?</Link> or{" "}
        <Link to="/signup">Sign up now!</Link>
      </Form>
    );
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default LoginForm;

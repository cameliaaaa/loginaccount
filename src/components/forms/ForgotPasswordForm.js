import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Message } from "semantic-ui-react";
import isEmail from "validator/lib/isEmail";
import InlineError from "../messages/InlineError";
import logo from "../../public/AgileSprite logo.png";
import signInPage from "../../public/sign in page.png";
import "./forgetPassword.css";

class ForgotPasswordForm extends React.Component {
  state = {
    data: {
      email: "",
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
    if (!isEmail(data.email)) errors.email = "Invalid email";
    return errors;
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit} loading={this.loading}>
        <div>
          <img className="sign-in-page" src={signInPage} />
        </div>
        <img src={logo} alt="Logo" height="250px" width="250px" />;
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
        <Button primary>Get new password</Button>
      </Form>
    );
  }
}

ForgotPasswordForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default ForgotPasswordForm;

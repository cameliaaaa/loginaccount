import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SignupForm from "../forms/SignupForm";
import { signup } from "../../actions/users";

class SignupPage extends React.Component {
  submit = (data) =>
    this.props.signup(data).then(() => this.props.history.push("/homepage"));

  render() {
    const obj = {
      color: "black",
      backgroundColor: "lightblue",
    };
    return (
      <div>
        <h1 style={obj}>AGILE SPRITE PERSONAL CRM</h1>
        <SignupForm submit={this.submit} />
      </div>
    );
  }
}

SignupPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  signup: PropTypes.func.isRequired,
};

export default connect(null, { signup })(SignupPage);

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions/auth";
import home from "../../public/home.png";
import "./home.css";
import blue from "../../public/blue.png";
import pink from "../../public/pink.png";
import { HomePageContainer } from "./HomePageContainer";
const obj = {
  color: "black",
};
const HomePage = ({ isAuthenticated, logout }) => (
  <div>
    <h1 style={obj}>AGILE SPRITE PERSONAL CRM</h1>
    <Link to="/login">Login</Link> or <Link to="/signup">Signup</Link>
    {isAuthenticated ? (
      <button onClick={() => logout()}>Logout</button>
    ) : (
      <div>
        <HomePageContainer>
          <img className="blue" src={blue} />
          <img className="pink" src={pink} />
          <div>
            <div>
              <img className="home_symbol" src={home} />
            </div>
            <span className="text9">{"Why do we choose Agile Sprite?"}</span>
            <span className="text">{"ALL IN ONE SCHEDULING"}</span>
            <span className="text2">
              {"Schedule events with our specialized calendar"}
            </span>
            <span className="text3">{"CLIENT MANAGEMENT"}</span>
            <span className="text4">{"Identify and anticipate needs"}</span>
            <span className="text5">{"manage all clients efficiently"}</span>
          </div>
        </HomePageContainer>
      </div>
    )}
  </div>
);

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token,
  };
}

export default connect(mapStateToProps, { logout: actions.logout })(HomePage);

import React, { PureComponent, Component } from "react";
import store from "./store";
import { Form, Button, Message } from "semantic-ui-react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import {
  GlobalStyle,
  Header,
  ContactWrapper,
  ContactAside,
  ContactListWrapper,
  ContactControl,
  ContactListItem,
  ContactDetails,
  DetailsNav,
  DetailsContent,
  StoryContent,
} from "./style";

const articleText = `Lorem ipsum dolor sit amet,consectetur adipiscing elit. Nuncmaximus,nulla ut commodo sagittis,sapien dui mattis dui, non pulvinarlorem felis nec eratLorem ipsumdolor sit amet, consectetur adipiscing elit. Nunc maximus, nullaut commodo sagittis, sapien duimattis dui, non pulvinar lorem felisnec eratLorem ipsum dolor sit amet,consectetur adipiscing elit. Nuncmaximus, nulla ut commodo sagittis, sapien dui mattis dui,non pulvinar lorem felis neceratLorem ipsum dolor sit amet,consectetur adipiscing elit. Nuncmaximus, nulla ut commodo sagittis,sapien dui mattis dui, non pulvinarlorem felis nec eratLorem ipsum
`;

const { getState, subscribe, dispatch } = store;

class Contact extends React.Component {
  constructor() {
    super();
    this.state = getState();
    subscribe(this.getUpdate);
  }

  render() {
    const { pageChecked, detailsShow, initDetails } = this.state;

    return (
      <div>
        <GlobalStyle />
        <Header>
          <div>A G I L E S P R I T E</div>
          <div>
            <img src="/images/logo.jpg" alt="logo" />
          </div>
        </Header>
        <ContactWrapper>
          <ContactAside onClick={this.handlePageClick}>
            <Router>
              <Link
                to="/"
                className={pageChecked === "account" ? "checked" : ""}
                direct={"account"}
              >
                <img src="/images/iconme.png" alt="icon me" />
              </Link>
              <Link
                to="/"
                className={pageChecked === "contact" ? "checked" : ""}
                direct={"contact"}
              >
                <img src="/images/iconcontact.png" alt="icon contact" />
              </Link>
              <Link
                to="/"
                className={pageChecked === "group" ? "checked" : ""}
                direct={"group"}
              >
                <img src="/images/icongroup.png" alt="icon group" />
              </Link>
              <Link
                to="/"
                className={pageChecked === "calendar" ? "checked" : ""}
                direct={"calendar"}
              >
                <img src="/images/iconcalendar.png" alt="icon calendar" />
              </Link>
            </Router>
          </ContactAside>
          <ContactListWrapper>
            <ContactControl>
              <div>
                <span>Contact</span>
                <span>
                  <button>+</button>
                  <button>-</button>
                </span>
              </div>
              <div>
                <input type="text" />
              </div>
            </ContactControl>
            {this.renderContactList()}
          </ContactListWrapper>
          <ContactDetails>
            {initDetails ? (
              <img
                src="/images/Contact front page.png"
                alt="Contactfrontpage"
                className="contactimg"
              />
            ) : (
              <div>
                <DetailsNav>
                  <div
                    className={detailsShow === "detail" ? "checked" : ""}
                    onClick={this.handleDetailClick}
                  >
                    Detail
                  </div>
                  <div
                    className={detailsShow === "story" ? "checked" : ""}
                    onClick={this.handleDetailClick}
                  >
                    Story
                  </div>
                </DetailsNav>
                {this.renderDetailsShow()}
              </div>
            )}
          </ContactDetails>
        </ContactWrapper>
      </div>
    );
  }

  getUpdate = () => {
    this.setState(getState(), () => {
      console.log(this.state);
      console.log("更新了！！！");
    });
  };
  handlePageClick = (event) => {
    let target = event.target;
    if (target.tagName === "IMG") target = target.parentNode;
    dispatch({
      type: "PAGE_CHANGE",
      checked: target.getAttribute("direct"),
    });
    console.log(this.state);
  };
  handlePersonClick = (event) => {
    let target = event.target;
    if (target.tagName === "IMG") target = target.parentNode;
    dispatch({
      type: "PERSON_CHANGE",
      checked: target.getAttribute("name"),
    });
  };
  handleDetailClick = (event) => {
    const show = event.target.innerText;
    dispatch({
      type: "DETAILS_CHANGE",
      checked: show.toLocaleLowerCase(),
    });
  };
  renderContactList = () => {
    const listArr = [];
    const contactList = this.state.contactList;
    for (let item in contactList) {
      if (contactList[item].length <= 0) continue;
      const itemArr = contactList[item].map((person) => (
        <div
          onClick={this.handlePersonClick}
          key={person.name}
          name={person.name}
          className={this.state.personChecked === person.name ? "checked" : ""}
        >
          <img src={person.profile} alt={`${person.name} profile`} />
          {person.name}
        </div>
      ));
      listArr.push(
        <ContactListItem key={item}>
          <div>{item.toLocaleUpperCase()}</div>
          <div>{itemArr}</div>
        </ContactListItem>
      );
    }
    return listArr;
  };
  renderDetailsShow = () => {
    const detailsShow = this.state.detailsShow;
    switch (detailsShow) {
      case "detail":
        return <DetailsContent>{this.renderPersonShow()}</DetailsContent>;
      case "story":
        return (
          <StoryContent>
            <div className="title">
              <div>3</div>
              <div>Stories</div>
            </div>
            <div className="stories">
              <div>
                <h1>Melbourne,4/9/2021</h1>
                <img
                  src="/images/contact story page.jpeg"
                  alt="contact story page"
                />
                <div className="article">{articleText}</div>
              </div>
              <div>
                <h1>Melbourne,4/9/2021</h1>
                <div className="article">{articleText}</div>
              </div>
            </div>
          </StoryContent>
        );
      default:
        return null;
    }
  };
  renderPersonShow = () => {
    const { contactList, personChecked } = this.state;
    let personShow = "";
    for (let item in contactList) {
      if (contactList[item].length <= 0) continue;
      personShow = contactList[item].filter(
        (person) => person.name === personChecked
      )[0];
      if (personShow) break;
    }
    if (personShow) {
      const {
        name,
        company,
        email,
        phone,
        mobile,
        address,
        birthday,
        relationship,
        profile,
      } = personShow;
      return (
        <div>
          <div className="message">
            <div className="profile">
              <img src={profile} alt={`${name} profile`} />
            </div>
            <div className="others">
              <h1>
                Name <span>{name}</span>
              </h1>
              <h1>
                Componay <span>{company}</span>
              </h1>
              <h1>
                Email <span>{email}</span>
              </h1>
              <h1>
                Phone <span>{phone}</span>
              </h1>
              <h1>
                Mobile <span>{mobile}</span>
              </h1>
              <h1>
                Address <span>{address}</span>
              </h1>
            </div>
          </div>
          <div className="form">
            <h1>
              <span>
                Birthday <input type="date" name="" id="" />
              </span>
              <span>
                Relationship
                <select defaultValue="relationship" name="relationship">
                  <option value="relationship">relationship</option>
                  <option value="parent">parent</option>
                </select>
              </span>
            </h1>
            <div className="notes">
              <h1>Notes</h1>
              <textarea
                name=""
                id=""
                cols="125"
                rows="4"
                placeholder="Add a note ..."
              ></textarea>
              <h1>Invited Events</h1>
              <input type="text" />
            </div>
            <div className="buttons">
              <button>Edit</button>
              <button>Save</button>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };
}

export default Contact;

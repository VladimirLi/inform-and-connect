import React, { Component } from "react";
import styles from "./index.css";
import Container from "react-bootstrap/Container";
import PreferenceMenu from "./preferenceMenu";
import HelpWith from "./helpWith";
import NewsFeed from "../NewsFeed";

class Landing extends Component {
  state = {};
  render() {
    return (
      <Container>
        <PreferenceMenu />
        <HelpWith />
        <hr></hr>
        <NewsFeed />
      </Container>
    );
  }
}

export default Landing;

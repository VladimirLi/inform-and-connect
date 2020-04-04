import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "../Navigation";
import LandingPage from "../Landing";
import HomePage from "../Home";
import * as ROUTES from "../../constants/routes";

import firebase from "firebase";
import Container from "react-bootstrap/Container";

async function getLanguages(params) {
  firebase
    .database()
    .ref("languages")
    .once("value")
    .then((snapshot) => console.log(snapshot));
}

class App extends Component {
  state = {};
  constructor() {
    super();
    getLanguages();
  }

  render() {
    return (
      <Router>
        <Navigation />
        <Container className="mt-3">
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route exact path={ROUTES.HOME} component={HomePage} />
        </Container>
      </Router>
    );
  }
}

export default App;

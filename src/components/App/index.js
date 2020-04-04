import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navigation from "../Navigation";
import LandingPage from "../Landing";
import HomePage from "../Home";

import firebase from "firebase";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

async function getLanguages(params) {
  firebase
    .database()
    .ref("languages")
    .once("value")
    .then((snapshot) => console.log(snapshot));
}

class App extends Component {
  constructor() {
    super();
    getLanguages();
  }
  state = {
    languages: [
      { id: 0, name: "Russian" },
      { id: 1, name: "English" },
    ],
    kommuns: [
      { id: 0, name: "Stockholm" },
      { id: 1, name: "Uppsalla" },
    ],
    topics: [
      { id: 0, name: "COVID-19" },
      { id: 1, name: "Finding Job" },
      { id: 2, name: "Getting Money" },
      { id: 3, name: "Other things" },
    ],
    currentLanguage: { id: 0, name: "Russian" },
    // currentLanguage: null,
    currentKommun: { id: 0, name: "Stockholm" },
    currentTopic: { id: 0, name: "COVID-19" },
    // currentPage: "home",
    currentPage: "landing",
    allertVisible: false,
  };
  setLanguage = (language) => {
    this.setState({ currentLanguage: language });
    console.log(language);
  };
  setKommun = (kommun) => {
    this.setState({ currentKommun: kommun });
    console.log(kommun);
  };
  setTopic = (topic) => {
    this.setState({ currentTopic: topic });
    console.log(this.state.currentLanguage && this.state.currentKommun);
    // console.log(topic);
    if (this.state.currentLanguage && this.state.currentKommun) {
      this.setState({ currentPage: "home" });
    } else {
      this.onShowAlert();
    }
  };
  onShowAlert = () => {
    this.setState({ allertVisible: true }, () => {
      window.setTimeout(() => {
        this.setState({ allertVisible: false });
      }, 2000);
    });
  };
  pageToRender() {
    if (this.state.currentPage === "home") {
      return (
        <HomePage
          {...this.state}
          setKommun={this.setKommun}
          setLanguage={this.setLanguage}
          setTopic={this.setTopic}
        />
      );
    }
    return (
      <LandingPage
        {...this.state}
        setKommun={this.setKommun}
        setLanguage={this.setLanguage}
        setTopic={this.setTopic}
      />
    );
  }

  render() {
    return (
      <Router>
        <Navigation />
        <Alert variant="info" show={this.state.allertVisible}>
          {" "}
          Make sure to choose Language and Kommun
        </Alert>
        <Container className="mt-3">{this.pageToRender()}</Container>
      </Router>
    );
  }
}

export default App;

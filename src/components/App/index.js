import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navigation from "../Navigation";
import LandingPage from "../Landing";
import HomePage from "../Home";
import Article from "../Article";

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
    articles: [
      {
        id: 0,
        title: "Media Heading",
        posted: "4 jul. 2020",
        sourceName: "Upsalla kommun",
        url: "https://www.uppsala.se/",
        imgUrl: "https://picsum.photos/200",
        fullVersion:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 1,
        title: "Media Heading",
        posted: "4 jul. 2020",
        sourceName: "Upsalla kommun",
        url: "https://www.uppsala.se/",
        imgUrl: "https://picsum.photos/200",
        fullVersion:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 2,
        title: "Media Heading",
        posted: "4 jul. 2020",
        sourceName: "Upsalla kommun",
        url: "https://www.uppsala.se/",
        imgUrl: "https://picsum.photos/200",
        fullVersion:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 3,
        title: "Media Heading",
        posted: "4 jul. 2020",
        sourceName: "Upsalla kommun",
        url: "https://www.uppsala.se/",
        imgUrl: "https://picsum.photos/200",
        fullVersion:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
    currentLanguage: { id: 0, name: "Russian" },
    // currentLanguage: null,
    currentKommun: { id: 0, name: "Stockholm" },
    currentTopic: { id: 0, name: "COVID-19" },
    currentArticle: null,
    // currentArticle: null,
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
  setArticle = (article) => {
    this.setState({ currentArticle: article });
  };
  onShowAlert = () => {
    this.setState({ allertVisible: true }, () => {
      window.setTimeout(() => {
        this.setState({ allertVisible: false });
      }, 2000);
    });
  };
  pageToRender() {
    if (this.state.currentArticle) {
      return <Article {...this.state} setArticle={this.setArticle} />;
    }

    if (this.state.currentPage === "home") {
      return (
        <HomePage
          {...this.state}
          setKommun={this.setKommun}
          setLanguage={this.setLanguage}
          setTopic={this.setTopic}
          setArticle={this.setArticle}
        />
      );
    } else if (this.state.currentPage === "landing") {
      return (
        <LandingPage
          {...this.state}
          setKommun={this.setKommun}
          setLanguage={this.setLanguage}
          setTopic={this.setTopic}
          setArticle={this.setArticle}
        />
      );
    }
    return <h1>SOMEHING IS WRONG IN ROUTING</h1>;
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

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
      { id: 0, name: "Russian", ISOCode: "ru" },
      { id: 1, name: "English", ISOCode: "en" },
    ],
    kommuns: [
      { id: 0, name: "stockholm" },
      { id: 1, name: "uppsala" },
    ],
    topics: [
      { id: 0, name: "COVID-19" },
      { id: 1, name: "Finding Job" },
      { id: 2, name: "Getting Money" },
      { id: 3, name: "Other things" },
    ],
    articles: [],
    currentLanguage: { id: 0, name: "Russian", ISOCode: "ru" },
    // currentLanguage: null,
    currentKommun: { id: 0, name: "Stockholm" },
    currentTopic: { id: 0, name: "COVID-19" },
    currentArticle: null,
    // currentArticle: null,
    // currentPage: "home",
    currentPage: "landing",
    allertVisible: false,
  };
  getNewArticles = (language, kommun) => {
    // Simple GET request using fetch
    let url =
      "https://us-central1-inform-and-connect.cloudfunctions.net/getArticles?";
    if (language !== null) {
      url += `language=${language.ISOCode}&`;
    }
    if (this.currentKommun !== null) {
      url += `kommun=${kommun.name.toLocaleLowerCase()}`;
    }
    const articles = fetch(url).then((response) => response.json());
    // .then((data) => {
    //   this.setState({ articles: data });
    //   console.log("Done");
    // });
    console.log(articles);
    return articles;
  };
  // getLanguages = () => {
  //     let url =
  //       "https://us-central1-inform-and-connect.cloudfunctions.net/getSupportedLanguages";
  //     const languages =

  // }

  async componentDidMount() {
    const articles = await this.getNewArticles(
      this.state.currentLanguage,
      this.state.currentKommun
    );
    this.setState({ articles: articles });
  }

  setLanguage = async (language) => {
    const articles = await this.getNewArticles(
      language,
      this.state.currentKommun
    );
    this.setState({ currentLanguage: language, articles: articles });
  };
  setKommun = async (kommun) => {
    const articles = await this.getNewArticles(
      this.state.currentLanguage,
      kommun
    );
    this.setState({ currentKommun: kommun, articles: articles });
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

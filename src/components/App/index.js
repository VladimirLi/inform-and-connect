import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navigation from "../Navigation";
import LandingPage from "../Landing";
import HomePage from "../Home";
import Article from "../Article";

import firebase from "firebase";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

class App extends Component {
  state = {
    languages: [],
    articles: [],
    kommuns: [
      { id: 0, name: "stockholm" },
      { id: 1, name: "uppsala" },
    ],
    topics: [
      {
        id: 0,
        name: {
          en: "COVID-19",
          sv: "COVID-19",
          ru: "COVID-19",
        },
      },
      {
        id: 1,
        name: {
          en: "Getting a job",
          ru: "Найти работу",
          sv: "Hitta jobb",
        },
      },
      {
        id: 2,
        name: {
          en: "Getting money",
          ru: "Финансовая поддержка",
          sv: "Få pengar",
        },
      },
      {
        id: 3,
        name: {
          en: "Оther things",
          ru: "Другое",
          sv: "Övrig information",
        },
      },
    ],
    UIElements: {
      myLanguage: {
        en: "My language",
        sv: "Mitt språk",
        ru: "Язык",
      },
      myMunicipality: {
        en: "My municipality",
        ru: "Муниципалитет",
        sv: "Min kommun",
      },
      topic: {
        en: "Topic",
        ru: "Тема",
        sv: "Ämne",
      },
      newsAndUpdates: {
        en: "News and Updates",
        ru: "Последние новости",
        sv: "Nyheter och uppdateringar",
      },
      login: {
        en: "Login",
        ru: "Войти",
        sv: "Logga in",
      },
      register: {
        en: "Register",
        ru: "Зарегистрироваться",
        sv: "Registrera",
      },
      usefulContact: {
        en: "Useful Contacts",
        ru: "Важные контакты",
        sv: "Användbara kontakter",
      },
      fullVersion: {
        en: "Full Version",
        ru: "Полная версия",
        sv: "Hela Version",
      },
      summary: {
        en: "Summary",
        ru: "Кратко",
        sv: "Summa",
      },
      backToResults: {
        en: "Back to results",
        ru: "Oбратно",
        sv: "Tillbaka till resultatet",
      },
      iNeedHelp: {
        en: "I need help with",
        ru: "Мне нужна помощь",
        sv: "Jag behöver hjälp med",
      },
    },
    currentLanguage: { name: "Swedish", code: "sv" },
    currentKommun: { id: 0, name: "stockholm" },
    currentTopic: { id: 0, name: "COVID-19" },
    currentArticle: null,
    currentPage: "landing",
    allertVisible: false,
  };
  getNewArticles = (language, kommun) => {
    // Simple GET request using fetch
    let url =
      "https://us-central1-inform-and-connect.cloudfunctions.net/getArticles?";
    if (language !== null) {
      url += `language=${language.code}&`;
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
  getLanguages = () => {
    let url =
      "https://us-central1-inform-and-connect.cloudfunctions.net/getSupportedLanguages";
    const languages = fetch(url).then((response) => response.json());
    return languages;
  };

  async componentDidMount() {
    const articles = await this.getNewArticles(
      this.state.currentLanguage,
      this.state.currentKommun
    );
    const languages = await this.getLanguages();
    this.setState({ articles: articles, languages: languages });
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
  resetState = () => {
    this.setState({
      currentLanguage: { name: "Swedish", code: "sv" },
      currentKommun: { id: 0, name: "stockholm" },
      currentTopic: { id: 0, name: "COVID-19" },
      currentArticle: null,
      currentPage: "landing",
      allertVisible: false,
    });
  };

  render() {
    return (
      <Router>
        <Navigation {...this.state} resetState={this.resetState} />
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

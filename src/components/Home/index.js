import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UsefulContacts from "./usefulContacts";
import NewsFeed from "../NewsFeed";
import PreferenceMenu from "../Landing/preferenceMenu";
import { UIElementIfExists } from "../utils";

function getNames(item, language) {
  if (typeof item.name === "string") {
    return item.name;
  } else {
    const lc = language.code;
    const name = lc in item.name ? item.name[lc] : item.name["en"];
    return name;
  }
}

class Home extends Component {
  state = {
    contacts: [
      { id: 0, number: "1235423", text: "Call this number ..." },
      { id: 1, number: "112", text: "Emergency..." },
    ],
  };
  render() {
    const { props } = this;
    return (
      <Container>
        <Container className="mb-5">
          <PreferenceMenu {...props} renderTopics={true} />
          {/* Here are results for: {props.currentLanguage.name},{" "}
          {props.currentKommun.name}, {props.currentTopic.name} */}
        </Container>
        <Row>
          <Col sm={8}>
            <NewsFeed
              title={UIElementIfExists(
                props.UIElements.newsAndUpdates,
                props.currentLanguage.code
              )}
              {...props}
            />
          </Col>
          <Col sm={4}>
            <UsefulContacts {...props} contacts={this.state.contacts} />
          </Col>
        </Row>
        <p>
          {props.currentLanguage.name}, {props.currentKommun.name},{" "}
          {getNames(props.currentTopic, props.currentLanguage)}
        </p>
      </Container>
    );
  }
}

export default Home;

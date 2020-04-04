import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UsefulContacts from "./usefulContacts";
import NewsFeed from "../NewsFeed";

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
          Here are results for: {props.currentLanguage.name},{" "}
          {props.currentKommun.name}, {props.currentTopic.name}
        </Container>
        <Row>
          <Col sm={8}>
            <NewsFeed title="News and Updates" />
          </Col>
          <Col sm={4}>
            <UsefulContacts contacts={this.state.contacts} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;

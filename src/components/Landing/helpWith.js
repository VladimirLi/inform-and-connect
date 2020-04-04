import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class HelpWith extends Component {
  state = {};
  render() {
    return (
      <div>
        <h4>
          <FontAwesomeIcon icon={faQuestionCircle} className="mr-2" />I need
          help with:
        </h4>
        <Container fluid>
          <Row
            lg={this.props.topics.length > 5 ? 5 : this.props.topics.length}
            md={3}
            xs={1}
          >
            {this.props.topics.map((topic) => (
              <Col key={topic.id} className="mb-3">
                <Button
                  onClick={() => {
                    this.props.setTopic(topic);
                  }}
                  variant="primary"
                  className="btn-block"
                >
                  {topic.name}
                </Button>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default HelpWith;

import React, { Component } from "react";
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
          <FontAwesomeIcon
            icon={faQuestionCircle}
            className="mr-2"
            color="green"
          />
          I need help with:
        </h4>
        <Row md={4} className="mb-3">
          <Col>
            <Button variant="primary" className="btn-block">
              COVID-19
            </Button>
          </Col>
          <Col>
            <Button variant="primary" className="btn-block">
              Getting money
            </Button>
          </Col>
          <Col>
            <Button variant="primary" className="btn-block">
              Finding Job
            </Button>
          </Col>
        </Row>
        <Row md={4} className="mb">
          {/* <Col>
              <Button variant="primary" className="btn-block">
                Something else
              </Button>
            </Col> */}
          <Col>
            <Button variant="primary" className="btn-block">
              Other things
            </Button>
          </Col>
          <Col>
            <Button variant="primary" className="btn-block">
              More Things
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default HelpWith;

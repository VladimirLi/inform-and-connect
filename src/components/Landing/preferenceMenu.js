import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchableDropdown from "./searchableDropdown";
import { faMapMarkedAlt, faLanguage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class PreferenceMenu extends Component {
  state = {
    languages: [
      { id: 0, name: "Russian" },
      { id: 1, name: "English" },
    ],
    kommuns: [
      { id: 0, name: "Stockholm" },
      { id: 1, name: "Uppsalla" },
    ],
  };
  // TODO: Set language here?
  render() {
    return (
      <div className="mb-5 mt-5">
        <Row>
          <Col>
            <FontAwesomeIcon icon={faLanguage} className="mr-2" />
            My language:
            <SearchableDropdown title="Language" items={this.state.languages} />
          </Col>
          <Col>
            <FontAwesomeIcon icon={faMapMarkedAlt} className="mr-2" />
            My kommun:
            <SearchableDropdown title="Kommun" items={this.state.kommuns} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default PreferenceMenu;

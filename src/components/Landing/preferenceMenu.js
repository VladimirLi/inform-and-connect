import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchableDropdown from "./searchableDropdown";
import {
  faMapMarkedAlt,
  faLanguage,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function renderLanguage(props) {
  return (
    <Col>
      <FontAwesomeIcon icon={faLanguage} className="mr-2" />
      My language:
      <SearchableDropdown
        title="Language"
        items={props.languages}
        currentItem={props.currentLanguage}
        setItem={props.setLanguage}
      />
    </Col>
  );
}

function renderKommun(props) {
  return (
    <Col>
      <FontAwesomeIcon icon={faMapMarkedAlt} className="mr-2" />
      My kommun:
      <SearchableDropdown
        title="Kommun"
        items={props.kommuns}
        currentItem={props.currentKommun}
        setItem={props.setKommun}
      />
    </Col>
  );
}

function renderTopics(props) {
  return (
    <Col>
      <FontAwesomeIcon icon={faQuestionCircle} className="mr-2" />
      Topic:
      <SearchableDropdown
        title="Topic"
        items={props.topics}
        currentItem={props.currentTopic}
        setItem={props.setTopic}
      />
    </Col>
  );
}

function PreferenceMenu(props) {
  if (props.renderTopics) {
    return (
      <div className="mb-5 mt-5">
        <Row>
          {renderLanguage(props)}
          {renderKommun(props)}
          {renderTopics(props)}
        </Row>
      </div>
    );
  }
  return (
    <div className="mb-5 mt-5">
      <Row>
        {renderLanguage(props)}
        {renderKommun(props)}
      </Row>
    </div>
  );
}

export default PreferenceMenu;

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
import { UIElementIfExists } from "../utils";

function renderLanguage(props) {
  return (
    <Col>
      <FontAwesomeIcon icon={faLanguage} className="mr-2" />
      {UIElementIfExists(
        props.UIElements.myLanguage,
        props.currentLanguage.code
      )}
      <SearchableDropdown
        title="Language"
        items={props.languages}
        currentItem={props.currentLanguage}
        currentLanguage={props.currentLanguage}
        setItem={props.setLanguage}
      />
    </Col>
  );
}

function renderKommun(props) {
  return (
    <Col>
      <FontAwesomeIcon icon={faMapMarkedAlt} className="mr-2" />
      {UIElementIfExists(
        props.UIElements.myMunicipality,
        props.currentLanguage.code
      )}
      <SearchableDropdown
        title="Kommun"
        items={props.kommuns}
        currentItem={props.currentKommun}
        currentLanguage={props.currentLanguage}
        setItem={props.setKommun}
      />
    </Col>
  );
}

function renderTopics(props) {
  console.log(props.UIElements.topic);
  return (
    <Col>
      <FontAwesomeIcon icon={faQuestionCircle} className="mr-2" />
      {UIElementIfExists(props.UIElements.topic, props.currentLanguage.code)}
      <SearchableDropdown
        title="Topic"
        items={props.topics}
        currentItem={props.currentTopic}
        currentLanguage={props.currentLanguage}
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

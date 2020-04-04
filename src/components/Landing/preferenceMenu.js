import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchableDropdown from "./searchableDropdown";
import { faMapMarkedAlt, faLanguage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PreferenceMenu(props) {
  return (
    <div className="mb-5 mt-5">
      <Row>
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
      </Row>
    </div>
  );
}

export default PreferenceMenu;

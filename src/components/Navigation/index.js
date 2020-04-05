import React from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import { UIElementIfExists } from "../utils";
import { faLink, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FontAwesome from "react-fontawesome";
import NavDropdown from "react-bootstrap/NavDropdown";
import FormControl from "react-bootstrap/FormControl";

const Navigation = (props) => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand
      onClick={() => {
        props.resetState();
      }}
    >
      <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
      Inform and {/* <FontAwesomeIcon icon={faLink} className="mr-2 ml-2" /> */}
      Connect
    </Navbar.Brand>
    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto"></Nav>
      <Nav.Link href="#">
        {UIElementIfExists(props.UIElements.login, props.currentLanguage.code)}
      </Nav.Link>
      <Nav.Link>
        {UIElementIfExists(
          props.UIElements.register,
          props.currentLanguage.code
        )}
      </Nav.Link>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;

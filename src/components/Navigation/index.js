import React from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import { UIElementIfExists } from "../utils";

const Navigation = (props) => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand
      onClick={() => {
        props.resetState();
      }}
    >
      Inform and Connect
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto"></Nav>
      <Form inline>
        {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success" className="mr-5">
          Search
        </Button> */}
        <Button className="m-sm-2">
          {UIElementIfExists(
            props.UIElements.login,
            props.currentLanguage.code
          )}
        </Button>
        <Button className="m-sm-2">
          {UIElementIfExists(
            props.UIElements.register,
            props.currentLanguage.code
          )}
        </Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;

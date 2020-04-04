import React from "react";
import Container from "react-bootstrap/Container";
import PreferenceMenu from "./preferenceMenu";
import HelpWith from "./helpWith";
import NewsFeed from "../NewsFeed";

function Landing(props) {
  return (
    <Container>
      <PreferenceMenu {...props} />
      <HelpWith {...props} />
      <hr />
      <NewsFeed title="Breaking News:" />
    </Container>
  );
}

export default Landing;

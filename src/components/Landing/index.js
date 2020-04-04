import React from "react";
import Container from "react-bootstrap/Container";
import PreferenceMenu from "./preferenceMenu";
import HelpWith from "./helpWith";
import NewsFeed from "../NewsFeed";

function Landing(props) {
  return (
    <Container>
      <PreferenceMenu {...props} renderTopic={false} />
      <HelpWith {...props} />
      <hr />
      <NewsFeed title="Breaking News:" {...props} />
    </Container>
  );
}

export default Landing;

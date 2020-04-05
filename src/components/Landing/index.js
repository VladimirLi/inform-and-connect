import React from "react";
import Container from "react-bootstrap/Container";
import PreferenceMenu from "./preferenceMenu";
import HelpWith from "./helpWith";
import NewsFeed from "../NewsFeed";
import { UIElementIfExists } from "../utils";

function Landing(props) {
  return (
    <Container>
      <PreferenceMenu {...props} renderTopic={false} />
      <HelpWith {...props} />
      <hr />
      <NewsFeed
        title={UIElementIfExists(
          props.UIElements.newsAndUpdates,
          props.currentLanguage.code
        )}
        {...props}
      />
    </Container>
  );
}

export default Landing;

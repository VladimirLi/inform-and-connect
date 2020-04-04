import React, { Component } from "react";
import Article from "./article";
import Container from "react-bootstrap/Container";

class NewsFeed extends Component {
  state = {};
  render() {
    return (
      <div>
        <Container className="mb-5 mt-5">
          <h2>Breaking News:</h2>
        </Container>

        <Article />
      </div>
    );
  }
}

export default NewsFeed;

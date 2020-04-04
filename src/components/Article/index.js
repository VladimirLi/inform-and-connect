import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Article extends Component {
  state = {};
  render() {
    const { currentArticle } = this.props;
    return (
      <div>
        <a href="#" onClick={() => this.props.setArticle(null)}>
          &lt; Back to results
        </a>
        <h1>{currentArticle.title}</h1>
        <a href={currentArticle.url} className="mr-3">
          {" "}
          {currentArticle.sourceName}
        </a>{" "}
        {currentArticle.posted}
        <Container>
          <Row>
            <Col>
              <h3>Full Version:</h3>
              <p>{currentArticle.fullVersion}</p>
            </Col>
            <Col>
              <div className="border border-primary p-4">
                <h3>Summary:</h3>
                <p className="m-2">{currentArticle.summary}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Article;

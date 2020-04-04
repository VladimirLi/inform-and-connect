import React, { Component } from "react";
import Article from "./article";
import Container from "react-bootstrap/Container";

class NewsFeed extends Component {
  state = {};
  render() {
    return (
      <div>
        <Container className="mb-5">
          <h2>{this.props.title}</h2>
        </Container>
        {this.props.articles.map((article) => {
          return (
            <div
              key={article.id}
              onClick={() => this.props.setArticle(article)}
              className="mb-3"
            >
              <Article article={article} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default NewsFeed;

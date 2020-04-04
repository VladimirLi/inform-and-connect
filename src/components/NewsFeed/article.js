import React, { Component } from "react";
import Media from "react-bootstrap/Media";
import { style } from "./index.css";

class Article extends Component {
  state = {};
  render() {
    const { article } = this.props;
    return (
      <Media>
        <img
          width={100}
          height={100}
          className="mr-3"
          src={article.imgUrl}
          alt=""
        />
        <Media.Body>
          <div>
            <p className="float-right"> {article.posted} </p>
            <h5>{article.title}</h5>
          </div>
          <p className="collapse">{article.fullVersion}</p>
        </Media.Body>
      </Media>
    );
  }
}

export default Article;

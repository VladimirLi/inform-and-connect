import React, { Component } from "react";
import Media from "react-bootstrap/Media";

class Article extends Component {
  state = {};
  render() {
    return (
      <Media>
        <img
          width={100}
          height={100}
          className="mr-3"
          src="https://picsum.photos/200"
          alt="Generic placeholder"
        />
        <Media.Body>
          <div>
            <p className="float-right"> 04. April 2020</p>
            <h5>Media Heading</h5>
          </div>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>
        </Media.Body>
      </Media>
    );
  }
}

export default Article;

import React, { Component } from "react";
import { UIElementIfExists } from "../utils";

class UsefulContacts extends Component {
  state = {};
  render() {
    if (this.props.contacts) {
      return (
        <div className="ml-5">
          <h3 className="mb-5">
            {UIElementIfExists(
              this.props.UIElements.usefulContact,
              this.props.currentLanguage.code
            )}
          </h3>
          {this.props.contacts.map((contact) => (
            <div key={contact.id} className="mb-5">
              <h5>{contact.number}</h5>
              {contact.text}
            </div>
          ))}
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default UsefulContacts;

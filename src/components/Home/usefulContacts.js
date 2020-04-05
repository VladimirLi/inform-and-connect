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
          <h5>Medical advice in other languages</h5>
          <p>
            When you need medical advice in other languages, please call:
            <ul>
              <li>
                English: 1178 <br />
                all week, around the clock
              </li>
              <li>
                Finnish: 1177 <br />
                weekdays 8–12 am
              </li>
              <li>
                Arabic: 08-123 130 80 <br />
                all week 8 am–22 pm
              </li>
              <li>
                Somali: 08-123 130 90 <br />
                weekdays 8 am–17 pm
              </li>
              <li>
                Persian: 08-123130 87 <br />
                weekdays 8 am–17 pm
              </li>
            </ul>
          </p>
          <h5>General questions about coronavirus</h5>
          <p>
            Phone service for questions concerning covid-19 for you who speak{" "}
            <b>Arabic</b>, <b>Somali</b>, <b>Persian</b>,{" "}
            <b>Tigrinya/Amarinja</b> and <b>Russian</b>. <br /> Phone: 08-123
            680 00.
            <br />
            Opening hours weekdays, 9-12 am and 13-15 pm.
          </p>
          {/* {this.props.contacts.map((contact) => (
            <div key={contact.id} className="mb-5">
              <h5>{contact.number}</h5>
              {contact.text}
            </div>
          ))} */}
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default UsefulContacts;

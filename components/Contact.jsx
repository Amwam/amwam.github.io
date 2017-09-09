import React, { Component } from "react";
import ContactIcon from "./ContactIcon";

const contacts = [
  {
    href: "https://facebook.com/amwam",
    image: "facebook.png",
    subtext: "Facebook"
  },

  {
    href: "https://twitter.com/amwam",
    image: "twitter.png",
    subtext: "Twitter"
  },
  {
    href: "https://github.com/amwam",
    image: "github.png",
    subtext: "GitHub"
  },

  {
    href: "http://uk.linkedin.com/pub/amit-shah/25/184/a84/",
    image: "linkedin.png",
    subtext: "LinkedIn"
  },
  {
    href: "https://careers.stackoverflow.com/amwam",
    image: "stackoverflow.png",
    subtext: "Stack overflow"
  },

  {
    href: "mailto:amit+website@amwam.me",
    image: "mail.png",
    subtext: "Email"
  }
];

export default class Contact extends Component {
  render() {
    return (
      <div
        style={{ display: "flex", flexWrap: "wrap", flexDirection: "column" }}
      >
        {contacts.map(c => <ContactIcon key={c.subtext} {...c} />)}
      </div>
    );
  }
}

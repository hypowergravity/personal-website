import React from "react";
import MarkdownRenderer from "../components/MarkdownRenderer";
import ContactContent from "../content/contact.md";

function Contact() {
  return (
    <div>
      <MarkdownRenderer markdownPath={ContactContent} />
    </div>
  );
}

export default Contact;

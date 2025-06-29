// src/pages/About.js
import React from "react";
import MarkdownRenderer from "../components/MarkdownRenderer";
import aboutContent from "../content/about.md";

function About() {
  return (
    <div className="page-container">
      <MarkdownRenderer markdownPath={aboutContent} />
    </div>
  );
}

export default About;

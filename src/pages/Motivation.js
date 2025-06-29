// src/pages/Home.js
import React from "react";
import MarkdownRenderer from "../components/MarkdownRenderer";
import MotivationContent from "../content/motivation.md";

function Motivation() {
  return (
    <div className="page-container">
      <MarkdownRenderer markdownPath={MotivationContent} />
    </div>
  );
}

export default Motivation;

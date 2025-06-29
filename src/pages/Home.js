// src/pages/Home.js
import React from 'react';
import MarkdownRenderer from '../components/MarkdownRenderer';
import homeContent from '../content/home.md';

function Home() {
  return (
    <div className="page-container">
      <MarkdownRenderer markdownPath={homeContent} className="custom-additional-classes" />
    </div>
  );
}

export default Home;
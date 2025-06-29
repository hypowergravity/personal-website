// src/components/MathRenderer.js
import React from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";

// Custom component for inline math
export const InlineMath = ({ children }) => (
  <MathJax inline dynamic>
    {children}
  </MathJax>
);

// Custom component for block math
export const DisplayMath = ({ children }) => (
  <MathJax dynamic>{children}</MathJax>
);

// MathJax configuration
export const mathConfig = {
  loader: {
    load: ["[tex]/html"],
  },
  tex: {
    packages: { "[+]": ["html"] },
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"],
    ],
    processEscapes: true,
    processEnvironments: true,
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex",
  },
};

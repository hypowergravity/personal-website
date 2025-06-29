// src/utils/remarkMathJax.js
import { visit } from "unist-util-visit";

// Plugin to handle math with better-react-mathjax
export function remarkMathJax() {
  return (tree) => {
    visit(tree, ["inlineMath", "math"], (node, index, parent) => {
      const value = node.value;

      if (node.type === "inlineMath") {
        // Convert inline math to HTML
        node.type = "html";
        node.value = `<span class="math-inline">${value}</span>`;
      } else {
        // Convert block math to HTML
        node.type = "html";
        node.value = `<div class="math-display">${value}</div>`;
      }
    });
  };
}

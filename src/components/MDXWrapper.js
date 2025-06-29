// src/components/MDXWrapper.js
import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { Button, Alert, CodeBlock, Callout } from "./MDXComponents";

const components = {
  // Override default markdown elements with custom styling
  h1: (props) => <h1 className="mdx-h1" {...props} />,
  h2: (props) => <h2 className="mdx-h2" {...props} />,
  h3: (props) => <h3 className="mdx-h3" {...props} />,
  p: (props) => <p className="mdx-paragraph" {...props} />,
  pre: (props) => <pre className="mdx-code-block" {...props} />,
  code: (props) => <code className="mdx-inline-code" {...props} />,
  blockquote: (props) => <blockquote className="mdx-blockquote" {...props} />,
  ul: (props) => <ul className="mdx-list" {...props} />,
  ol: (props) => <ol className="mdx-ordered-list" {...props} />,
  li: (props) => <li className="mdx-list-item" {...props} />,
  a: (props) => <a className="mdx-link" {...props} />,
  img: (props) => <img className="mdx-image" alt="" {...props} />,

  // Custom components available in MDX
  Button,
  Alert,
  CodeBlock,
  Callout,
};

export function MDXWrapper({ children }) {
  return (
    <MDXProvider components={components}>
      <div className="mdx-content">{children}</div>
    </MDXProvider>
  );
}
export default MDXWrapper;

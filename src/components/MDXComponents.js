// src/components/MDXComponents.js
import React from "react";

// Custom components that can be used in MDX files
export const Button = ({
  children,
  onClick,
  className = "",
  variant = "primary",
}) => (
  <button
    className={`mdx-button mdx-button-${variant} ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export const Alert = ({ type = "info", children }) => (
  <div className={`mdx-alert mdx-alert-${type}`}>{children}</div>
);

export const CodeBlock = ({ children, language = "javascript" }) => (
  <pre className={`language-${language} mdx-code-block`}>
    <code>{children}</code>
  </pre>
);

export const Callout = ({ children, type = "note" }) => (
  <div className={`mdx-callout mdx-callout-${type}`}>{children}</div>
);

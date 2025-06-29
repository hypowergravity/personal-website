// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
// import { createPortal } from "react-dom";
import "./styles.css";
import App from "./App";
import "katex/dist/katex.min.css";

// Create single root
const root = ReactDOM.createRoot(document.getElementById("contents"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
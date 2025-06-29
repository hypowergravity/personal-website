import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import useCSSManager from '../hooks/useCSSManager';
import { externalCSSConfig } from '../config/externalCSS';
import "katex/dist/katex.min.css";
import rehypeRaw from 'rehype-raw';


function MarkdownRenderer({ markdownPath, theme = 'elegant' }) {
    const [markdownContent, setMarkdownContent] = useState("");
    const [error, setError] = useState(null);

    // Load CSS based on theme
    const cssUrls = [
        externalCSSConfig.markdown[theme],
        externalCSSConfig.fonts.roboto,
    ].filter(Boolean);

    useCSSManager(cssUrls, {
        preload: true,
        removeOnUnmount: false // Keep loaded for performance
    });

    useEffect(() => {
        async function fetchMarkdown() {
            try {
                const response = await fetch(markdownPath);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const text = await response.text();
                setMarkdownContent(text);
            } catch (e) {
                setError(e);
                console.error("Failed to fetch markdown:", e);
            }
        }

        fetchMarkdown();
    }, [markdownPath]);

    if (error) {
        return <div>Error loading content.</div>;
    }

    return (
        <div className="max-w-4xl mx-auto px-6 py-8">
            <ReactMarkdown
                remarkPlugins={[remarkMath, remarkGfm]}
                rehypePlugins={[rehypeRaw, rehypeKatex]}
            >
                {markdownContent}
            </ReactMarkdown>
        </div>
    );
}

export default MarkdownRenderer;
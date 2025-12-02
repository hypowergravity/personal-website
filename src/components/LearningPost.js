// src/components/LearningPost.js
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

function LearningPost({ post, onBack }) {
  if (!post || !post.content) {
    return (
      <div>
        <button onClick={onBack}>← Back to Learning</button>
        <div>Learning content not found</div>
      </div>
    );
  }

  return (
    <div className="learning-post">
      <button onClick={onBack} style={{ marginBottom: "20px" }}>
        ← Back to Learning
      </button>

      <article>
        <header>
          <h1>{post.meta.title}</h1>
          <p className="post-meta">
            {post.meta.date} • {post.meta.category}
          </p>
          <div className="post-tags">
            {post.meta.tags?.map((tag) => (
              <span
                key={tag}
                className="tag"
                style={{
                  background: "#f0fdf4",
                  color: "#16a34a",
                  padding: "4px 8px",
                  margin: "2px",
                  borderRadius: "4px",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="post-content">
          <ReactMarkdown
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex]}
            components={{
              a: ({ node, ...props }) => (
                <a {...props} target="_blank" rel="noreferrer" />
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
}

export default LearningPost;

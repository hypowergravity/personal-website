// src/components/LearningList.js
import React from "react";
import { getAllLearningPosts } from "../content/learning";

function LearningList({ onPostSelect }) {
  const posts = getAllLearningPosts();

  return (
    <div className="learning-list">
      <h2>Learning Resources</h2>
      <div className="posts-grid">
        {posts.map((post) => (
          <article key={post.slug} className="post-card">
            <h3
              className="post-title"
              onClick={() => onPostSelect(post)}
              style={{ cursor: "pointer", color: "#0066cc" }}
            >
              {post.meta.title}
            </h3>
            <p className="post-meta">
              {post.meta.date} • {post.meta.category}
            </p>
            <p className="post-excerpt">{post.meta.excerpt}</p>
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
          </article>
        ))}
      </div>
    </div>
  );
}

export default LearningList;

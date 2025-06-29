// src/components/BlogList.js
import React from "react";
import { getAllBlogPosts } from "../content/blog";

function BlogList({ onPostSelect }) {
  const posts = getAllBlogPosts();

  return (
    <div className="blog-list">
      <h2>All Posts</h2>
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
                <span key={tag} className="tag">
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

export default BlogList;

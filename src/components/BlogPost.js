// src/components/BlogPost.js
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

function BlogPost({ post, onBack }) {
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
      <div className="blog-post">
        <button onClick={onBack} style={{ marginBottom: '20px' }}>
          ← Back to Posts
        </button>

        <article>
          <header>
            <h1>{post.meta.title}</h1>
            <p className="post-meta">
              {post.meta.date} • {post.meta.category}
            </p>
            <div className="post-tags">
              {post.meta.tags?.map(tag => (
                  <span key={tag} className="tag">
                {tag}
              </span>
              ))}
            </div>
          </header>

          <div className="post-content">
            <ReactMarkdown
              remarkPlugins={[remarkMath, remarkGfm]}
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

export default BlogPost;

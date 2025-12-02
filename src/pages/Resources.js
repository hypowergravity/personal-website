// src/pages/Library.js
import React, { useMemo, useState } from "react";
import { getAllLibraryEntries, getLibraryCategories } from "../content/resources";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function Resources() {
  const allEntries = getAllLibraryEntries();
  const categories = getLibraryCategories();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(null);

  const filtered = useMemo(() => {
    return allEntries.filter((e) => {
      const catOk = selectedCategory ? e.category === selectedCategory : true;
      const q = query.trim().toLowerCase();
      const txt = `${e.meta.title || ""} ${e.meta.tags?.join(" ") || ""} ${e.meta.summary || ""}`.toLowerCase();
      const qOk = q ? txt.includes(q) : true;
      return catOk && qOk;
    });
  }, [allEntries, selectedCategory, query]);

  if (active) {
    return (
      <div className="page-container library-container">
        <button onClick={() => setActive(null)} style={{ marginBottom: 16 }}>
          ← Back to Resources
        </button>
        <h1 style={{ marginBottom: 6 }}>{active.meta.title || active.slug}</h1>
        <p style={{ color: "#666", marginBottom: 12 }}>
          {active.category ? (categories.find((c) => c.slug === active.category)?.title || active.category) : ""}
        </p>
        {active.meta.image && (
          <img
            src={active.meta.image}
            alt={active.meta.title || active.slug}
            className="post-hero"
          />
        )}
        {active.meta.link && (
          <p style={{ marginBottom: 12 }}>
            <a href={active.meta.link} target="_blank" rel="noreferrer">Open link ↗</a>
          </p>
        )}
        {active.meta.tags && (
          <div style={{ marginBottom: 12 }}>
            {active.meta.tags.map((t) => (
              <span key={t} className="tag" style={{ marginRight: 6 }}>
                {t}
              </span>
            ))}
          </div>
        )}
        <div className="post-content">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              a: ({ node, ...props }) => (
                <a {...props} target="_blank" rel="noreferrer" />
              ),
            }}
          >
            {active.content}
          </ReactMarkdown>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container library-container">
      <h2>Resources</h2>
      <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">All categories</option>
          {categories.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.title}
            </option>
          ))}
        </select>
        <input
          type="search"
          placeholder="Search title, tags, summary"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ flex: 1, padding: "6px 10px" }}
        />
      </div>

      <div className="posts-grid">
        {filtered.map((e) => (
          <article key={`${e.category}-${e.slug}`} className="post-card">
            {e.meta.image && (
              <img
                src={e.meta.image}
                alt={e.meta.title || e.slug}
                className="post-thumb"
              />
            )}
            <h3
              className="post-title"
              onClick={() => setActive(e)}
              style={{ cursor: "pointer", color: "#0066cc" }}
            >
              {e.meta.link ? (
                <a href={e.meta.link} target="_blank" rel="noreferrer" onClick={(ev) => ev.stopPropagation()}>
                  {e.meta.title || e.slug}
                </a>
              ) : (
                e.meta.title || e.slug
              )}
            </h3>
            {e.category && (
              <p className="post-meta">
                {(categories.find((c) => c.slug === e.category)?.title) || e.category}
              </p>
            )}
            {e.meta.summary && <p className="post-excerpt">{e.meta.summary}</p>}
            <div className="post-tags">
              {e.meta.tags?.map((tag) => (
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

export default Resources;

// scripts/generate-content-with-content.js
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

function generateIndex(contentDir, sectionName) {
  const fullDir = path.join(__dirname, `../src/content/${contentDir}`);

  if (!fs.existsSync(fullDir)) {
    console.log(`Directory ${fullDir} does not exist. Skipping...`);
    return;
  }

  const files = fs.readdirSync(fullDir).filter((file) => file.endsWith(".mdx"));

  const posts = files.map((file) => {
    const fullPath = path.join(fullDir, file);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    // Create slug from filename
    const slug = file.replace(".mdx", "").replace(/^\d{4}-\d{2}-\d{2}-/, "");

    return {
      slug,
      fileName: file,
      meta: data,
      content: content,
    };
  });

  // Generate the index.js file with embedded content
  const indexContent = `// Auto-generated ${sectionName} index

export const ${sectionName}Posts = [
${posts
  .map(
    (post) => `  {
    slug: '${post.slug}',
    meta: ${JSON.stringify(post.meta, null, 4)},
    content: \`${post.content.replace(/`/g, "\\`")}\`
  }`
  )
  .join(",\n")}
];

export const getAll${
    sectionName.charAt(0).toUpperCase() + sectionName.slice(1)
  }Posts = () => {
  return ${sectionName}Posts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date));
};

export const get${
    sectionName.charAt(0).toUpperCase() + sectionName.slice(1)
  }PostBySlug = (slug) => {
  return ${sectionName}Posts.find(post => post.slug === slug);
};`;

  fs.writeFileSync(path.join(fullDir, "index.js"), indexContent);
  console.log(`${sectionName} index generated successfully!`);
}

// Generate indexes for both sections
generateIndex("blog", "blog");
generateIndex("learning", "learning");

// Generate a hierarchical index for a Notion-like Library
function walkFilesRecursive(rootDir, exts = [".mdx", ".md"]) {
  const results = [];
  if (!fs.existsSync(rootDir)) return results;

  const entries = fs.readdirSync(rootDir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(rootDir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walkFilesRecursive(fullPath, exts));
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      if (exts.includes(ext)) results.push(fullPath);
    }
  }
  return results;
}

function generateLibraryIndex() {
  const libraryRoot = path.join(__dirname, "../src/content/resources");
  if (!fs.existsSync(libraryRoot)) {
    console.log(`Library root ${libraryRoot} does not exist. Skipping...`);
    return;
  }

  // Load categories config if present (optional pretty titles)
  const categoriesPath = path.join(libraryRoot, "categories.json");
  let categories = [];
  if (fs.existsSync(categoriesPath)) {
    try {
      const raw = fs.readFileSync(categoriesPath, "utf8");
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        categories = parsed.map((c) => {
          if (typeof c === "string") return { slug: c, title: c };
          return {
            slug: c.slug,
            title: c.title || c.slug,
            description: c.description || "",
          };
        });
      }
    } catch (e) {
      console.warn("Failed to parse library categories.json:", e.message);
    }
  }

  const files = walkFilesRecursive(libraryRoot, [".mdx", ".md"]);
  const posts = files
    .filter((fullPath) => {
      const base = path.basename(fullPath).toLowerCase();
      // Exclude repository/readme helpers from listing
      if (base === "readme.md" || base === "readme.mdx") return false;
      return true;
    })
    .map((fullPath) => {
      const relPath = path.relative(libraryRoot, fullPath);
      const pathParts = relPath.split(path.sep);
      const file = pathParts[pathParts.length - 1];
      const detectedCategory = pathParts.length > 1 ? pathParts[0] : "uncategorized";
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      const slug = file.replace(/\.(md|mdx)$/i, "");
      const category = detectedCategory;
      return {
        slug,
        category,
        filePath: relPath,
        meta: { ...data, category },
        content,
      };
    });

  // Build categories automatically from folders; overlay titles from config if provided
  const uniqueCategorySlugs = Array.from(new Set(posts.map((p) => p.category))).filter(Boolean).sort();
  const categoriesBySlug = new Map(categories.map((c) => [c.slug, c]));
  const titleOverride = { reaction: "Reactions" };
  const toPretty = (s) => {
    // Convert slug to human-friendly title with small-word handling
    const small = new Set(["and", "of", "the", "in", "to", "for", "on", "with", "a", "an"]);
    const words = s.replace(/[-_]+/g, " ").split(/\s+/);
    return words
      .map((w, i) => {
        const lw = w.toLowerCase();
        if (i > 0 && small.has(lw)) return lw;
        return lw.charAt(0).toUpperCase() + lw.slice(1);
      })
      .join(" ");
  };
  const combinedCategories = uniqueCategorySlugs.map((slug) => {
    const conf = categoriesBySlug.get(slug);
    const pretty = titleOverride[slug] || toPretty(slug);
    return conf
      ? { slug, title: conf.title || pretty, description: conf.description || "" }
      : { slug, title: pretty };
  });

  const indexContent = `// Auto-generated library index

export const libraryEntries = [
${posts
  .map(
    (post) => `  {
    slug: '${post.slug}',
    category: '${post.category}',
    filePath: '${post.filePath.replace(/\\/g, "/")}',
    meta: ${JSON.stringify(post.meta, null, 4)},
    content: \`${post.content.replace(/`/g, "\\`")}\`
  }`
  )
  .join(",\n")}
];

export const getAllLibraryEntries = () => {
  return libraryEntries
    .slice()
    .sort((a, b) => {
      const at = (a.meta.title || a.slug || "").toLowerCase();
      const bt = (b.meta.title || b.slug || "").toLowerCase();
      return at.localeCompare(bt);
    });
};

export const getLibraryEntryBySlug = (slug) => {
  return libraryEntries.find((entry) => entry.slug === slug);
};

export const libraryCategories = ${JSON.stringify(combinedCategories, null, 2)};

export const getLibraryCategories = () => {
  return libraryCategories;
};
`;

  fs.writeFileSync(path.join(libraryRoot, "index.js"), indexContent);
  console.log("library index generated successfully!");
}

generateLibraryIndex();

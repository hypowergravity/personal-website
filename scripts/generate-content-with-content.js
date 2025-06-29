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

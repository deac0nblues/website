#!/usr/bin/env node
/**
 * Scaffold a new R&D article in content/articles/.
 * Usage: node scripts/new-article.js <slug>
 * Example: node scripts/new-article.js my-new-post
 */

const fs = require("fs");
const path = require("path");

const slug = process.argv[2];
if (!slug) {
  console.error("Usage: node scripts/new-article.js <slug>");
  process.exit(1);
}

const articlesDir = path.join(process.cwd(), "content", "articles");
const date = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
const template = `---
slug: ${slug}
title: TITLE_HERE
date: ${date}
author: Author Name
excerpt: Short summary for carousel and previews.
category: RESEARCH
---

## Why This Matters for Your Business

Content here.

---

## Section Two

Content here.

---

## The Bottom Line

Summary and takeaway.

---

*[Get in touch →](mailto:build@quicksilverlab.ai)
`;

const filePath = path.join(articlesDir, `${slug}.md`);
if (fs.existsSync(filePath)) {
  console.error(`File already exists: ${filePath}`);
  process.exit(1);
}

fs.mkdirSync(articlesDir, { recursive: true });
fs.writeFileSync(filePath, template, "utf-8");
console.log(`Created ${filePath}`);
console.log("Edit the file and set title, author, excerpt, and body.");
console.log(`Article will be available at /thinking/${slug}`);

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const ARTICLES_DIR = path.join(process.cwd(), "content/articles");

export interface ArticleMeta {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  category?: string;
}

export interface Article extends ArticleMeta {
  body: string;
}

function dateToString(d: unknown): string {
  if (d instanceof Date) return d.toISOString().slice(0, 10);
  if (typeof d === "string") return d;
  return String(d ?? "");
}

function parseArticleFile(filePath: string): Article | null {
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const slug = data.slug;
  if (!slug || !data.title || !data.date) return null;
  const dateStr = dateToString(data.date);
  return {
    slug,
    title: data.title,
    date: dateStr,
    author: data.author ?? "",
    excerpt: data.excerpt ?? "",
    category: data.category,
    body: content.trim(),
  };
}

function getAllArticleFiles(): string[] {
  const names = fs.readdirSync(ARTICLES_DIR);
  return names
    .filter((n) => n.endsWith(".md") && n.toLowerCase() !== "readme.md")
    .map((n) => path.join(ARTICLES_DIR, n));
}

/**
 * All articles with metadata and body, sorted by date descending.
 * Only call from Node (build/server).
 */
export function getAllArticles(): Article[] {
  const files = getAllArticleFiles();
  const articles = files
    .map((f) => parseArticleFile(f))
    .filter((a): a is Article => a !== null);
  articles.sort((a, b) => (b.date < a.date ? -1 : b.date > a.date ? 1 : 0));
  return articles;
}

/**
 * All articles metadata only (no body), sorted by date descending.
 */
export function getAllArticlesMeta(): ArticleMeta[] {
  const articles = getAllArticles();
  return articles.map(({ body: _, ...meta }) => meta);
}

/**
 * Single article by slug, or null if not found.
 */
export function getArticleBySlug(slug: string): Article | null {
  const files = getAllArticleFiles();
  for (const filePath of files) {
    const article = parseArticleFile(filePath);
    if (article && article.slug === slug) return article;
  }
  return null;
}

/**
 * Most recent articles by date. Exclude optional slug. Limit to `limit` (default 5).
 */
export function getRecentArticles(
  limit: number = 5,
  excludeSlug?: string
): ArticleMeta[] {
  const meta = getAllArticlesMeta();
  const filtered = excludeSlug
    ? meta.filter((a) => a.slug !== excludeSlug)
    : meta;
  return filtered.slice(0, limit);
}

import { getAllArticlesMeta, getRecentArticles } from "@/lib/articles";
import HomeContent from "@/components/HomeContent";

export default function Home() {
  const allMeta = getAllArticlesMeta();
  const carouselArticles = allMeta.map((a) => ({
    title: a.title,
    excerpt: a.excerpt,
    date: a.date,
    category: a.category,
    slug: a.slug,
  }));
  const recent = getRecentArticles(1)[0] ?? null;
  const featuredArticle = recent
    ? {
        title: recent.title,
        excerpt: recent.excerpt,
        date: recent.date,
        category: recent.category,
        slug: recent.slug,
      }
    : null;

  return (
    <HomeContent
      carouselArticles={carouselArticles}
      featuredArticle={featuredArticle}
    />
  );
}

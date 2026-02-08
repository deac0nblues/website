import { notFound } from "next/navigation";
import Link from "next/link";
import { getArticleBySlug, getRecentArticles } from "@/lib/articles";
import Footer from "@/components/Footer";
import ContentSidebar from "@/components/ContentSidebar";
import ArticleBody from "@/components/ArticleBody";

export async function generateStaticParams() {
  const { getAllArticlesMeta } = await import("@/lib/articles");
  const articles = getAllArticlesMeta();
  return articles.map((a) => ({ slug: a.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const recentMeta = getRecentArticles(5, slug);
  const sidebarArticles = recentMeta.map((a) => ({
    title: a.title,
    href: `/thinking/${a.slug}`,
  }));

  return (
    <main className="min-h-screen relative bg-[#0a0e27]">
      <div className="flex max-w-7xl mx-auto px-6">
        <article className="min-w-0 flex-1 max-w-4xl py-24 text-white">
          <div>
            <Link
              href="/#rnd"
              className="text-sm text-[#00ff96] hover:text-[#00ff96]/80 transition-colors mb-8 inline-block font-mono uppercase tracking-wider"
            >
              ← Back to R&D
            </Link>

            <div className="font-mono text-[11px] text-[#00ff96] uppercase tracking-[2px] mb-4">
              [RESEARCH NOTE]
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              {article.title}
            </h1>

            <p className="text-xs text-[#a0a0a0] mb-12 font-mono uppercase tracking-wider">
              by {article.author}
            </p>

            <ArticleBody content={article.body} />

            <div className="border-t border-[#00ff96]/20 pt-8 mt-16">
              <Link
                href="/#rnd"
                className="text-sm text-[#00ff96] hover:text-[#00ff96]/80 transition-colors inline-block font-mono uppercase tracking-wider"
              >
                ← Back to R&D
              </Link>
            </div>
          </div>
        </article>

        <div className="hidden lg:flex flex-shrink-0 self-start sticky top-24 pt-24 items-stretch">
          <div className="w-14 flex flex-col items-center">
            <div className="w-px h-full bg-[#00ff96]/20" aria-hidden />
          </div>
          <ContentSidebar
            articles={sidebarArticles}
            currentPath={`/thinking/${slug}`}
          />
        </div>
      </div>

      <Footer />
    </main>
  );
}

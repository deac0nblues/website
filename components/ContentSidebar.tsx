"use client";

import Link from "next/link";

export interface SidebarArticle {
  title: string;
  href: string;
}

interface ContentSidebarProps {
  articles: SidebarArticle[];
  currentPath: string;
}

export default function ContentSidebar({ articles, currentPath }: ContentSidebarProps) {
  return (
    <aside className="flex-shrink-0 w-72 xl:w-80">
      <div className="font-mono text-[10px] text-[#00ff96] uppercase tracking-wider mb-4">
        More from R&D
      </div>
      <nav className="space-y-4">
        {articles.map((article) => {
          const isCurrent = currentPath === article.href;
          return (
            <Link
              key={article.href}
              href={article.href}
              className={`block text-sm leading-snug transition-colors ${
                isCurrent
                  ? "text-[#00ff96] font-medium"
                  : "text-[#a0a0a0] hover:text-[#00ff96]/80"
              }`}
            >
              {article.title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

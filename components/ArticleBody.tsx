"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const proseClasses = {
  h2: "text-3xl font-bold mb-6 text-white mt-12",
  h3: "text-2xl font-bold mb-4 text-white",
  h4: "text-xl font-bold mb-3 text-[#00ff96]",
  p: "text-[#a0a0a0] leading-relaxed mb-4",
  ul: "list-disc list-inside space-y-2 mb-6 text-[#a0a0a0]",
  ol: "list-decimal list-inside space-y-2 mb-6 text-[#a0a0a0]",
  li: "leading-relaxed",
  hr: "border-[#00ff96]/20 my-12",
  a: "text-[#00ff96] hover:text-[#00ff96]/80 transition-colors underline",
  strong: "text-white",
  table: "w-full border-collapse text-[#a0a0a0] mb-6",
  thead: "border-b border-[#00ff96]/30",
  th: "text-left py-3 pr-4 font-semibold text-white",
  tbody: "",
  tr: "border-b border-[#00ff96]/10",
  td: "py-3 pr-4",
  blockquote: "text-[#a0a0a0] italic border-l-4 border-[#00ff96]/30 pl-4 my-4",
};

export default function ArticleBody({ content }: { content: string }) {
  return (
    <div className="prose prose-lg max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => (
            <h2 className={proseClasses.h2}>{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className={proseClasses.h3}>{children}</h3>
          ),
          h4: ({ children }) => (
            <h4 className={proseClasses.h4}>{children}</h4>
          ),
          p: ({ children }) => <p className={proseClasses.p}>{children}</p>,
          ul: ({ children }) => <ul className={proseClasses.ul}>{children}</ul>,
          ol: ({ children }) => <ol className={proseClasses.ol}>{children}</ol>,
          li: ({ children }) => <li className={proseClasses.li}>{children}</li>,
          hr: () => <hr className={proseClasses.hr} />,
          a: ({ href, children }) => (
            <a
              href={href ?? "#"}
              className={proseClasses.a}
              {...(href?.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {children}
            </a>
          ),
          strong: ({ children }) => (
            <strong className={proseClasses.strong}>{children}</strong>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto mb-6">
              <table className={proseClasses.table}>{children}</table>
            </div>
          ),
          thead: ({ children }) => <thead className={proseClasses.thead}>{children}</thead>,
          th: ({ children }) => <th className={proseClasses.th}>{children}</th>,
          tbody: ({ children }) => <tbody className={proseClasses.tbody}>{children}</tbody>,
          tr: ({ children }) => <tr className={proseClasses.tr}>{children}</tr>,
          td: ({ children }) => <td className={proseClasses.td}>{children}</td>,
          blockquote: ({ children }) => (
            <blockquote className={proseClasses.blockquote}>{children}</blockquote>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

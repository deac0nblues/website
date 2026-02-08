# Article content

This directory houses content for R&D articles. Use it for:

- Markdown or structured data for each article (e.g. `engineering-experts-eggroll.md`, `ai-psychometric-jailbreaks.md`)
- Shared article metadata (titles, excerpts, dates) for the carousel and article pages

Article routes remain under `app/thinking/<slug>/` and can import or fetch content from here.

---

## Article format

Every article must be a single markdown file with **YAML frontmatter** followed by a markdown body. This format allows the site to list and sort articles by date and supports weekly auto-generated content.

### Frontmatter (required)

```yaml
---
slug: my-article-slug       # URL segment: /thinking/<slug>
title: Full Article Title
date: 2025-01-15            # ISO date (YYYY-MM-DD) for "most recent" sorting
author: Author Name
excerpt: Short summary for carousel and previews.
category: RESEARCH          # optional; e.g. RESEARCH, POSITION PAPER
---
```

### Body

- Use `##` for major sections (e.g. "Why This Matters for Your Business", "The Bottom Line").
- Use `###` for subsections.
- You can add a CTA link at the end in markdown, e.g. `[Get in touch →](mailto:build@quicksilverlab.ai)`.

To add a new article: create a new `.md` file in this directory with valid frontmatter and body. The build will pick it up; no code changes required.

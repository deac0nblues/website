---
slug: nona-newsletter-agent
title: We're Drowning in Newsletters (So We Built NoNA to Read Them for Us)
date: 2025-02-05
author: Dan Watkins & Ben Letson
excerpt: How we built NoNA to read 47+ newsletters for us and surface what actually matters.
category: RESEARCH
---

## The Problem

We subscribe to too many newsletters.

AI research digests. Industry analysis. Funding announcements. Engineering deep-dives. Market commentary. Security bulletins. The occasional philosophical tangent about the future of work.

At last count: 47 newsletters. That's not a brag—it's a problem.

On a good week, we skim maybe a third of them. The rest pile up unread until we declare inbox bankruptcy and archive everything. Then we find out three weeks later that something important happened and we missed it because it was buried in newsletter #34.

Sound familiar?

We talked to clients. Same story. Everyone's subscribed to more than they can read. Everyone's worried they're missing something. Nobody has a good system.

So we built one.

---

## What We're Building

We're calling it the Newsletter of Newsletters Agent—NoNA for short. It's simple in concept:

1. Ingest a large volume of newsletters (currently ~50, scaling to 200+)
2. Extract the signal from the noise
3. Surface the most interesting and relevant content
4. Deliver a weekly digest that's actually worth reading

The goal isn't to summarize everything—that would just create another newsletter to ignore. The goal is to filter aggressively and surface only what matters.

We'll be publishing the results weekly, free, on our site. Consider it a public experiment.

---

## How It Works

The agent combines a few techniques. Here's the architecture at a high level.

### Step 1: Ingestion and Parsing

Newsletters are messy. HTML formatting, images, sponsored sections, signature blocks, "click here to unsubscribe" footers. Before we can analyze content, we need to extract clean text.

We built a parser that:
- Strips boilerplate (headers, footers, ads)
- Segments content into discrete items (most newsletters cover multiple topics)
- Preserves metadata (source, date, author, links)
- Handles the chaos of inconsistent formatting across 50+ different newsletter templates

This sounds trivial. It wasn't.

### Step 2: Filtering with TF-IDF

Here's where it gets interesting. How do you decide what's "important" across hundreds of newsletter items per week?

We started with TF-IDF. If you're not familiar, here's the quick version:

**TF-IDF stands for Term Frequency–Inverse Document Frequency.** It's a way to measure how important a word is to a document relative to a larger collection of documents.

- **Term Frequency (TF)**: How often does this word appear in this document? More frequent = more relevant to this specific piece.
- **Inverse Document Frequency (IDF)**: How rare is this word across all documents? Words that appear everywhere ("the", "is", "and") get downweighted. Words that appear rarely get upweighted.

Multiply them together, and you get a score that highlights words that are both frequent in a specific document AND rare across the corpus.

**Why this matters for newsletters:** If every newsletter this week mentions "AI," that term isn't informative—it's noise. But if only two newsletters mention "EGGROLL" or "psychometric jailbreaks," those terms stand out. TF-IDF surfaces the specific, unusual, potentially important stuff and suppresses the generic background chatter.

We run TF-IDF across each week's newsletter corpus to identify which items contain novel or distinctive information versus which are covering the same ground as everyone else.

### Step 3: Relevance Scoring

TF-IDF tells us what's distinctive. It doesn't tell us what's relevant to our audience.

For that, we layer on a relevance model. We defined a set of topic categories that matter to our readers:
- AI research breakthroughs
- Infrastructure and tooling
- Enterprise adoption patterns
- Funding and market moves
- Regulatory and policy developments
- Security and safety research

Each newsletter item gets scored against these categories. High distinctiveness + high relevance = surfaces to the top.

### Step 4: Clustering and Deduplication

Multiple newsletters often cover the same story. We don't need five summaries of the same funding round.

We cluster similar items using embedding similarity, pick the best-written or most informative version, and collapse the rest into a "also covered by" footnote.

This alone cuts volume by 30-40% in a typical week.

### Step 5: LLM Summary and Editorial

The surviving items go to an LLM for final processing:
- Generate concise summaries (2-3 sentences each)
- Group by theme
- Add brief editorial context where useful
- Format for readability

We review the output before publishing. The agent does the heavy lifting; we do the final sanity check.

---

## Why Not Just Use an LLM for Everything?

Fair question. Why bother with TF-IDF and clustering? Why not just throw everything at GPT-4 and ask for a summary?

A few reasons:

**Context window limits.** 50 newsletters × 5-10 items each × 500 words per item = 125,000-250,000 words per week. That exceeds context limits, and even if it didn't, performance degrades with very long contexts.

**Cost.** Running hundreds of thousands of tokens through frontier models weekly adds up. TF-IDF and clustering are computationally cheap preprocessing steps that reduce the volume hitting the expensive LLM layer.

**Quality.** LLMs are good at summarization but less good at novelty detection. They'll happily summarize the same story five times without noting it's redundant. TF-IDF and clustering handle the structural filtering; the LLM handles the prose.

**Transparency.** We can inspect and debug the filtering logic. When something gets surfaced or buried, we can trace why. Pure LLM pipelines are harder to audit.

The hybrid approach—statistical methods for filtering, neural methods for language—gives us the best of both.

---

## What We've Learned So Far

We've been running NoNA internally for six weeks. A few observations:

**The 80/20 rule is real.** Roughly 20% of newsletter content accounts for 80% of the novel, actionable information. The rest is repetition, filler, or context we already have.

**Source quality varies wildly.** Some newsletters consistently surface in our filtered output. Others almost never do. We're considering publishing a "signal density" ranking at some point.

**Timing matters.** The same story covered on Monday vs. Friday has different value. We're experimenting with time-decay weighting to favor fresh coverage.

**Our own reading habits changed.** Now that we trust NoNA to catch important items, we've given ourselves permission to not read most newsletters directly. Inbox stress is down. FOMO is down. We're actually better informed.

---

## What's Coming

We'll start publishing the weekly digest on our site soon. Free, public, no signup required.

We're also exploring:
- **Personalization**: Let readers set their own relevance weights
- **Source expansion**: Add RSS feeds, blog posts, research paper abstracts
- **Alert mode**: Real-time notifications for high-signal items instead of weekly batches
- **API access**: For teams who want to plug this into their own workflows

If you want to be notified when we launch, drop us a line.

---

## The Bigger Picture

This is a small project, but it reflects how we think about AI systems generally.

The goal isn't to replace human judgment. It's to do the tedious filtering work so humans can focus on the interesting stuff. AI as infrastructure, not novelty. Systems that save time rather than demand attention.

We built this because we needed it. We're sharing it because others might too.

---

*Want early access or have newsletters we should add to the mix? [Let us know →](mailto:build@quicksilverlab.ai)*
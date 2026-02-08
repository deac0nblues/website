---
slug: better-math-better-ai
title: Better Math Builds Better AI
date: 2025-02-05
author: Ben Letson
excerpt: The next wave of AI progress won't come from bigger models—it'll come from better math. A look at where the foundations break down.
category: RESEARCH
---

## Why This Matters for Your Business

The AI industry has a dirty secret: we've been brute-forcing progress.

For the past decade, performance gains have come primarily from scale—more data, more compute, more parameters. The math underneath hasn't changed much since the attention mechanism landed in 2017. We've been riding the same theoretical foundations while throwing exponentially more resources at the problem.

This works until it doesn't. And we're starting to hit the walls.

The next wave of AI progress won't come from bigger models. It'll come from better math. New theoretical foundations that let us do more with less, solve problems we currently can't, and build systems we can actually trust.

I want to illustrate this with a concrete example: the problem of fair attribution in RAG systems. It's a real business problem with real money at stake—and the math we're currently using to solve it is fundamentally broken.

---

## The Compute Scaling Era

Let's be honest about how we got here.

GPT-2 had 1.5 billion parameters. GPT-3 had 175 billion. GPT-4 is rumored to be a mixture-of-experts with over a trillion. Each generation brought dramatic capability improvements, and the recipe was simple: make it bigger.

The same pattern played out across the industry. Training budgets went from thousands of dollars to hundreds of millions. Data requirements went from gigabytes to petabytes. The companies winning the AI race were the ones with the most GPUs.

This isn't a criticism—it worked. Scaling laws are real. But it's worth noting what *didn't* change: the underlying mathematics. Transformers are still transformers. Backpropagation is still backpropagation. The attention mechanism that powers modern LLMs was published in 2017, and we've been iterating on implementation details ever since.

We've been climbing the same hill faster. We haven't found new hills.

---

## Where the Math Breaks Down

Scale solves a lot of problems, but not all of them. Some problems require new theoretical foundations.

Here's one that matters: **fair attribution in RAG systems.**

The integration of advanced shopping tools into ChatGPT is the starting gun for the agentic commerce race. In the next two years, all major retailers, service providers, and travel companies will adopt agentic tools to enable customers to buy in new ways. Two factors are driving this adoption:

1. Studies show a single-digit conversion bump when shopping portals add conversational shopping tools
2. Retailers capture new, incredibly rich demand information from buyers that was only possible via focus groups three years ago

Some retailers will partner with OpenAI, Anthropic, Google, and adopt their platforms. But a portion will chafe at introducing a new layer between themselves and their customers, or will balk at the operating cost and revenue sharing. There will be a market for custom agentic commerce platforms.

One aspect of this emerging market that remains poorly addressed is the problem of **fair attribution of context material.**

---

## The Attribution Problem

A majority of agentic commerce systems will rely on Retrieval Augmented Generation (RAG)—a technique where an LLM is presented with source materials relevant to the user's goal, called *context*.

Imagine a user has a conversation with an LLM system that's drawing on context material. If that user makes a purchase, it's very desirable to understand which pieces of context had an impact on the sale:

- If the context came from the retailer's website, they'll want to understand what kinds of material have the biggest impact
- If the content was sourced from a third party, it's reasonable to suppose that the third party will want to collect some manner of royalty

Creating fair attribution across LLM sources in a RAG system is nontrivial for several reasons:

- There may be buyers and sellers of information with contrary goals in the attribution process, so anything short of mathematically proven fairness is difficult to justify
- LLMs are stochastic systems that process information in complex ways; simply re-ordering the chunks of context provided to an LLM will result in different responses
- Current attribution approaches based on coalition valuation game theory (SHAP scores) are deficient for reasons I'll explain below

There's an opportunity here to create a new mathematical foundation—a provably fair attribution mechanism for RAG queries.

---

## Why Current Theory Falls Short

Work to date on the attribution problem has focused on game theory techniques developed by Lloyd Shapley in 1952. The problem Shapley was solving for the RAND Corporation was this: assume you're in a cooperative game with n-1 other players, all trying to capture value by forming a coalition. If k players form a coalition and capture value v, what's the fair way to divide the proceeds?

If everyone brings equal value to the table, each player should receive v/k. But if each player brings inhomogeneous value, the attribution becomes more complex.

Shapley laid out a set of abstract assumptions about the cooperative game and proved a surprisingly simple result:

> *Under reasonable conditions, there is a unique and fair way to attribute value between the coalition based on each player's marginal value contribution.*

The strength of this result has been a benchmark in negotiation and game theory for eighty years and won Shapley the Nobel Prize in economics. It's also apparent why researchers attempting to solve the RAG attribution problem so often appeal to SHAP techniques. SHAP scores have been used in machine learning to understand feature importance for years.

On the face of it, RAG attribution does seem to fit the mold of a cooperative game: the context chunks provided to the LLM are members of a coalition that should share in the reward (e.g., commercial attribution) based on their marginal contribution to the outcome.

However, there are significant issues lurking in the phrase *under reasonable conditions.*

---

## The Axiom That Doesn't Hold

Shapley's formulation of fair attribution rests on three axioms, paraphrased here:

1. **Order invariance**: The order in which a coalition is formed does not affect the utility created by the coalition
2. **Efficiency**: The coalition will share the totality of the utility they capture
3. **Additivity**: The attribution of multiple games played concurrently should be the sum of the attributions of each game separately

The first condition presents an immediate problem. The order in which sources are presented to an LLM has a measurable effect on the response. The needle-in-a-haystack test demonstrates this cleanly.

**Needle-in-a-Haystack Test**: Pick a query that would be unanswerable without additional context. Hide the answer in a document that will be presented to the LLM alongside the query. Repeatedly ask the same query while randomly changing the position of the answer within the document. The test checks whether an LLM can find one important piece of information in a sea of noise.

The results are striking: LLMs can reliably find information at the beginning and end of documents, but often fail to find the needle when it's in the middle. Performance degrades significantly as document length increases and the critical information sits in the middle positions.

This means information presented at the beginning and end of RAG context will have more impact and, by any reasonable measure, should receive greater attribution. But Shapley's math assumes order doesn't matter.

**The positional asymmetry of needle-in-a-haystack results demonstrates that Axiom 1 of Shapley's formalism is not a reasonable assumption for RAG attribution.**

We're using 1952 math to solve a 2025 problem. And the math doesn't fit.

---

## The Real-World Stakes

This isn't an academic exercise. Real money is at stake.

Consider a product review site that licenses content to an AI shopping assistant. A customer asks the assistant for recommendations, reads the licensed review content in the AI's response, and makes a purchase. How much of that sale should be attributed to the review content? How much to the product description? How much to the conversational framing the AI added?

With current SHAP-based approaches, you'd get an answer. But that answer would be mathematically unjustified—it would assume order doesn't matter when we know it does. In a negotiation between a retailer and a content provider, "mathematically unjustified" means "litigable."

Now multiply this across every RAG-powered commerce interaction. Every affiliate relationship. Every content licensing deal. Every revenue-sharing agreement. The attribution problem isn't a nice-to-have. It's foundational infrastructure for the agentic commerce economy.

And the math to solve it correctly doesn't exist yet.

---

## What New Math Looks Like

Solving RAG attribution properly requires relaxing Shapley's axioms and building new foundations that account for:

- **Positional effects**: Attribution must be sensitive to where content appears in context
- **Stochastic variation**: LLM responses vary even with identical inputs; attribution must handle this uncertainty
- **Interaction effects**: Context chunks may have synergistic or antagonistic relationships that simple marginal contribution can't capture

This is active research. The solution might involve:

- Modified coalition game formulations that incorporate ordering
- Information-theoretic approaches that measure actual influence on token generation
- Causal inference methods that isolate the effect of specific context chunks

We don't have the answer yet. But we know the current approach is wrong, and we know what properties a correct solution must have.

---

## The Broader Point

RAG attribution is one example. There are others.

The math underlying AI alignment is incomplete. The theory of emergent capabilities is basically nonexistent. Our understanding of why in-context learning works is hand-wavy at best. Interpretability is still more art than science.

These aren't problems you solve with more compute. They're problems you solve with better math.

The next decade of AI progress will be defined by theoretical breakthroughs as much as engineering ones. The companies and researchers who develop new mathematical foundations will have durable advantages that can't be bought with GPU clusters.

Better math builds better AI. It's that simple.

---

*Working on problems where the math doesn't exist yet? [We should talk →](mailto:build@quicksilverlab.ai)*
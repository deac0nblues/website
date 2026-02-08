---
slug: absence-of-ai-games
title: What the Absence of AI Games Tells Us About AI
date: 2025-02-05
author: Ben Letson
excerpt: We have capable AI and a $200B gaming industry—so where are the AI games? The answer tells us where AI still isn't ready for prime time.
category: RESEARCH
---

## Why This Matters for Your Business

I like video games. Always have. And I've been waiting for AI to transform them.

The promise is obvious. NPCs that actually respond to what you do. Worlds that adapt to your choices. Stories that branch in ways no writer could anticipate. Conversations with characters that feel real. Games that are different every time you play.

We have the most capable AI systems ever built. We have a $200 billion gaming industry hungry for the next big thing. We have players who would pay for genuinely novel experiences.

So where are the AI games?

The answer tells us something important—not just about gaming, but about where AI still isn't ready for prime time.

---

## Announcements Everywhere, Nothing Shipped

The press releases have been flowing for years.

Nvidia demos AI NPCs with realistic conversation and emotional expression. Ubisoft announces "NEO NPCs" that will revolutionize player interaction. Inworld AI raises $50 million to power the next generation of game characters. Microsoft, Sony, and every major publisher talks about AI integration on earnings calls.

Meanwhile, on my Steam library: nothing.

The most successful AI game is still AI Dungeon, a text adventure that had its moment in 2020 and has been fading ever since. Character.AI has millions of users, but it's not really a game—it's a chatbot with personas. There are indie experiments on itch.io. A few Unreal Engine demos. Some impressive tech showcases that never became products.

No AAA title with meaningful AI integration. No breakout indie hit built on AI mechanics. No "killer app" that proves the concept at scale.

This isn't because game developers are slow or unimaginative. It's because games are AI's hardest test—and AI is failing.

---

## Games Expose Where AI Breaks

Games are brutal on AI systems in the same ways that enterprise applications are. Every weakness gets exposed immediately, because players are trying to have fun—and nothing kills fun faster than breaking immersion.

### Latency

When you talk to an NPC, you expect a response in milliseconds. A two-second pause while the LLM generates a reply breaks immersion completely. You're not having a conversation anymore; you're waiting for a loading screen.

Current LLMs are too slow for real-time interaction. Even the fastest APIs introduce noticeable delay. Local models are faster but less capable. This is a fundamental problem, and it shows up everywhere AI needs to be responsive—customer service, live collaboration, real-time decision support.

### Cost

A single API call to a frontier model costs a fraction of a cent. That sounds cheap until you do the math for a game session.

If every NPC interaction is an API call, and players interact with NPCs hundreds of times per hour, and you have millions of players—you're looking at costs that dwarf the game's revenue. The unit economics don't work.

This same problem hits every AI deployment at scale. Fine for demos. Brutal for production.

### Unpredictability

Players will do things you never anticipated. They'll try to seduce the shopkeeper, interrogate the horses, and convince the villain to join their party. They'll find the weird edge cases within minutes.

LLMs generate plausible-sounding responses to almost anything. That's their superpower and their fatal flaw. An NPC that can be jailbroken into saying something inappropriate, breaking character, or revealing information it shouldn't know isn't a feature—it's a liability.

Every enterprise deployment of AI faces this same challenge: how do you get the benefits of generative AI while maintaining control? Games just make the failure modes more visible.

### Context and Memory

You walk into a tavern. You have a conversation with the bartender. You leave, do a quest, come back three hours later. Does the bartender remember you?

Current LLMs have no persistent memory. Every conversation starts fresh unless you explicitly manage context—stuffing previous interactions into the prompt, maintaining state externally, building infrastructure the LLM doesn't provide natively.

In games, this breaks immersion. In enterprise, it breaks continuity. Either way, it's a gap between what AI promises and what it delivers.

---

## The World Model Problem

Here's the deeper issue: LLMs don't understand the world. They predict text.

An NPC powered by an LLM doesn't know it's standing in a tavern. It doesn't know the player is holding a sword. It doesn't know that the door is locked, or that there's a dragon outside, or that the quest giver was murdered an hour ago.

It knows what words typically follow other words. That's it.

You can work around this by stuffing world state into the prompt: "You are a bartender. The player is a warrior. They completed the dragon quest. The tavern is in the kingdom of Eldoria." But this is brittle, expensive, and doesn't scale. As game state gets complex, the context window overflows and the LLM starts forgetting or hallucinating.

What games actually need is a **world model**—an AI system that maintains a coherent representation of the environment, tracks cause and effect, understands spatial relationships, and reasons about what's possible.

This is an active research frontier. Yann LeCun has been beating this drum for years. Video models like Sora implicitly learn some physics. Robotics research is pushing on embodied reasoning. But we're nowhere close to solving it.

The absence of great AI games is evidence of the absence of great world models. And world models matter far beyond gaming.

---

## The Problems Are Being Worked On

The gaming industry is, somewhat accidentally, funding the R&D to solve these problems.

Latency is driving investment in faster inference, better model architectures, and on-device AI. Cost pressure is pushing efficient fine-tuning, smaller models that punch above their weight, and creative caching strategies. The control problem is advancing work on guardrails, constitutional AI, and steerable generation.

Nvidia isn't building AI NPC demos for charity. They're building them because games are a massive market, and whoever solves these problems will capture enormous value.

The progress will come. And when it does, games won't be the only beneficiary.

---

## Corporate Simulation Is Next

Here's where this gets interesting for business.

The same capabilities that would make AI games great—persistent world models, multi-agent interaction, real-time adaptation, coherent long-term reasoning—are exactly what you need for serious simulation.

Think about how corporations make strategic decisions today. Spreadsheets. Slide decks. Maybe a scenario planning exercise where executives roleplay different futures. If they're sophisticated, they hire consultants to run war games.

Now imagine those war games as actual games.

An AI that can play your competitor. An AI that simulates your customers' reactions to a price change. An AI that models regulatory response to your product launch. Multiple AI agents interacting in a simulated market, stress-testing your strategy before you commit real resources.

This isn't science fiction. It's game theory—the discipline that RAND Corporation researchers pioneered in the 1950s and 60s, the mathematical foundation for nuclear deterrence strategy, auction design, and competitive analysis.

The difference is that the "games" were always abstractions. Simplified models on paper. Now we're approaching the ability to make them rich, interactive, and adaptive.

When the gaming industry solves real-time AI interaction, persistent world state, and multi-agent coordination—and they will, because billions of dollars are pushing in that direction—the tools will be immediately applicable to corporate strategy.

The companies thinking about this now will be ready. The companies that wait will be playing catch-up.

---

## The Takeaway

The absence of great AI video games isn't a gaming problem. It's an AI problem.

Games expose the gaps: latency, cost, unpredictability, context, world models. These same gaps show up in every serious AI deployment. Games just make them impossible to ignore.

The good news: massive investment is flowing into solving these problems. The gaming industry is a $200 billion forcing function for AI capability research.

The strategic question for your business: when these problems get solved, how will you use the infrastructure?

---

*Thinking about AI simulation for strategic planning? [Let's talk →](mailto:build@quicksilverlab.ai)*
---
title: "Paper #01: Attention Is All You Need"
description: "The paper that replaced RNNs with self-attention. Here's what actually matters about it and what took me a while to click."
date: 2026-03-07
tags: ["papers", "llm", "transformers"]
draft: true
---

*This is part of my series reading through 30 foundational LLM papers in order. I'm a Computer Vision engineer expanding into LLMs — these are honest notes, not expert summaries.*

---

## The problem it was solving

Before this paper, sequence models (like RNNs and LSTMs) processed tokens one at a time, in order. That meant they struggled with long-range dependencies — connecting a word at position 1 to something relevant at position 50 — and they couldn't parallelise training efficiently.

## The core idea

Replace the sequential processing entirely with self-attention: a mechanism where every token in a sequence looks at every other token simultaneously and decides how much to "attend" to each one. Stack enough of these attention layers with some feed-forward networks and you have a Transformer.

## The one thing that clicked

The query-key-value framing. A token issues a *query* ("what am I looking for?"), every other token offers a *key* ("here's what I contain"), and attention weights are computed by how well each query matches each key. Then the values — the actual content — are mixed according to those weights. Once I saw it as a soft, differentiable lookup table, the math stopped feeling arbitrary.

## What I'm still fuzzy on

Why multi-head attention specifically helps. I understand that different heads can learn different types of relationships (syntactic vs semantic, short-range vs long-range), but I don't have a strong intuition yet for why 8 or 16 heads is the right number rather than 4 or 32.

## How it connects

In computer vision, attention was already being explored (non-local means, spatial attention in detection models), but it was always auxiliary to convolutions. This paper shows attention alone is sufficient — which is exactly the logic that later produced ViT (Vision Transformer). So this is directly upstream of where CV and LLMs are converging.

## A number worth remembering

The original Transformer achieves a new state-of-the-art on English-to-German translation with a BLEU score of 28.4, trained in 3.5 days on 8 GPUs. By today's standards that's tiny, which makes the architectural impact even more remarkable.

---

*Next up: [The Illustrated Transformer](https://jalammar.github.io/illustrated-transformer/) — a visual walkthrough of exactly what I just read. Highly recommend reading them together.*

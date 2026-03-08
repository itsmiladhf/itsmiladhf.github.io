---
title: "Paper #01: Attention Is All You Need"
description: "I read the paper that started the transformer era. Here's what actually clicked, what didn't, and why multi-head attention felt surprisingly familiar."
date: 2026-03-08
tags: ["papers", "llm", "transformers"]
draft: false
---

*These are honest notes and definitely not expert summaries. If you're also trying to get into these stuff I hope this helps.*

---

I came into this paper expecting to understand nothing and to feel foreign. I am more confused now haha but it definitely had some aha moments.

## The problem it was solving

Before Transformers, sequence models like RNNs and LSTMs processed tokens one at a time, in order. At time t, they could only look at time t-1. That means they struggle to connect things far apart in a sequence, and they can't parallelise training across GPUs as each step depends on the previous one. The Transformer throws out recurrence entirely and replaces it with attention, which lets every token look at every other token simultaneously. No sequential dependency. Fully parallelisable.

## The core idea

The building block is scaled dot-product attention. Each token issues a query ("what am I looking for?"), every other token offers a key ("here's what I contain"), and the model computes weights based on how well each query matches each key. The output is a weighted blend of the values, so the representation of a word gets mixed with the representations of whatever it attends to most.

The scaling factor exists because dot products blow up for large dimensions and without it, gradients vanish and training breaks. Simple fix, important detail.

## The thing that actually clicked

Multi-head attention. I was foggy on it until I mapped it to something I already knew: feature maps in a CNN.

In a CNN layer, each filter learns to detect something different such as edges, textures, curves. They all operate on the same input but extract different things simultaneously. Multi-head attention is the same idea. Each head learns to attend to a different type of relationship, one might focus on syntax, another on meaning, another on position. They all run in parallel on the same sequence, then their outputs get concatenated and projected back down.

The other thing that clicked: masking in the decoder. During training you feed the decoder the full correct output sequence at once for efficiency. But at inference time it only has what it's generated so far. Masking enforces the same constraint during training, each position can only attend to positions before it. In short: masking makes training behave like inference.

## What I'm still fuzzy on

Quite a bit, honestly. Section 3.1 still isn't fully clear. Some of the training details like label smoothing and beam search I didn't dig into. And I don't have a strong intuition yet for why 8 heads specifically, I understand the concept, the exact number still feels arbitrary to me.


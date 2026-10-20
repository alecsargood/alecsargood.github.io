---
layout: page
title: MARTINI
description: Learning to mix surrogate rewards for inference-time steering of generative models.
importance: 0
img: assets/img/publication_preview/martini-figure1.png
category: Official Implementation
---

**MARTINI** (Mixing And Reward Tilting for INference-time Improvement) learns to combine cheap surrogate rewards using a small set of oracle rankings or numerical rewards. The learned composition steers a pretrained generative model without querying the oracle at inference time.

{% include figure.liquid path="assets/img/publication_preview/martini-figure1.png" title="MARTINI overview (Figure 1)" alt="Figure 1: MARTINI combines surrogate rewards to steer generation toward the oracle reward tilt." class="img-fluid rounded z-depth-1" zoomable=true %}

<div class="caption">
  Figure 1 from <em>Steered Not Stirred</em>: a learned surrogate composition guides generation toward the desired reward-tilted distribution.
</div>

The paper studies language generation, ImageNet alignment, and protein-ligand cofolding, with the learned reward composition used in existing inference-time steering methods.

### Links

- [Paper (arXiv)](https://arxiv.org/abs/2610.25502)
- [Project Page](https://alecsargood.github.io/martini/)

---
layout: page
title: Reaction-Diffusion Solver
description: Numerical solvers for stiff PDE systems in MATLAB and Julia.
importance: 4
img: assets/img/publication_preview/tau0bif.png
category: Official Implementation
---

**Reaction-Diffusion Solver** provides numerical tools for stiff reaction-diffusion systems in scientific computing and mathematical biology.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/publication_preview/tau0bif.png" title="Turing Instability Visualization" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Bifurcation analysis and Turing pattern formation in a stiff reaction-diffusion system.
</div>

---

### Overview

This project implements solvers for PDE systems exhibiting stiffness. Written in Julia, the solver evaluates parameter spaces to identify regions of Turing instability and pattern formation, circumventing the step-size limitations of standard explicit methods.

### Highlights

- **Type:** Official implementation for stiff reaction-diffusion PDE analysis
- **Focus:** Numerical stability and steady-state bifurcation analysis
- **Stack:** MATLAB and **Julia** (DifferentialEquations.jl)

### Links

- [Paper (PubMed)](https://pubmed.ncbi.nlm.nih.gov/35934760/)
- [Paper (arXiv)](https://arxiv.org/abs/2205.05410)
- [Code](https://github.com/alecsargood/Dissertation_Julia)
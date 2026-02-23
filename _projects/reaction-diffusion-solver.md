---
layout: page
title: Reaction-Diffusion Solver
description: Numerical solvers for stiff PDE systems in MATLAB and Julia.
importance: 4
category: Tools
img: assets/img/tau0bif.png
---

Numerical solvers designed for stiff **reaction-diffusion systems**, developed for scientific computing and mathematical biology.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/tau0bif.png" title="Turing Instability Visualization" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Bifurcation analysis and Turing pattern formation in a stiff reaction-diffusion system.
</div>

---

### Technical Highlights

- **Languages:** MATLAB and **Julia** (DifferentialEquations.jl)
- **Code:** [alecsargood/Dissertation_Julia](https://github.com/alecsargood/Dissertation_Julia)
- **Specialization:** Numerical stability for stiff partial differential equations (PDEs) and computation of steady-state bifurcations.

### Overview

This project implements solvers for PDE systems exhibiting stiffness. Written in Julia, the solver evaluates parameter spaces to identify regions of Turing instability and pattern formation, circumventing the step-size limitations of standard explicit methods.
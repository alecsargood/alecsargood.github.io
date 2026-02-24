---
layout: page
title: GenTract
description: Generative global tractography for diffusion MRI.
importance: 1
img: assets/img/publication_preview/gentract.gif
category: Official Implementation
---

**GenTract** is the first generative framework for global tractography.

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/publication_preview/gentract.gif" title="GenTract global tractography visualization" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    GenTract leverages generative modeling to produce dense, anatomically consistent streamlines from dMRI data.
</div>

---

### Overview

GenTract reformulates traditional tractography as a generative task, using a probabilistic approach to white matter reconstruction. The framework synthesizes dense tractograms while maintaining computational scalability.

### Highlights

- **Status:** Accepted at **CVPR 2026**
- **Contribution:** Reframes global tractography as a generative modeling problem
- **Focus:** Scalable probabilistic streamline generation

### Links

- [Paper (arXiv)](https://arxiv.org/abs/2511.13183)
- [Code](https://github.com/alecsargood/GenTract)

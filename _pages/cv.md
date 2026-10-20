---
layout: page
permalink: /cv/
title: CV
nav: true
nav_order: 3
description: My curriculum vitae.
---

<div class="text-center mb-3">
  <p class="small text-muted mb-2">To use the links in my CV, download the PDF and open it in a PDF viewer.</p>
  <a href="{{ '/assets/pdf/cv.pdf' | relative_url }}?v={{ site.time | date: '%s' }}" download="Alec-Sargood-CV.pdf" target="_blank" rel="noopener noreferrer" class="btn btn-sm z-depth-0">
    <i class="fa-solid fa-file-pdf"></i> Download CV (PDF)
  </a>
</div>

<iframe
  src="{{ '/assets/pdf/cv.pdf' | relative_url }}?v={{ site.time | date: '%s' }}"
  title="Alec Sargood — CV"
  width="100%"
  style="height: 90vh; min-height: 700px; border: 1px solid var(--global-divider-color); border-radius: 8px;"
  loading="lazy">
  <p>Your browser can&rsquo;t display embedded PDFs.
  <a href="{{ '/assets/pdf/cv.pdf' | relative_url }}">Download the CV (PDF)</a>.</p>
</iframe>

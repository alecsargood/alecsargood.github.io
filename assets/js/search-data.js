// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Selected publications and preprints.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Research and open-source projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Education, research experience, publications, and technical skills.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-news",
          title: "news",
          description: "Recent milestones, publications, and research updates.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-thrilled-to-share-that-our-paper-gentract-generative-global-tractography-has-been-accepted-at-cvpr-2026-huge-thanks-to-l-puglisi-e-thompson-m-musolesi-and-d-c-alexander",
          title: 'Thrilled to share that our paper GenTract: Generative Global Tractography has been accepted...',
          description: "",
          section: "News",},{id: "news-excited-to-share-that-cocolit-controlnet-conditioned-latent-image-translation-for-mri-to-amyloid-pet-synthesis-has-been-accepted-at-aaai-2026-this-is-joint-first-author-work-with-l-puglisi",
          title: 'Excited to share that CoCoLIT: ControlNet-Conditioned Latent Image Translation for MRI to Amyloid...',
          description: "",
          section: "News",},{id: "projects-cocolit-framework",
          title: 'CoCoLIT Framework',
          description: "ControlNet-conditioned latent diffusion for MRI-to-PET synthesis.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cocolit/";
            },},{id: "projects-consistency-models",
          title: 'Consistency Models',
          description: "Open-source implementation of scalable consistency-model training.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/consistency-models/";
            },},{id: "projects-gentract",
          title: 'GenTract',
          description: "Generative global tractography for diffusion MRI.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gentract/";
            },},{id: "projects-reaction-diffusion-solver",
          title: 'Reaction-Diffusion Solver',
          description: "Numerical solvers for stiff PDE systems in MATLAB and Julia.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/reaction-diffusion-solver/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%6C%65%63.%73%61%72%67%6F%6F%64.%32%33@%75%63%6C.%61%63.%75%6B", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/alecsargood", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/alec-sargood-7932b7124", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=9kuYeWcAAAAJ", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

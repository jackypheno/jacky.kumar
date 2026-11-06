/* Jacky Kumar personal website data. Edit this file to update profile content. */
window.SITE = {
  profile: {
    name: "Jacky Kumar",
    role: "Research Scientist",
    affiliations: ["Université de Montréal", "Department of Physics"],
    tagline: "Particle physicist and AI/ML researcher working at the intersection of effective field theory, scientific computing, and AI for science.",
    location: "Montréal, Québec, Canada",
    email: "",
    links: {
      github: "https://github.com/jackypheno",
      scholar: null,
      openreview: null,
      dblp: null,
      linkedin: null,
      inspire: null,
      cv: null
    }
  },

  interests: [
    "Particle Physics Phenomenology",
    "SMEFT & WET",
    "AI for Science",
    "Agentic AI",
    "Reinforcement Learning",
    "Retrieval-Augmented Generation",
    "Scientific Computing"
  ],

  bio: [
    "I am a <strong>particle physicist and AI/ML researcher</strong> at the Université de Montréal. My research focuses on using effective field theories to connect precision measurements with possible physics beyond the Standard Model, together with computational and AI methods for scientific discovery.",
    "A major theme of my work is building <strong>interpretable computational tools</strong> for particle-physics phenomenology. I have contributed to the open-source ecosystem around <strong>wilson</strong>, <strong>WCxf</strong>, <strong>smelli</strong>, and <strong>flavio</strong>, which support Wilson-coefficient running, matching, exchange, likelihood analyses, and precision observables.",
    "More recently, I have been developing AI-for-science methods for phenomenology, including <strong>reinforcement learning</strong> for exploring EFT parameter spaces, <strong>retrieval-augmented generation</strong> for scientific knowledge access, and agentic systems that can combine literature retrieval with physics software and numerical tools."
  ],

  education: [
    { degree: "Research training in theoretical particle physics", org: "Particle-physics phenomenology and effective field theory", period: "10+ years", note: "Precision observables, SMEFT/WET, scientific data interpretation, and computational physics." }
  ],

  experience: [
    { role: "Research Scientist", org: "Département de physique, Université de Montréal, Canada", period: "Jan 2026 – Present", note: "Particle-physics phenomenology, AI for science, scientific computing." },
    { role: "Director’s Fellow", org: "Theoretical Division (T-2), Los Alamos National Laboratory, USA", period: "Nov 2022 – Apr 2025", note: "Effective field theory, precision phenomenology, and computational research." },
    { role: "Alexander von Humboldt Fellow", org: "Institute for Advanced Study, Technical University Munich, Germany", period: "Feb 2021 – Nov 2022", note: "Particle-physics phenomenology and SMEFT." },
    { role: "Postdoctoral Researcher", org: "Département de physique, Université de Montréal, Canada", period: "Sep 2018 – Feb 2021", note: "Flavor physics and effective field theory." }
  ],

  service: [
    "Open-source scientific software development for EFT and flavor phenomenology.",
    "Research supervision in machine learning, AI, and particle-physics phenomenology.",
    "International lectures and conference presentations on SMEFT, flavor physics, and AI for science."
  ],

  news: [
    { date: "2026-10", html: "Released work on <strong>retrieval-augmented generation for particle physics</strong> — <a href='https://arxiv.org/abs/2610.00891'>arXiv:2610.00891</a>." },
    { date: "2026-09", html: "Released work using <strong>reinforcement learning for EFT discovery</strong> — <a href='https://arxiv.org/abs/2609.10382'>arXiv:2609.10382</a>." },
    { date: "2026", html: "<strong>SMEFT ATLAS: The Landscape Beyond the Standard Model</strong> published in <em>Physics Reports</em>." },
    { date: "2026-01", html: "Joined the <strong>Université de Montréal</strong> as a Research Scientist." }
  ],

  posts: [],

  projects: [
    {
      id: "rag-particle-physics", thumb: "network", nutshell: "A retrieval-augmented generation framework designed to connect language models with domain-specific particle-physics literature and scientific context.", diagram: null,
      title: "RAG for Particle Physics", subtitle: "Retrieval-augmented generation for scientific knowledge access", category: "Research", featured: true, accent: "violet", year: 2026,
      status: { label: "arXiv · 2610.00891", kind: "published" }, tags: ["RAG", "AI for Science", "Particle Physics"], authors: "Jacky Kumar et al.", venue: "arXiv:2610.00891",
      teaser: "Retrieval-augmented generation for particle physics, combining scientific literature retrieval with language-model reasoning.",
      overview: "This project studies how retrieval-augmented generation can make AI systems more useful and reliable for particle-physics research by grounding responses in domain-specific scientific literature and context.",
      motivation: "Particle-physics questions often require specialized notation, conventions, software knowledge, and literature context that are poorly represented by generic language-model memory alone.",
      methods: ["Domain-specific document retrieval and ranking.", "Scientific context construction for language models.", "Evaluation on particle-physics questions and research workflows."],
      results: ["Demonstrates a practical RAG workflow tailored to particle-physics knowledge."], figures: [], poster: null,
      links: { arxiv: "https://arxiv.org/abs/2610.00891" }, futureWork: "Extend the RAG layer into an agentic system that can retrieve literature, call physics software, analyze results, and synthesize conclusions."
    },
    {
      id: "rl-eft", thumb: "steer", nutshell: "Reinforcement learning is used to explore effective-field-theory parameter spaces and search for non-trivial combinations of Wilson coefficients consistent with phenomenological constraints.", diagram: null,
      title: "Reinforcement Learning for EFT Discovery", subtitle: "Learning to explore Wilson-coefficient parameter spaces", category: "Research", featured: true, accent: "rose", year: 2026,
      status: { label: "arXiv · 2609.10382", kind: "published" }, tags: ["Reinforcement Learning", "SMEFT", "AI for Science"], authors: "Jacky Kumar et al.", venue: "arXiv:2609.10382",
      teaser: "An RL-based approach to discovering interesting regions and operator combinations in effective-field-theory parameter space.",
      overview: "The project treats EFT exploration as a sequential decision problem in which an agent proposes Wilson-coefficient structures and learns from phenomenological objectives and constraints.",
      motivation: "High-dimensional EFT spaces contain cancellations, flat directions, and non-trivial multi-operator solutions that are difficult to uncover with simple scans or intuition alone.",
      methods: ["Sequential operator selection with reinforcement learning.", "Physics-based rewards derived from observables and likelihood information.", "Search for multi-operator solutions and non-trivial cancellations."],
      results: ["Shows how reinforcement learning can complement conventional EFT scans and optimization."], figures: [], poster: null,
      links: { arxiv: "https://arxiv.org/abs/2609.10382" }, futureWork: "Integrate RL search with agentic scientific workflows and controlled benchmark problems with known ground truth."
    },
    {
      id: "wilson", thumb: "circuit", nutshell: "A Python package for renormalization-group running and matching of Wilson coefficients above and below the electroweak scale.", diagram: null,
      title: "wilson", subtitle: "Running and matching beyond the Standard Model", category: "Research", featured: true, accent: "sky", year: 2018,
      status: { label: "Open source", kind: "published" }, tags: ["SMEFT", "WET", "Scientific Software"], authors: "Jason Aebischer, Jacky Kumar, David M. Straub", venue: "Computer Physics Communications / arXiv:1804.05033",
      teaser: "Open-source Python software for running and matching Wilson coefficients across SMEFT and WET.",
      overview: "wilson automates renormalization-group evolution and matching of Wilson coefficients in effective field theories, enabling consistent calculations across different energy scales.",
      motivation: "Precision phenomenology requires repeated and convention-consistent running and matching calculations across EFTs and scales.",
      methods: ["SMEFT renormalization-group evolution.", "SMEFT-to-WET matching.", "WET running and WCxf interoperability."],
      results: ["Widely used open-source infrastructure for EFT phenomenology."], figures: [], poster: null,
      links: { arxiv: "https://arxiv.org/abs/1804.05033", code: "https://github.com/wilson-eft/wilson" }, futureWork: "Continue extending interoperable EFT tooling and integration with automated phenomenology agents."
    },
    {
      id: "wcxf", thumb: "toggle", nutshell: "WCxf is a common exchange format and ecosystem for representing Wilson coefficients across effective field theories, bases, and software tools.", diagram: null,
      title: "WCxf", subtitle: "Wilson coefficient exchange format", category: "Research", featured: true, accent: "amber", year: 2018,
      status: { label: "Open source", kind: "published" }, tags: ["EFT", "Interoperability", "Scientific Software"], authors: "WCxf collaboration", venue: "Open-source EFT infrastructure",
      teaser: "A standardized exchange format that allows independent EFT tools to communicate consistently.",
      overview: "WCxf defines machine-readable conventions for effective field theories, operator bases, and Wilson-coefficient values so that different codes can exchange information without ad hoc translations.",
      motivation: "EFT calculations are distributed across many specialized packages; interoperability requires consistent naming, basis definitions, normalization conventions, and data exchange.",
      methods: ["Standardized EFT and basis definitions.", "Machine-readable Wilson-coefficient files.", "Interoperability between phenomenology tools."],
      results: ["Provides a shared interface used by multiple EFT software packages."], figures: [], poster: null,
      links: { code: "https://github.com/wcxf" }, futureWork: "Use WCxf-style structured representations as a foundation for robust AI tool calling in EFT agents."
    },
    {
      id: "smelli", thumb: "graph", nutshell: "smelli provides global likelihoods for SMEFT and WET analyses by combining many precision observables and constraints in a consistent framework.", diagram: null,
      title: "smelli", subtitle: "Global likelihoods for precision phenomenology", category: "Research", featured: true, accent: "orange", year: 2019,
      status: { label: "Open source", kind: "published" }, tags: ["Global Fits", "SMEFT", "Flavor Physics"], authors: "smelli collaboration", venue: "Open-source phenomenology software",
      teaser: "Global SMEFT/WET likelihood analysis built on interoperable precision-physics tools.",
      overview: "smelli combines experimental measurements, Standard Model predictions, and EFT effects into global likelihood analyses for new-physics interpretations.",
      motivation: "New-physics hypotheses must be tested against many correlated measurements rather than a single observable in isolation.",
      methods: ["Global likelihood construction.", "Integration with flavio, wilson, and WCxf.", "SMEFT and WET parameter inference."],
      results: ["Provides reusable global-fit infrastructure for precision phenomenology."], figures: [], poster: null,
      links: { code: "https://github.com/smelli" }, futureWork: "Expose likelihood and fit capabilities as reliable tools inside an agentic phenomenology system."
    }
  ],

  publications: [
    { title: "RAG for Particle Physics", authors: "Jacky Kumar et al.", venue: "arXiv:2610.00891", year: 2026, status: { label: "Preprint", kind: "published" }, projectId: "rag-particle-physics", links: { arxiv: "https://arxiv.org/abs/2610.00891" } },
    { title: "Reinforcement Learning for EFT Discovery", authors: "Jacky Kumar et al.", venue: "arXiv:2609.10382", year: 2026, status: { label: "Preprint", kind: "published" }, projectId: "rl-eft", links: { arxiv: "https://arxiv.org/abs/2609.10382" } },
    { title: "SMEFT ATLAS: The Landscape Beyond the Standard Model", authors: "Jason Aebischer, Andrzej J. Buras, Jacky Kumar", venue: "Physics Reports (2026)", year: 2026, status: { label: "Published", kind: "published" }, projectId: null, links: { arxiv: "https://arxiv.org/abs/2507.05926", doi: "https://doi.org/10.1016/j.physrep.2026.07.003" } },
    { title: "Wilson: a Python package for the running and matching of Wilson coefficients above and below the electroweak scale", authors: "Jason Aebischer, Jacky Kumar, David M. Straub", venue: "Computer Physics Communications", year: 2018, status: { label: "Published", kind: "published" }, projectId: "wilson", links: { arxiv: "https://arxiv.org/abs/1804.05033", code: "https://github.com/wilson-eft/wilson" } }
  ]
};

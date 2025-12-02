// Auto-generated library index

export const libraryEntries = [
  {
    slug: 'Chemoinformatics',
    category: 'Chemoinformatics',
    filePath: 'Chemoinformatics/Chemoinformatics.mdx',
    meta: {
    "title": "Chemoinformatics Tools",
    "summary": "Small utilities and libraries for cheminformatics tasks.",
    "tags": [
        "cheminformatics",
        "tools"
    ],
    "status": "draft",
    "category": "Chemoinformatics"
},
    content: `
- AccFG — Functional group extraction
  - Repo: https://github.com/xuanliugit/AccFG
`
  },
  {
    slug: 'Electronics',
    category: 'Electronics',
    filePath: 'Electronics/Electronics.mdx',
    meta: {
    "title": "Circuit Simulation Tools",
    "summary": "Quick references to circuit simulation tools and packages.",
    "tags": [
        "circuits",
        "simulation",
        "tools",
        "electronics"
    ],
    "status": "draft",
    "category": "Electronics"
},
    content: `
This page provides quick references to various circuit simulation tools and packages.

## LTspice simulator
- Link: https://www.analog.com/en/resources/design-tools-and-calculators/ltspice-simulator.html
- Brief: For simulating the circuit component

## Falstad (Circuit Simulator)
- Link: https://www.falstad.com/circuit/
- Brief: Browser-based interactive circuit simulator

## QUCS
- Link: https://qucs.sourceforge.net/
- Brief: Quite Universal Circuit Simulator

## ngspice
- Link: https://ngspice.sourceforge.io/
- Brief: Open-source SPICE simulation engine

## KiCad SPICE
- Link: https://www.kicad.org/discover/spice/
- Brief: SPICE simulation integrated in KiCad (uses ngspice)
`
  },
  {
    slug: 'Hardware',
    category: 'Hardware',
    filePath: 'Hardware/Hardware.mdx',
    meta: {
    "title": "Hardware",
    "summary": "Notes on hardware basics, embedded AI, and repair/supply chain.",
    "tags": [
        "hardware",
        "embedded",
        "sensors",
        "electronics"
    ],
    "status": "draft",
    "category": "Hardware"
},
    content: `
### Hardware basics
- Microcontrollers (Arduino, STM32), sensors (temperature, pressure, flow)
- Communication buses: I²C, SPI, UART
- Purpose: prototype lab automation, environmental monitoring, instrument interfaces

### Embedded AI
- Small AI models: TinyML, EdgeTPU, Raspberry Pi AI Kit
- Purpose: deploy AI on-device for smart sensing and data collection

### Electronics repair and supply chain
- Skills: BGA soldering, PCB rework, sourcing components, cost structure
- Purpose: understand sustainability — how things are built, reused, or wasted

### Learning resources
- Basic electronics and embedded programming
  - MITx 6.002 Circuits and Electronics
  - Coursera: Embedded Systems
`
  },
  {
    slug: 'Maths',
    category: 'Maths',
    filePath: 'Maths/Maths.mdx',
    meta: {
    "title": "Math LaTeX Resources",
    "tags": [
        "latex",
        "math"
    ],
    "summary": "A short list of LaTeX resources for math.",
    "status": "draft",
    "category": "Maths"
},
    content: `
## LaTeX Wikibooks
- Link: https://en.wikibooks.org/wiki/LaTeX
- Brief: A good reference for learning LaTeX
`
  },
  {
    slug: 'Structural_biology_tools',
    category: 'Structural_biology_tools',
    filePath: 'Structural_biology_tools/Structural_biology_tools.mdx',
    meta: {
    "title": "Structural Biology Tools",
    "summary": "Handy links and utilities for structural biology workflows.",
    "tags": [
        "structural-biology",
        "tools"
    ],
    "status": "draft",
    "category": "Structural_biology_tools"
},
    content: `
- ChimeraX recipes — example scripts and workflows
  - https://rbvi.github.io/chimerax-recipes/
`
  },
  {
    slug: 'symmetry',
    category: 'Symmetry',
    filePath: 'Symmetry/symmetry.mdx',
    meta: {
    "title": "Symmetry Tools",
    "summary": "Libraries to analyze space groups and confirm structural symmetry.",
    "tags": [
        "symmetry",
        "materials",
        "tools"
    ],
    "status": "draft",
    "category": "Symmetry"
},
    content: `
| Tool/Library | Description | How it confirms correctness |
| --- | --- | --- |
| spglib | C library (with Python wrappers) that determines space groups and crystallographic properties from atomic coordinates and cell vectors. | Checks relaxed DFT coordinates against high‑symmetry candidates within a tolerance (e.g., SYMPREC). |
| ASE (Atomic Simulation Environment) | Python library that reads VASP, QE, and other outputs; can call spglib automatically. | Lets you quickly compare a final DFT output to the expected structure in a few lines. |
| pymatgen | Materials library built on spglib/ASE principles. | Provides SpacegroupAnalyzer to compute symmetry and transform to ideal high‑symmetry cells for definitive checks. |
`
  },
  {
    slug: 'Tools_and_pages',
    category: 'Tools_and_pages',
    filePath: 'Tools_and_pages/Tools_and_pages.mdx',
    meta: {
    "title": "Tools and Pages",
    "summary": "Curated lists for data visualization and embedded AI.",
    "tags": [
        "tools",
        "lists"
    ],
    "status": "draft",
    "category": "Tools_and_pages"
},
    content: `
| Topic | Link | Notes |
| --- | --- | --- |
| Data visualization tools | https://github.com/hal9ai/awesome-dataviz | Curated list of visualization tools |
| Embedded AI tools | https://github.com/crespum/edge-ai | Curated list of embedded AI tools |
`
  },
  {
    slug: 'Reaction',
    category: 'reaction',
    filePath: 'reaction/Reaction.mdx',
    meta: {
    "title": "Automated Reaction Exploration",
    "tags": [
        "reactions",
        "tools",
        "overview"
    ],
    "summary": "A compact, single page with links and briefs for reaction exploration and mechanism tools.",
    "status": "draft",
    "category": "reaction"
},
    content: `
This page keeps everything in one place. I list tools I’m tracking with a short description and a link for quick reference.

## KinBot
- Link: https://github.com/zadorlab/KinBot
- Brief: Automated reaction exploration and transition state searches.
- Logo:

  ![KinBot logo](https://raw.githubusercontent.com/zadorlab/KinBot/master/graphics/kinbot_logo_V2.png)

## Chemoton (SCINE)
- Link: https://github.com/qcscine/chemoton
- Brief: Automated reaction exploration using the SCINE stack.

## AFIR
- Link: https://afir.sci.hokudai.ac.jp/
- Brief: Artificial force‑induced reaction exploration to discover plausible reaction paths.

## autodE
- Link: https://github.com/duartegroup/autodE
- Brief: Automated single‑step reaction profile calculations from SMILES for reactant(s)/product(s).

## YARP
- Link: https://github.com/zhaoqy1996/YARP
- Brief: “Yet Another Reaction Program” for automated single‑step reaction exploration.

## Reaction Mechanism Generator (RMG)
- Link: https://github.com/ReactionMechanismGenerator/RMG-Py
- Brief: Generates chemical reaction mechanisms for reactive systems (e.g., pyrolysis, combustion, atmospheric chemistry).

`
  }
];

export const getAllLibraryEntries = () => {
  return libraryEntries
    .slice()
    .sort((a, b) => {
      const at = (a.meta.title || a.slug || "").toLowerCase();
      const bt = (b.meta.title || b.slug || "").toLowerCase();
      return at.localeCompare(bt);
    });
};

export const getLibraryEntryBySlug = (slug) => {
  return libraryEntries.find((entry) => entry.slug === slug);
};

export const libraryCategories = [
  {
    "slug": "Chemoinformatics",
    "title": "Chemoinformatics"
  },
  {
    "slug": "Electronics",
    "title": "Electronics"
  },
  {
    "slug": "Hardware",
    "title": "Hardware"
  },
  {
    "slug": "Maths",
    "title": "Maths"
  },
  {
    "slug": "Structural_biology_tools",
    "title": "Structural Biology Tools"
  },
  {
    "slug": "Symmetry",
    "title": "Symmetry"
  },
  {
    "slug": "Tools_and_pages",
    "title": "Tools and Pages"
  },
  {
    "slug": "reaction",
    "title": "Reactions"
  }
];

export const getLibraryCategories = () => {
  return libraryCategories;
};

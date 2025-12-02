## Motivation

I’m motivated to learn from failure. I’m exploring how to encode crystallographic boundary conditions as priors and structural restraints in modeling and ML, and to move gradually toward simple closed‑loop workflows.

### Materials at the Convergence Point
I’m drawn to systems where structure guides function and can narrow design spaces with generative models:
- Photosystem II: nature’s best catalyst that also fails and requires continuous repair of the D1/D2 complex; it reminds, that even billions of evolution has failure and repiar mechanism part of robust function.
- Inorganic catalysts and Metal‑Organic Frameworks (MOFs): failures often occurs but this is where data are missing. Sacrificial agents can mitigate structural collapse but are not always cost‑effective, especially under radical conditions and mechanistic insights of the failure is not much considered but that is is where the real bottleneck of the experiments is needed to be studied.


### Crystallographic Data
Crystallographic data provide B‑factors (atomic displacement), occupancies, uncertainties, and symmetry constraints (e.g., Neumann’s principle). I wish to use these information as boundary conditions, together with experimental context, when training or fitting models. I also refer to databases to set structural constraints—symmetry, packing, coordination, and realistic alternates:
 - ICSD (inorganic): https://icsd.fiz-karlsruhe.de/
 - CSD (small molecules/MOF linkers): https://www.ccdc.cam.ac.uk/

### AI as a Potential Design Tool

The combinatorial chemical space is large, and AI can help explore it. A few reference points:

#### Protein examples
In protein modeling, AlphaFold, RoseTTAFold, and ESMFold learn from PDB structures (https://www.rcsb.org/) to capture [protein folding](https://en.wikipedia.org/wiki/Protein_folding). Models implicitly use constraints from sequence, fold classes, and Ramachandran geometry, and can be adapted for generative tasks (e.g., RFdiffusion).

#### Inorganic/MOF considerations
For inorganic and MOF systems, crystallographic information is a primary experimental constraint. For inorganic materials, energy above hull, phonon stability, and thermodynamics provide computational constraints. For MOFs, system size often limits experimental constraints,and mostly MD‑level data is supplemented with experimental structures for training.

#### Example
Test case: [MatterGen](https://www.nature.com/articles/s41586-025-08628-5)

They targeted bulk modulus (50–200 GPa), generated 8192 candidates, filtered for energetic and phonon stability to 75, then selected 4 for synthesis. Only one was synthesized, and it showed positional/compositional disorder relative to the predicted structure (bulk modulus 158 ± 11 GPa vs 222 GPa by DFT). The work is state of the art, yet the gap between computation and experiment remained due to disorder and morphology effects. The key takeaway: dataset structure including uncertanity, disorder, and phase behavior matters, and adding such information as constraints could improve model‑to‑experiment agreement.

#### MOF dataset observations
MOFs adds flexibility and morphological changes (e.g., MIL‑53). In Uni‑MOF’s latent space (https://www.nature.com/articles/s41467-024-46276-x/figures/7), highlights CoreMOF (experimental) and hMOF (hypothetical) separate strongly, suggesting dataset issues rather than model capacity. That points to a need for stronger structural constraints and boundary conditions for inverse design.

The combinatorial space (MOF topologies, linker chemistries, protein sequences) is large. Exploring whether AI can help:
- Predict properties before synthesis
- Optimize candidates for application‑specific targets
- Propose novel structures within crystallographic constraints
- Find patterns linking structure and function

is functional because, screening large space using experiment is prohibitive.

### Research Interests
I wish to work on closed‑loop, failure‑aware , and on constraint‑aware models. In that direction I hope to explore:
- Build small “resources” and information‑extraction agents to organize datasets
- Use crystallographic boundary conditions (symmetry, packing, occupancies/alternates) as constraints in modeling and design
- Work on indexing/refinement for time‑resolved crystallography and multi‑conformer modeling so dynamic data informs mechanism
- Compare charge potentials from DFT with MicroED‑derived data where available

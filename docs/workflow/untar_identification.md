# Identification

In MS-based metabolomics/lipidomics, identification is to accumulate evidence that a measured feature corresponds to a chemical structure (or at least a chemical class). Because multiple compounds can share similar $m/z$, fragments, and chromatographic behavior, identification is typically **probabilistic** and should be reported with a clearly defined **confidence level**.

---

## Identification levels

Before we dive into specific approaches, it’s important to establish a common framework for communicating identification confidence. The widely cited **Schymanski et al. 5-level scheme** (2014) provides a useful structure for this purpose:

![](image/identification/identification_level.jpeg)


This 5-level scheme communicates **how strongly the experimental evidence supports an assignment**. Levels **1–2** aim at **one exact structure** (with different types of support), while Levels **3–5** reflect decreasing structural specificity (from **candidate set**, to **formula**, to **mass of interest**).

### Level 1 — Confirmed structure

**Ideal case:** the proposed structure is **confirmed with an authentic reference standard** measured with the same (or sufficiently comparable) method.

- Requires **MS**, **MS/MS**, and **retention time** matching to the reference standard.
- **Recommended:** add an **orthogonal method** when possible (e.g., different separation mode, ion mobility/CCS, NMR, etc.) to further reduce the risk of false confirmation.

### Level 2 — Probable structure (exact structure proposed without an in-house standard)

Evidence strongly supports **one exact structure**, but confirmation with a measured standard is missing. Two common routes:

**Level 2a — Library (spectrum/library match)**

- Identification is based on an **unambiguous spectrum–structure match** to literature or spectral libraries.
- **Caution:** comparisons across different acquisition conditions can be misleading. Parameters such as **instrument type/resolution, collision energy, ionization mode, and MS level** should be considered, and **decision criteria** (scores/thresholds) should be reported.
- **Desirable add-on evidence:** retention behavior. This is well established via **retention indices in GC–MS**, but is less standardized for LC–MS (so RT evidence is often less portable across labs).

**Level 2b — Diagnostic (diagnostic evidence, no library/standard)**

- Used when **no alternative structure fits the experimental evidence**, even though no standard or library match exists.
- Evidence can include **diagnostic MS/MS fragments/neutral losses**, characteristic **ionization/adduct behavior**, information about the **parent compound**, and the **experimental context** (e.g., expected transformation pathways).

> For practical reporting, it is often sufficient to report **“Level 2: probable structure”**, even if you internally distinguish 2a vs 2b.

### Level 3 — Tentative candidate(s) (multiple plausible structures)

A “grey zone”: evidence supports **possible structure(s)**, but is **insufficient to select one exact structure** (common with **positional isomers** or closely related analogs).

- Typical sources: accurate mass + partial MS/MS consistency; database candidates ranked similarly; in silico fragmentation suggesting several top candidates.
- Because situations vary widely, Schymanski *et al.* recommend avoiding overly generic sublevels; if needed, define **study-specific sublevels** and **present the evidence** for each candidate, especially when the identity is central to conclusions.

### Level 4 — Unequivocal molecular formula

A **molecular formula** can be assigned unambiguously, but there is **not enough evidence** to propose a structure.

- Formula assignment may use **adduct patterns, isotope patterns, and/or fragments**.
- MS/MS may be absent, uninformative, or affected by interferences.
- Still valuable to report: a reliable formula can be **searched, traced, and re-identified** in future studies.

### Level 5 — Exact mass (m/z) of interest (feature only)

A feature is defined by **exact mass (m/z)** (often with RT), but there is **insufficient information to assign even a formula**.

- Can still record and store MS/MS as an **“unknown spectrum”** for future matching.
- Should apply only to a **limited number of masses of specific interest**; labeling every detected feature as Level 5 is usually counterproductive.
- **Use blanks** to ensure the signal is not from sample preparation or the measurement system.

---

## Common identification approaches


| Approach | Typical inputs | Confidence level(s) |
|---|---|---|
| **Exact mass / formula search** | precursor $m/z$, adduct assumptions | **Level 4** (if formula is unequivocal); otherwise **Level 5** |
| **MS/MS library match** | experimental MS/MS spectrum | **Level 2a**; can drop to **Level 3** if ambiguous |
| **Rule-based annotation** | diagnostic fragments + neutral losses | **Level 2b** when uniquely supported; otherwise **Level 3** |
| **Standard confirmation (spike-in)** | standard RT/m/z/MS2/(CCS) | **Level 1** (confirmed structure) |

---

## Other approaches

- **Network-based approaches**: tools like molecular networking can group related features based on MS/MS similarity, which can help propagate annotations and increase confidence in identifications within a network of related compounds. However, the confidence in individual identifications still depends on the quality of the underlying evidence for each feature.

  - **Molecular networking** can be used to group related features based on MS/MS similarity, which can help propagate annotations and increase confidence in identifications within a network of related compounds. However, the confidence in individual identifications still depends on the quality of the underlying evidence for each feature.
  - **Feature-based molecular networking** can integrate MS1 features with MS/MS spectra to provide a more comprehensive view of the data, which can aid in the identification process by linking features to their corresponding spectra and facilitating the propagation of annotations within related groups of compounds.
  - **MS2LDA** can identify recurring fragmentation patterns (Mass2Motifs) that may correspond to specific substructures, which can provide additional evidence for structural hypotheses, especially when combined with other approaches.

- **In silico fragmentation**: can generate candidate structures based on accurate mass and predict their MS/MS spectra for comparison with experimental data. Confidence depends on the quality of predictions and the uniqueness of matches.

  - **Sirus** can generate candidate structures based on accurate mass and predict their MS/MS spectra for comparison with experimental data. Confidence depends on the quality of predictions and the uniqueness of matches.
    - **CSI:FingerID** (now part of Sirus) can predict molecular fingerprints from MS/MS spectra and use them to search for candidate structures in databases, which can assist in identification, especially for novel compounds. However, the confidence in these predictions depends on the quality and representativeness of the training data.
  - **metFrag** can also generate candidate structures based on accurate mass and predict their MS/MS spectra for comparison with experimental data. Confidence depends on the quality of predictions and the uniqueness of matches.
  
- **Ion mobility / CCS**: can offer orthogonal evidence based on the shape and size of ions, which can help distinguish isomers. However, CCS databases are still limited, and the technique may not be available in all labs.

- **Orthogonal methods**: techniques such as NMR, IR, or UV–Vis spectroscopy can provide complementary structural information, especially for confirming key features of a proposed structure. These methods are often more resource-intensive but can significantly increase confidence when used alongside MS-based evidence.

- **Isotopic labeling**: can provide evidence for the number of specific atoms (e.g., C, N, S) in a molecule, which can help narrow down candidate structures and increase confidence in identifications.

- **Machine learning models**: can be trained to predict structural features or classes based on MS/MS spectra, which can assist in identification, especially for novel compounds. However, the confidence in these predictions depends on the quality and representativeness of the training data.






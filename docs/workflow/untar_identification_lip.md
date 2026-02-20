# Identification in lipidomics

Lipid identification follows many of the same principles as metabolomics feature annotation, but it is often more challenging because lipids have extensive **structural diversity** and many **isomeric/isobaric** species.
This page focuses on **rule-based annotation** commonly used in lipidomics and how to report results at an appropriate confidence/structural level.

Guidance here is aligned with the Lipidomics Standards Initiative (LSI): https://lipidomicstandards.org.

---

## Key principles

- **Use lipid biochemistry as a constraint**: consider plausible building blocks for your matrix (fatty acyl chain lengths/unsaturation, sphingoid bases, typical lipid classes) and document any assumptions.
- **Account for isomers** (same formula, different structure) and **isobars** (same nominal/accurate mass from different species).
- **Handle overlaps explicitly**:
	- isotopic overlap (especially 13C within a class)
	- adduct-related overlap (within/between classes)
	- in-source fragments
- **Use standardized nomenclature**:
	- Lipid shorthand nomenclature: Liebisch et al., *J Lipid Res* (2013)
	- Fragment ion nomenclature: Pauling et al., *PLoS One* (2017)

---

## Reporting level

In untargeted lipidomics, the “correct” reporting level depends on data quality (MS1 mass accuracy, MS/MS coverage, separation, ion mode, and standards).

- **Class / sum composition** (e.g., `PC 34:1`): typically feasible from class-specific fragments/neutral losses + accurate mass constraints.
- **Molecular species / fatty acyl level** (e.g., `PC 16:0_18:1`): requires informative MS/MS (and rules depend on lipid class and adduct/polarity).
- **sn-position / double-bond position**: do not report unless supported by an appropriate method and validated evidence.

---

## Rule-based identification

### Low mass resolution (typically triple quadrupole)

Low-resolution identification relies on **tandem MS** using class-specific product ions or neutral losses (often in MRM workflows). For rule-based annotation:

- Show which **fragment(s)/neutral loss(es)** support the annotation.
- State the **assumptions** used to resolve ambiguity (e.g., even-carbon chains, ester-only lipids, typical sphingoid base type).

#### Glycerophospholipids

**Class / sum composition**

- Requires detection of a class-specific fragment or neutral loss.
- Any assumptions used to resolve overlap must be stated.

Examples (illustrative):

- PIS+ `m/z 184`:
	- annotate `m/z 746.6` as `PC O-34:1` if you assume only even-carbon chains
	- annotate `m/z 746.6` as `PC 33:1` if you assume only ester bonds
- PIS+ `m/z 196`:
	- annotate `m/z 702.5` as `PE O-34:1` (even-carbon assumption)
	- annotate `m/z 702.5` as `PE 33:1` (ester-only assumption)

**Molecular species / fatty acyl level**

- Requires molecular-species informative fragments.
- Interpretation depends on bond type:
	- **Diacyl**: fragments/neutral losses for both acyl chains (as fatty acid or ketene) may be observed.
	- **Alkyl-acyl**: often only one chain is directly supported.

Examples (illustrative):

- Product ions (−) of `m/z 804.6` include `m/z 255.2` and `281.2` → `PC 16:0_18:1` (`[M+HCOO]−`)
- Product ions (−) of `m/z 716.5` include `m/z 255.2` and `281.2` → `PE 16:0_18:1` (`[M−H]−`)
- Product ions (−) of `m/z 760.6` include `m/z 478.3/504.3` and/or `m/z 496.3/522.3` → `PC 16:0_18:1` (`[M+H]+`)

**Lysophospholipids**

- Use class-specific fragments and (where possible) molecular-species fragments.
- State assumptions used for resolving isobars.

Examples (illustrative):

- PIS+ `m/z 184`: annotate `m/z 482.6` as `LPC O-16:0` (even-carbon assumption)
- PIS+ `m/z 184`: annotate `m/z 482.6` as `LPC 15:0` (ester-only assumption)

#### Sphingolipids

**Class / sum composition**

- Requires class-specific fragments.
- State assumptions (e.g., sphingoid base hydroxylation).

Examples (illustrative):

- PIS+ `m/z 184`: annotate `m/z 703.6` as `SM 34:1` assuming a dihydroxy sphingoid base
- PIS+ `m/z 184`: annotate `m/z 703.6` as `SM 33:2` assuming a trihydroxy sphingoid base

**Molecular species**

- Requires long-chain base and/or acyl-chain informative fragments.

Examples (illustrative):

- PIS+ `m/z 266`: `m/z 540.5` → `Cer d18:0/16:0`
- PIS+ `m/z 264`: `m/z 538.5` → `Cer d18:1/16:0`
- PIS+ `m/z 264`: `m/z 700.6` → `HexCer d18:1/16:0`
- PIS+ `m/z 264`: `m/z 862.6` → `Hex2Cer d18:1/16:0`
- PIS+ `m/z 262`: `m/z 536.5` → `Cer d18:2/16:0`

#### Sterols (e.g., cholesteryl esters)

- Requires sterol-class fragments.
- Clearly state assumptions (e.g., cholesterol as dominant sterol, ester bond present).

Example (illustrative):

- PIS+ `m/z 369`: annotate `m/z 666.6` as `CE 18:2` (`[M+NH4]+`) assuming cholesterol is the major sterol.

### High mass resolution (e.g., Orbitrap/QTOF)

Higher mass resolution improves separation of isobars and increases confidence of molecular formula/adduct assignment, but **accurate mass alone is rarely sufficient** for structural claims.

Identification based on accurate mass is only reasonable when:

- it is paired with **thorough deconvolution/feature curation**, and
- supported by additional evidence (both ion modes and/or MS/MS).

At sufficient resolution and with appropriate supporting evidence, high-resolution data can help differentiate bond types (e.g., acyl vs alkyl) and certain modifications (e.g., hydroxylation), but fatty acyl-level assignment still generally requires MS/MS.

Examples (illustrative):

- HR-MS+: annotate `m/z 760.5850` as `PC 34:1` when `PE 37:1` can be excluded by biochemistry and/or a supporting negative-mode adduct (e.g., `m/z 804.5760` with formate).
- HR-MS+: annotate `m/z 746.6058` as `PC O-34:1` when `PE O-37:1` can be excluded by biochemistry and/or a supporting negative-mode adduct (e.g., `m/z 790.5967` with formate).

---

## Lipid class-specific fragments (rule-of-thumb)

The tables below summarize commonly used diagnostic fragments/neutral losses. Exact observability depends on instrument type, collision energy, adduct, and chromatography.

### Positive ion mode (examples)

| Lipid class | Typical precursor/adduct | Diagnostic fragment / neutral loss | Typical reporting level | Notes |
|---|---|---|---|---|
| PC | `[M+H]+` | `m/z 184.0733` (headgroup); NL `183.0661` | Sum composition | Isobars may require assumptions (even-carbon, ester-only, etc.) |
| PE | `[M+H]+` | NL `141.0191` | Sum composition |  |
| PS | `[M+H]+` | NL `185.0089` | Sum composition |  |
| PI | `[M+NH4]+` | NL `277.0563` | Sum composition |  |
| PG | `[M+NH4]+` | NL `189.0402` | Sum composition |  |
| PA | `[M+NH4]+` | NL `115.0035` (and sometimes NL `17.0266`, low specificity) | Sum composition |  |
| DG | `[M+NH4]+` | NL `35.0371` (and sometimes NL `17.0266`, low specificity) | Sum composition |  |
| SM | `[M+H]+` | `m/z 184.0733` | Sum composition | Hydroxylation/isomer assumptions may be required |
| Cer/HexCer/Hex2Cer | `[M+H]+` | Long-chain-base product ions (e.g., `m/z 264.2685` for d18:1 backbone) | Molecular species (partial) | Confirm acyl chain/base with informative fragments |

### Negative ion mode (examples)

| Lipid class | Typical precursor/adduct | Diagnostic fragment / neutral loss | Typical reporting level | Notes |
|---|---|---|---|---|
| PC | `[M+HCOO]−` | NL `60.0211` | Sum composition | Also commonly observed as acetate adduct |
| PC | `[M+CH3COO]−` | NL `74.0368` | Sum composition |  |
| PE | `[M−H]−` | `m/z 140.0118` and/or `m/z 196.0380` | Sum composition |  |
| PG | `[M−H]−` | `m/z 152.9958` and/or `m/z 171.0063` | Sum composition |  |
| PA | `[M−H]−` | `m/z 152.9958` | Sum composition |  |
| PI | `[M−H]−` | `m/z 241.0119`, `223.0013`, `152.9958`, `259.0224` | Sum composition |  |
| PS | `[M−H]−` | `m/z 152.9958` and/or NL `87.0320` | Sum composition |  |
| SM | `[M+HCOO]−` or `[M+CH3COO]−` | `m/z 168.0431` + adduct-specific NL | Sum composition |  |

---

## Novel lipid structures

Annotation of novel lipid structures should be based on substantial evidence:

- Exclude interference from isomeric and/or isobaric lipid species.
- Provide fragment-ion evidence supporting both **lipid class** and **structural elements**, ideally in both positive and negative ion modes (when ionizable).
- If proposing a novel lipid class, validate the structure using a synthetic standard when possible.
- If no standard is available, isolate/purify the compound and confirm by orthogonal methods (e.g., NMR).
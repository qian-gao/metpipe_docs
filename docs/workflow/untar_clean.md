# Peak cleaning

Untargeted LC–MS(/MS) feature tables commonly contain non-biological signals: solvent/reagent impurities, labware contaminants (e.g., plasticizers), column bleed, in-source fragments, and carryover from prior injections. Peak cleaning aims to remove features dominated by these artifacts and by unstable integration, so downstream statistics are driven by reproducible biology rather than technical noise.

This step is typically performed **after peak detection/alignment** and **before** statistical analysis. Thresholds depend on platform, matrix, and study goals; treat the values below as starting points and document what you used.

---

## Core cleaning rules

Apply filters in a consistent order (e.g., blanks → QC precision → missingness → intensity/RT sanity checks). Keep a record of how many features are removed at each step.

### 1) Blank-based filtering (contamination and carryover)

Goal: remove features that are largely explained by blank signal.

Common rules (choose one and keep it consistent):

- **Sample/blank ratio**: remove if the mean (or median) intensity in study samples is not sufficiently higher than blanks.
	- Example rule: remove if $\text{mean(sample)} \le 3 \times \text{mean(blank)}$.
- **Blank prevalence**: remove if the feature is present in blanks above a minimum intensity in a large fraction of blank injections.

> Notes:

> - Use **process blanks** to catch extraction-derived artifacts; use **solvent blanks** to monitor instrument carryover.
> - If you observe carryover (features appearing right after high-intensity injections), consider tightening wash conditions in acquisition; filtering alone may not fully fix it.

### 2) QC precision filtering (pooled-QC based)

Goal: remove features that are not measured reproducibly.

Compute variability in pooled QCs and filter features with poor precision.

- **QC RSD%**: it is the relative standard deviation (coefficient of variation) of feature intensities in pooled QCs. A common starting threshold is removing features with **RSD% > 30%**.
- **D-ratio**: it is the ratio of technical variation (e.g., RSD% in QCs) to biological variation (e.g., RSD% in samples). A common rule is to remove features with D-ratio > 0.8, which indicates technical variation dominates biological variation.

### 3) Dilution series-based filtering
Goal: remove features that do not show a consistent response to dilution, which indicates they are likely noise or artifacts.

- If you have a QC dilution series (e.g., serial dilutions of a pooled QC), compute the correlation between feature intensity and dilution factor across the series.
- Remove features that do not show a strong positive correlation (e.g., Pearson’s r < 0.7) with dilution, as they are unlikely to represent true biological signals.

### 4) Missingness filtering

Goal: remove features with too many missing values to support robust inference.

Common rules:

- Remove features with **high missingness in pooled QCs** (often indicates unstable detection/integration).
- Remove features with **high missingness in study samples** (threshold depends on design; for example, require presence in at least a set fraction of samples within a group).

### 5) Intensity floor (signal-to-noise sanity check)

Goal: remove very low-intensity features that are close to the detection limit and tend to be unstable.

- Remove features whose mean/median intensity in pooled QCs is below a minimum.
	- Example: a fixed threshold (e.g., 500 arbitrary units) can be used as a **dataset-specific** floor, but should be justified from your instrument/noise level.

Prefer defining the floor based on observed noise (or an instrument-specific criterion) rather than copying a universal number.

### 6) Retention time sanity checks

Goal: remove features in regions known to be unreliable.

- Remove **very early eluting** features if they are dominated by injection/solvent front effects in your method.
- Optionally remove features outside the chromatographic window where your gradient contains meaningful separation.

Define “early eluting” using an RT cut (minutes) that matches your LC method.



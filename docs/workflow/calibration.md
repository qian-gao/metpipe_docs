# Calibration

This page describes calibration for **targeted metabolomics/lipidomics** (quantitative LC/GC–MS methods). The objective is to convert instrument response into **concentration** with defined performance (accuracy, precision, linear range) and clear acceptance criteria.

## Key concepts

- **Calibrator / standard level**: a sample with known analyte concentration.
- **Response**: often peak area (or height), typically as an **area ratio** (analyte / internal standard).
- **Calibration model**: regression linking response to concentration.
- **LLOQ / ULOQ**: lower/upper limit of quantification (validated bounds of reliable quantitation).
- **LOD**: limit of detection (detectable but not necessarily quantifiable).

## 1) Standards and internal standards

### External standards (calibration levels)

- Prepare a multi-level calibration series spanning expected biological concentrations.
- Include a blank (no analyte) when feasible, plus a **zero** (internal standard only) if your workflow distinguishes them.

### Internal standards (recommended)

- Prefer **stable isotope-labeled internal standards (SIL-IS)** for key analytes.
- If SIL is not available for all targets, use class-/RT-/chemistry-matched internal standards and document the mapping.
- Spike internal standards consistently (ideally early, before extraction) and at a concentration appropriate for the calibration range.

## 2) Calibration curve design

### Concentration range and number of levels

- Use enough levels to characterize the curve across the intended range (common practice: 6–10+ non-zero levels).
- Ensure the range covers anticipated sample concentrations; avoid frequent extrapolation.

### Replicates

- Include replicate injections/replicate preparations for at least some levels to assess precision.
- Include independent **QC samples** (low/mid/high) prepared separately from the calibrators.

## 3) Regression model and weighting

### Typical model

- **Linear regression** is common for many targeted assays, often using:
	- $x$ = concentration
	- $y$ = response (peak area or area ratio)

### Weighting

Heteroscedasticity (higher variance at higher signal) is common in MS. Weighted regression often improves accuracy at the low end.

- Common weightings: **1/x** or **1/x²** (choose based on residuals and performance at LLOQ).
- Report the selected weighting and the rationale/criteria.

### Non-linearity

If response is not linear across the full range:

- reduce the calibration range, or
- use a piecewise/curved model supported by your validation approach (and report it clearly).

## 4) Acceptance criteria (examples)

Define criteria before analysis and apply consistently. Typical criteria include:

- **Back-calculated accuracy** for calibrators: within a defined % of nominal (stricter in the mid-range, slightly wider near LLOQ).
- **Precision**: replicate CV% within a defined threshold.
- **Calibration fit diagnostics**: residuals and lack-of-fit checks consistent with chosen model.
- **Carryover**: blanks after high standards below a defined threshold.

If a level fails criteria, define how it is handled (e.g., exclude one outlier point, refit, or re-run).

## 5) LOD, LLOQ, ULOQ and reporting limits

### LLOQ / ULOQ

LLOQ and ULOQ should be set based on validated performance.

- LLOQ is not just “lowest standard”; it is the lowest concentration meeting your accuracy/precision criteria.
- ULOQ is the highest concentration meeting criteria (and below saturation).

### Below LLOQ

Decide and document how values below LLOQ are handled:

- report as “<LLOQ” (often preferred for strict quantitative reporting)
- or report numeric values with a flag (exploratory contexts)

Avoid treating below-LLOQ values as fully quantitative without explicit labeling.

## 6) Matrix effects and recovery

Matrix effects can bias response and differ across sample types.

- Use SIL-IS whenever possible to correct for matrix effects.
- Consider **matrix-matched calibration** or **standard addition** when matrix effects are strong and variable.
- If extraction recovery is assessed, report the approach and whether concentrations are recovery-corrected.

## 7) Practical QC strategy around calibration

- Run **QC samples** (low/mid/high) throughout the batch to monitor stability.
- Monitor internal standard RT and intensity drift.
- Track calibration slope/intercept over time if you run multiple batches.

## 8) What to report (minimum)

For each analyte (or analyte group):

- calibration range and number of levels
- regression model + weighting
- internal standard used
- LLOQ/ULOQ (and how determined)
- accuracy/precision criteria and pass rates
- any exclusions (points removed) and rules used

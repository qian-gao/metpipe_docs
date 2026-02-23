# Calibration

Calibration is the process of establishing the quantitative relationship between instrument response and analyte concentration using a series of calibration standards. This step is essential for converting raw signal intensities into absolute concentrations in targeted metabolomics and lipidomics.

---

## Calibration in Data Processing

- **Purpose:**
   - Calibration curves enable the transformation of instrument response (peak area or height) into meaningful concentration values for each analyte.
   - Each batch should include a full set of calibration standards to ensure accuracy and reproducibility.
- **Data workflow:**
   - Acquire calibration standards, study samples, and QCs together in each batch.
   - Extract peak areas/heights for each analyte and internal standard in all calibration samples.
   - Calculate response ratios (analyte/IS) if internal standards are used.
   - Plot response (or response ratio) versus known concentration for each analyte.
   - Fit an appropriate regression model (e.g., linear, quadratic, weighted) to the calibration data.
   - Assess curve quality using R², residuals, back-calculated accuracy, and visual inspection.
   - Use the calibration model to interpolate concentrations for unknown samples.
- **Documentation:**
   - Store calibration curve parameters, sample metadata, and QC results for traceability.

---

## Key Concepts

- **Calibrator / standard level:** Sample with a known analyte concentration.
- **Response:** Typically peak area or height, often normalized as an area ratio (analyte / internal standard).
- **Calibration model:** Regression equation linking response to concentration.
- **LLOQ / ULOQ:** Lower/upper limits of quantification (bounds of reliable quantitation).
- **LOD:** Limit of detection (lowest detectable, not always quantifiable).

---

## Calibration Standards and Internal Standards

- **External standards (calibration levels):**
   - Prepare a multi-level calibration series spanning the expected biological concentration range.
   - Include a blank (no analyte) and a zero (internal standard only) if appropriate.
   - Record exact concentrations and sample IDs for each calibrator.
- **Internal standards (IS):**
   - Use stable isotope-labeled IS for key analytes when possible.
   - For other analytes, use class- or chemistry-matched IS and document the mapping.
   - Add IS to all samples, calibrators, and QCs at a constant concentration, ideally before extraction.
   - Normalize analyte response to IS in data processing.

---

## Calibration Curve Design

- **Concentration range and number of levels:**
   - Use enough calibration levels (typically 6–10+) to characterize the curve across the intended range.
   - Ensure the range covers anticipated sample concentrations to minimize extrapolation.
- **Curve fitting and evaluation:**
   - Fit the most appropriate model for each analyte (linear, quadratic, weighted, etc.).
   - Evaluate fit quality using R², residual plots, and back-calculated concentrations.
   - Define and document acceptance criteria for curve fit and quantification limits.

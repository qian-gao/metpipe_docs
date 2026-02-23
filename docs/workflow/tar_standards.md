
# Standards and internal standards

Accurate quantification in targeted metabolomics and lipidomics relies on the careful use of **standards**—both calibration standards and internal standards (IS). These are essential for ensuring that your results are reliable, comparable, and scientifically meaningful.

---

## General use and rationale

Standards are used throughout the analytical workflow to:

- Enable **absolute quantification** of analytes (calibration standards)
- Correct for technical variability and improve **precision** (internal standards)
- Monitor instrument performance and data quality
- Support troubleshooting and reproducibility

In most workflows, standards are included in every batch and are processed alongside study samples and QCs. Their correct use is a hallmark of robust experimental design.

---

## Calibration standards

Calibration standards are samples with known concentrations of target analytes. They are used to generate a calibration curve, which converts instrument response (e.g., peak area) into absolute concentration.

**Key steps:**

- **Preparation:**

   - Prepare a series of calibration samples covering the expected concentration range.
   - Record concentrations and sample IDs for each calibrator.
   - Tip: Use serial dilutions for accuracy and reproducibility.

- **Data acquisition:**

   - Run calibration standards in each batch, alongside study samples and QCs.
   - Randomize order to minimize batch effects.

- **Data processing:**

   - Extract peak areas for each analyte in each calibration sample.
   - Plot instrument response versus known concentration to build the calibration curve.
   - Fit an appropriate model (e.g., linear, quadratic, weighted regression). Assess curve quality (R², residuals, back-calculated accuracy).
   - Use the calibration curve to interpolate concentrations in unknown samples.

- **Documentation:**

   - Save calibration curve parameters and sample metadata for traceability and reproducibility.

**Practical tip:** Always check the linearity and accuracy of your calibration curve before quantifying study samples. Poor calibration undermines all downstream results.

---

## Internal standards (IS)

Internal standards are compounds added at a constant amount to all samples, calibrators, and QCs. They are chemically similar to the analytes of interest but distinguishable by the instrument (e.g., isotopically labeled analogs).

**Key steps:**

- **Addition:**
   - Add IS to all samples, calibrators, and QCs before extraction.
   - Record IS identity, concentration, and addition protocol.
   - Choose IS that closely match the chemical properties of your analytes.
- **Data acquisition:**
   - Ensure IS signals are acquired in every run, are well-resolved, and free from interference.
- **Data processing:**
   - Normalize analyte peak areas or heights to the corresponding IS (e.g., analyte/IS ratio).
   - Use normalized values for calibration curve construction and quantification.
   - Monitor IS response across all samples to detect technical issues.
- **Quality control:**
   - Flag samples with abnormal IS response for review or exclusion.
   - Plot IS response across the batch to visualize trends or outliers.

**Practical tip:** Consistent IS response across samples is a strong indicator of technical stability. Sudden changes may signal problems that require investigation.


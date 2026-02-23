# Standards and Internal Standards

In targeted metabolomics and lipidomics, calibration standards and internal standards are essential for accurate and reproducible quantification. Their correct use directly impacts the quality and interpretability of your data.

## Calibration Standards

Calibration standards are used to generate calibration curves, which are fundamental for converting instrument response (peak area or height) into absolute concentrations. In data processing, calibration standards are used as follows:

- **Preparation:**
  - Prepare a series of calibration samples with known analyte concentrations, ideally spanning the expected range in study samples.
  - Record the exact concentrations and sample IDs for each calibrator.
- **Data acquisition:**
  - Acquire calibration standards in each batch alongside study samples and QCs.
- **Data processing:**
  - Extract peak areas/heights for each analyte in each calibration sample.
  - Plot instrument response versus known concentration to construct the calibration curve.
  - Fit an appropriate model (e.g., linear, quadratic, weighted) and assess curve quality (R², residuals, back-calculated accuracy).
  - Use the calibration curve to calculate concentrations in unknown samples by interpolation.
- **Documentation:**
  - Store calibration curve parameters and sample metadata for traceability and reproducibility.

## Internal Standards (IS)

Internal standards are used to correct for technical variability and improve quantification accuracy. Their use in data processing includes:

- **Addition:**
  - Add IS to all samples, calibrators, and QCs at a constant concentration before extraction.
  - Record IS identity, concentration, and addition protocol.
- **Data acquisition:**
  - Acquire IS signals in each run, ensuring they are well-resolved and free from interference.
- **Data processing:**
  - Normalize analyte peak areas/heights to the corresponding IS (e.g., analyte/IS ratio).
  - Use normalized values for calibration curve construction and quantification.
  - Monitor IS response across all samples to detect technical issues (e.g., extraction losses, instrument drift).
- **Quality control:**
  - Flag samples with abnormal IS response for review or exclusion.


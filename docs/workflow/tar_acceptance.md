# Acceptance Criteria

Clear, objective acceptance criteria are essential for ensuring the reliability, reproducibility, and scientific integrity of targeted metabolomics and lipidomics data. These criteria should be defined before data acquisition and consistently applied during data processing and review.

## Calibration Curve Acceptance

Calibration curve acceptance is critical for ensuring that quantitative results are accurate and reliable. The calibration curve describes how instrument response relates to analyte concentration, and its quality directly affects all downstream quantification.

- **Curve fit quality:**
	- The most common metric for curve fit is the coefficient of determination (R²). For linear models, a typical acceptance threshold is R² ≥ 0.99, indicating that the model explains at least 99% of the variance in the data.
	- However, R² alone is not sufficient. Back-calculated accuracy for each calibrator should also be assessed. This means calculating the concentration of each calibrator using the fitted curve and comparing it to the known value. Acceptance is usually within ±15% of the nominal value for most points, and ±20% at the lower limit of quantification (LLOQ).
- **Residuals and outliers:**
	- Residuals are the differences between observed and predicted responses. Plotting residuals helps identify systematic deviations (e.g., curvature, heteroscedasticity) that may indicate a poor model fit or the need for a different calibration model or weighting.
	- Outlier calibrators should only be excluded if there is a clear justification (e.g., pipetting error, instrument malfunction). All exclusions must be documented, and the impact on curve fit and accuracy should be reassessed after exclusion.
- **LLOQ/ULOQ:**
	- The lower limit of quantification (LLOQ) is the lowest concentration at which the analyte can be reliably quantified with acceptable accuracy and precision. The upper limit (ULOQ) is the highest such concentration.
	- LLOQ and ULOQ should be established during method validation and confirmed in each batch. Only report concentrations within this validated range; values outside should be flagged as below or above quantification limits.
- **Model and weighting selection:**
	- Choose the simplest model that provides acceptable fit and accuracy (linear is preferred unless non-linearity is evident).
	- Weighting (e.g., 1/x, 1/x²) can improve fit at low concentrations by reducing the influence of high-concentration points. The choice of weighting should be justified by improved accuracy and residual distribution.

## QC Precision and Accuracy

Quality control (QC) samples are used to monitor the precision and accuracy of the analytical process. They provide confidence that the method is performing as expected throughout the batch.

- **Pooled QC samples:**
	- Pooled QCs are typically prepared by combining small aliquots from multiple study samples. They represent the average sample matrix and are injected repeatedly throughout the batch.
	- Precision is assessed by calculating the coefficient of variation (%CV) for each analyte across all pooled QC injections. A common acceptance threshold is %CV ≤ 15%, indicating good reproducibility. Higher %CV may indicate instrument drift, sample instability, or other technical issues.
- **Calibration QC samples:**
	- Calibration QCs are samples with known concentrations, distinct from the calibrators used to build the curve. They are used to independently verify the accuracy of quantification.
	- Measured concentrations should be within ±15% of the nominal value for most QCs. Consistent failure to meet this criterion suggests problems with calibration, sample preparation, or instrument performance.
- **Blanks:**
	- Blanks (solvent or extraction blanks) are used to check for contamination or carryover. Analyte signals in blanks should be less than 20% of the LLOQ response. Higher signals may indicate contamination, carryover, or background noise, and should prompt investigation.
- **Ongoing monitoring:**
	- Plot QC and blank results over the course of the batch to detect trends, shifts, or outliers. Investigate and document any deviations from expected performance.

By understanding and applying these acceptance criteria, you ensure that only high-quality, reliable data are reported and interpreted, and that any issues are detected and addressed promptly.

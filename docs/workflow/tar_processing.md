# Data Processing

Data processing in targeted metabolomics/lipidomics transforms raw instrument data into quantitative results ready for interpretation. Each step should be performed systematically and documented for reproducibility.

## Typical Data Processing Workflow

- **Peak integration:**
	- Use validated software to detect and integrate peaks for each target analyte and internal standard.
	- Review and, if necessary, manually adjust integrations to ensure accuracy, especially for low-abundance or poorly resolved peaks.
	- Export integrated peak areas or heights for all samples, calibrators, QCs, and blanks.
- **Normalization:**
	- Normalize analyte responses to the corresponding internal standard (e.g., analyte/IS ratio) to correct for technical variability.
	- For analytes without a direct IS, use class- or chemistry-matched normalization as documented in the IS mapping.
- **Calibration and quantification:**
	- Apply calibration curves to normalized responses to calculate absolute concentrations for each analyte.
	- **Calibration models:**
		- Common models include linear, quadratic, and occasionally cubic regression.
		- The choice of model depends on the analyte’s response range and curve shape; linear is most common, but higher-order models may be needed for non-linear responses.
	- **Weighting strategies:**
		- Weighting (e.g., 1/x, 1/x²) is often applied to reduce the influence of high-concentration calibrators and improve fit at lower concentrations.
		- The optimal weighting is determined by evaluating residuals and back-calculated accuracy across the calibration range.
	- Interpolate unknown sample concentrations from the calibration model; flag any values outside the validated range (LLOQ/ULOQ).
- **Quality control and review:**
	- Assess QC sample results (e.g., %CV across pooled QCs, accuracy of calibration QCs) to verify data quality.
	- Flag and investigate outliers, integration errors, or QC failures.
	- Exclude or annotate problematic data points as needed, documenting all decisions.



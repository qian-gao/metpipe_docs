# Missing imputation

Missing values can arise for multiple reasons in metabolomics/lipidomics, such as true absence/very low abundance (below detection), ion suppression, peak picking/alignment failures, or sporadic acquisition issues. Evaluating the extent and *pattern* of missingness is essential before choosing an imputation strategy, because inappropriate imputation can bias fold-changes, variance, and downstream statistics.

---

## Missing evaluation

Before imputation, perform a thorough missingness evaluation to understand the underlying mechanisms and to inform method choice. This includes:

### Missing value summary
Generate summaries at both feature and sample level:

- **Per feature**: fraction missing overall and within each biological group.
- **Per sample**: fraction missing across all features (helps detect failed injections or problematic samples).
- **By sample type**: study samples vs pooled QC vs blanks.

### Missing value distribution
Visualize missingness to identify structure:

- heatmap of missingness (features × samples)
- histogram of % missing per feature
- missingness vs run order (to reveal drift-related dropouts)

### Correlation with sample metadata
Explore associations between missingness and metadata:

- batch, run order, sample type, instrument day
- biological group (note: true biology can change detectability)

If missingness is strongly batch- or run-order dependent, address QC/batch issues (peak picking, alignment, drift correction) before relying on statistical imputation.

### Recommended pre-filters (before imputation)
Common filters (choose thresholds appropriate for your study and document them):

- require a feature to be present in a minimum fraction of samples *within at least one group*
- remove samples with unusually high missingness (potential injection/prep failures)

---

## Types of missing values
In practice, missingness mechanisms can be mixed. Use these categories as guidance for method selection and for how you interpret results.

- **MNAR (Missing Not At Random)**
	- Typical cause: signal is below the **LOD/LOQ** (or below peak-picking threshold).
	- Pattern: missingness increases for low-abundance features and/or in specific groups where the feature is low.

- **MAR (Missing At Random)**
	- Typical cause: feature presence depends on other observed variables (batch, matrix, co-elution, signal suppression) or pipeline decisions.
	- Pattern: missingness correlates with metadata or intensity-related factors.

- **MCAR (Missing Completely At Random)**
	- Typical cause: sporadic stochastic failures (injection issue, transient ion source instability).
	- Pattern: missing values appear scattered with no clear dependency.

---

## Missing imputation method
Imputation is used to enable statistical analysis and visualization, but it also introduces assumptions. Whenever possible, validate that conclusions are robust to reasonable imputation choices.

### For MNAR
Use methods that respect the idea that missing values are *low*, not “average”. Common options:

- **LOD/LOQ-based substitution**: replace missing with a small value such as LOD, LOQ, or a fraction thereof.
- **HM (half-minimum)**: replace missing with half of the minimum observed value (globally or within feature).
- **Min/Small constant**: replace with a small constant near the noise floor.

> Notes:

> - Prefer using a **feature-wise** small value tied to the observed distribution/noise floor rather than a single global constant.
> - After substitution, use log transform cautiously: small-value choices can strongly affect fold changes for sparse features.

### For MAR/MCAR
These methods use relationships across samples/features.

- **KNN**: imputes using nearest neighbors in sample space.
- **RF (Random forest)**: imputes using predictive models trained on observed values.
- **Other multivariate/low-rank approaches** (e.g., PCA-based imputation) when missingness is moderate.

> Notes:

> - Avoid complex imputation when missingness is extreme; consider filtering instead.
> - Evaluate impact on variance: some methods can shrink variance or create overly smooth patterns.

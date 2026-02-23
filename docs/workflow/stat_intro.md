# Statistical analysis: introduction

Statistical analysis is a crucial step in the metabolomics workflow, as it allows researchers to extract meaningful insights from complex datasets. The choice of statistical methods depends on the research question, the experimental design, and the nature of the data.

This workflow splits statistical analysis into:

- [Univariate analysis](univariate.md)
- [Multivariate analysis](multivariate.md)
- [Pathway analysis](pathway.md)

## Data preparation

Before performing statistical analysis, it is essential to check and prepare the data. Here we assume the data has been preprocessed, missing values have been imputed, and the data has been normalized/batch corrected.

### Outlier removal

Outliers can significantly affect statistical results. Identify and handle outliers using a combination of visualization and statistical/multivariate diagnostics.

- Visual inspection
	- IQR method: values outside 1.5×IQR from Q1/Q3 are considered outliers.
   considered outliers.
- Multivariate methods
	- PCA: samples far from the main cluster in score plots may be outliers.
	- Mahalanobis distance: samples with large distance from the center may be flagged.
	- Hotelling’s T-squared: samples exceeding a threshold may be flagged.
	- Q residuals: samples with high Q residuals in PCA may indicate outliers.

A Hotelling’s T-squared vs Q residuals plot (e.g., using PC1–PC3) can help identify outliers in multivariate space.

### Data transformation

Transformation is typically applied **after normalization/batch correction and before scaling** to make feature distributions more suitable for statistical modeling. Common goals are to reduce **right-skewness**, mitigate **heteroscedasticity** (mean–variance dependence), reduce the influence of **extreme values**, and make relationships more approximately **linear/additive**.

Common transformations:

- **Log transform** (often `log2` or `log10`): widely used because intensities are frequently right-skewed and effects are often multiplicative.
	- Practical note: handle zeros/small values using an offset, e.g. `log(x + ε)`, or use `log1p(x)` where appropriate. Report the chosen approach.
- **Square-root transform**: milder than log; useful when log is too aggressive.
- **Box–Cox** (positive data) or **Yeo–Johnson** (allows zeros/negatives): data-driven families that can stabilize variance.

### Data scaling

After transformation, **scaling** is applied to make features more comparable, so that models are not dominated by high-variance or high-abundance metabolites/lipids. Scaling is especially important for variance-sensitive multivariate methods (e.g., PCA, PLS(-DA), clustering).

Common choices:

- **Mean-centering**: subtract the feature mean (centers values around 0; does not change variance).
- **Auto-scaling** (unit-variance scaling; z-scoring): mean-center and divide by SD (mean = 0, SD = 1); can amplify noise for low-precision features.
- **Pareto scaling**: mean-center and divide by sqrt(SD); compromise between no scaling and auto-scaling.

Choose scaling based on the analysis goal and report the method used.

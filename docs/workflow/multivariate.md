# Multivariate analysis

Multivariate methods analyze multiple features simultaneously to identify patterns, clusters, or predictive models.

## Unsupervised dimensionality reduction

- **Principal Component Analysis (PCA)**
  - Unsupervised method that reduces dimensionality while preserving variance; supports visualization of clustering and identification of outliers.
- **t-SNE**
  - Non-linear method effective for visualization and local clusters; can be slow on large datasets.
- **UMAP**
  - Non-linear method that is often faster and more scalable than t-SNE and can preserve more global structure.

## Supervised methods

- **Partial Least Squares Discriminant Analysis (PLS-DA)**
  - Supervised method that identifies features that discriminate between predefined groups.
- **Orthogonal PLS-DA (OPLS-DA)**
  - Separates predictive variation from orthogonal variation; can improve interpretability for classification.
- **ASCA (ANOVA–Simultaneous Component Analysis)**
  - Combines ANOVA and PCA to analyze effects of experimental factors and interactions.
- **MEBA (Multivariate Empirical Bayes Analysis of Variance)** for time series
  - Compares temporal profiles across conditions to identify dynamic differences.

## Clustering methods

- **Hierarchical clustering**: groups samples or features based on similarity; often visualized with heatmaps and dendrograms.
- **K-means clustering**: partitions samples into a predefined number of clusters.
- **Density-based clustering (e.g., DBSCAN)**: identifies clusters based on point density and can detect clusters of arbitrary shape.

## Machine learning methods

- **Random Forests**: classification/regression with feature importance scores.
- **Support Vector Machines (SVM)**: classification/regression using a separating hyperplane in feature space.
- **Elastic Net regression**: regularized regression combining L1 and L2 penalties; useful for feature selection in high-dimensional settings.

# Multivariate Analysis

Multivariate analysis examines multiple variables (features) simultaneously to uncover patterns, groupings, or predictive relationships in complex datasets. In metabolomics and lipidomics, these methods are essential for data exploration, classification, and biomarker discovery.

## Why Use Multivariate Analysis?

- Biological systems are complex, with many correlated variables.
- Multivariate methods can:
  - Reveal hidden structure (e.g., clusters, trends)
  - Reduce dimensionality for visualization
  - Build predictive models for classification or regression
  - Identify combinations of features that best explain group differences

## Unsupervised Dimensionality Reduction

Unsupervised methods do not use group labels and are used for data exploration and visualization.

- **Principal Component Analysis (PCA):**
  - Reduces data to a few principal components that capture the most variance.
  - Useful for visualizing sample clustering, detecting outliers, and assessing batch effects.
  - Assumes linear relationships among variables.
- **t-SNE (t-distributed Stochastic Neighbor Embedding):**
  - Non-linear method for visualizing high-dimensional data in 2D or 3D.
  - Preserves local structure (similarity of neighbors) but not global distances.
  - Sensitive to parameter choices (perplexity, learning rate).
- **UMAP (Uniform Manifold Approximation and Projection):**
  - Non-linear, scalable method for dimensionality reduction.
  - Preserves both local and some global structure; often faster than t-SNE.
  - Useful for large datasets and complex clustering patterns.

## Supervised Methods

Supervised methods use known group labels (e.g., case/control) to build models that discriminate between groups or predict outcomes.

- **Partial Least Squares Discriminant Analysis (PLS-DA):**
  - Projects data into a new space that maximizes separation between groups.
  - Useful for identifying features that contribute most to group differences.
  - Risk of overfitting; always validate with cross-validation or permutation tests.
- **Orthogonal PLS-DA (OPLS-DA):**
  - Separates predictive variation (related to group separation) from orthogonal (unrelated) variation.
  - Can improve interpretability of PLS-DA models.
- **ASCA (ANOVA–Simultaneous Component Analysis):**
  - Combines ANOVA and PCA to analyze effects of experimental factors and their interactions.
  - Useful for complex experimental designs (e.g., time series, factorial designs).
- **MEBA (Multivariate Empirical Bayes Analysis):**
  - Designed for time series data; identifies features with significant temporal changes across conditions.

## Clustering Methods

Clustering groups samples or features based on similarity, revealing natural groupings in the data.

- **Hierarchical clustering:**
  - Builds a tree (dendrogram) of sample or feature relationships.
  - Often visualized with heatmaps; useful for exploring patterns and subgroups.
- **K-means clustering:**
  - Partitions samples into a predefined number of clusters based on similarity.
  - Sensitive to initial cluster centers and number of clusters chosen.
- **Density-based clustering (e.g., DBSCAN):**
  - Identifies clusters of arbitrary shape based on point density.
  - Can detect noise and outliers as unclustered points.

## Machine Learning Methods

Machine learning approaches can be used for classification, regression, and feature selection in high-dimensional omics data.

- **Random Forests:**
  - Ensemble method for classification or regression.
  - Provides feature importance scores; robust to overfitting.
- **Support Vector Machines (SVM):**
  - Finds the optimal separating hyperplane for classification or regression.
  - Effective in high-dimensional spaces; kernel trick allows for non-linear boundaries.
- **Elastic Net regression:**
  - Regularized regression combining L1 (lasso) and L2 (ridge) penalties.
  - Useful for feature selection and handling correlated predictors.



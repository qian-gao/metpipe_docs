# Untargeted metabolomics/lipidomics

Untargeted metabolomics/lipidomics aims to detect and semi-quantify a broad set of metabolites/lipids **without pre-defining a target list**. The output is typically a **feature table** (samples x features) with feature metadata (e.g., $m/z$, retention time, identity) that can be used for downstream statistics.

Because untargeted LC–MS(/MS) data contain substantial technical variation (drift, batch effects, missing values, artifacts), reliable results depend on a transparent processing workflow with clear QC checks.

## Overview

The workflow below describes the recommended sequence used in this documentation set. Each step links to a dedicated page with implementation details and suggested checks.

- [**Preprocessing**](untar_preprocessing.md): raw-data conversion and feature detection (peak picking), alignment, deconvolution, and initial filtering.

- **Identification**
	- [**General**](untar_identification.md): feature annotation/identification concepts, reporting levels, and practical checks.
	- [**Lipid annotation**](untar_identification_lip.md): rule-based lipidomics annotation guidance and reporting level recommendations.

- [**Quality control**](untar_qc.md): review pooled QCs, blanks, drift/outliers, and overall acquisition stability before committing to downstream statistics.

- **Post-processing**
	- [**Peak cleaning**](untar_clean.md): remove artifacts and low-quality features (e.g., blank contaminants, unstable features, unreliable RT regions).
	- [**Missing imputation**](untar_missing_imputation.md): evaluate missingness mechanisms (MNAR/MAR/MCAR), filter where appropriate, then impute with documented assumptions.
	- [**Normalization**](untar_normalization.md): reduce technical variation (drift/batch) while preserving biological signal; evaluate improvement using QC metrics.
	- [**Merge peaklist**](untar_merge.md): merge positive/negative mode results (and/or batches) and attach consistent compound metadata for the final analysis-ready table.




# Introduction

This section describes recommended **computational best practices** for LC–MS-based **metabolomics and lipidomics** data processing and statistical analysis. It is not a software manual, but rather a set of guidelines and principles to help researchers make informed decisions at each step of the workflow.

## Workflow overview

- Start with **study design & data organization** to ensure your acquisition plan, QC strategy, and metadata are consistent and analysis-ready.
- Then follow either the **untargeted** or **targeted** processing track to convert raw data into a clean, normalized data table of features/targets × samples.
- Finally, perform **statistical analysis and interpretation** to extract biological insights.

### Study design & data organization

- [Introduction](design_intro.md)
- [Randomization](design_randomization.md)
- [Quality control setup](design_qc_setup.md)
- [Data conversion](design_data_conversion.md)
- [LC-MS data structure](design_data_structure.md)

### Untargeted data processing

- [Introduction](untar_intro.md)
- [Preprocessing](untar_preprocessing.md)
- Identification
	- [General](untar_identification.md)
	- [Lipid annotation](untar_identification_lip.md)
- [Quality control](untar_qc.md)
- Post-processing
	- [Peak cleaning](untar_clean.md)
	- [Missing imputation](untar_missing_imputation.md)
	- [Normalization](untar_normalization.md)
	- [Merge peaklist](untar_merge.md)

<!-- ### Targeted data processing

- [Introduction](tar_intro.md)
- [Targets and assay design](tar_targets.md)
- [Standards and internal standards](tar_standards.md)
- [Calibration](calibration.md)
- [Batch design and QC](tar_batch_qc.md)
- [Acquisition (MRM/PRM)](tar_acquisition.md)
- [Data processing](tar_processing.md)
- [Acceptance criteria](tar_acceptance.md)
- [Reporting](tar_reporting.md)

### Statistical analysis and interpretation

- [Introduction](stat_intro.md)
- [Univariate analysis](univariate.md)
- [Multivariate analysis](multivariate.md)
- [Pathway analysis](pathway.md)

### Other topics

- [Retention time prediction](untar_rt_prediction.md) -->



















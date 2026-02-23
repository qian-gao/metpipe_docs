# Targeted metabolomics/lipidomics

Targeted metabolomics/lipidomics measures a **pre-defined list of analytes** using optimized acquisition and quantification. Compared to untargeted workflows, targeted studies typically provide **higher confidence identification** and **more robust quantitation** (often absolute concentration).

## Overview

This section introduces the targeted data processing workflow, highlighting the main steps and key differences from untargeted analysis. Each step will be described in detail in dedicated pages.

## Key differences from untargeted workflow

- **Calibration curves for absolute quantification**
- **Use of internal and external standards**
- **Predefined analyte list and optimized acquisition**
- **Stringent QC and acceptance criteria**

## Workflow steps

- [Targets and assay design](tar_targets.md): Define the list of analytes to be measured and design the assay to ensure optimal detection and quantification for each target compound.
- [Standards and internal standards](tar_standards.md): Select and prepare calibration standards and internal standards to enable accurate quantification and correction for technical variability.
- [Calibration](tar_calibration.md): Generate calibration curves using known concentrations of standards to establish the relationship between instrument response and analyte concentration.
- [Batch design and QC](tar_batch_qc.md): Plan the sample acquisition order and incorporate quality control (QC) samples, blanks, and calibrators to monitor analytical performance and data quality throughout the batch.
- [Acquisition (MRM/PRM)](tar_acquisition.md): Acquire data using optimized multiple reaction monitoring (MRM) or parallel reaction monitoring (PRM) methods for sensitive and selective detection of target analytes.
- [Data processing](tar_processing.md): Integrate peaks, normalize using internal standards, apply calibration curves, and calculate absolute concentrations. Perform quality checks at each step.
- [Acceptance criteria](tar_acceptance.md): Define and apply objective criteria for calibration curve acceptance, QC precision, and sample inclusion/exclusion to ensure data reliability.





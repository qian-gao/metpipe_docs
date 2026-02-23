# Acquisition Methods in Targeted Metabolomics/Lipidomics

Selecting the appropriate data acquisition method is crucial for achieving the goals of a targeted metabolomics or lipidomics study. Different acquisition strategies offer distinct advantages depending on the number of targets, required sensitivity, selectivity, and data analysis needs.

## Multiple Reaction Monitoring (MRM/SRM)

- **Description:**
  - MRM (also called SRM) is a targeted MS/MS approach where specific precursor/product ion pairs (transitions) are monitored for each analyte.
- **Best suited for:**
  - Large panels of analytes where high sensitivity, selectivity, and quantitative robustness are required.
  - High-throughput studies, clinical assays, and regulatory applications.
- **Advantages:**
  - Excellent sensitivity and reproducibility.
  - High selectivity for target compounds.
  - Well-established for quantitative workflows.
- **Limitations:**
  - Limited flexibility for post-acquisition data analysis.
  - Requires prior knowledge of all targets and transitions.

## Parallel Reaction Monitoring (PRM)

- **Description:**
  - PRM is a high-resolution targeted MS/MS method where all fragment ions of a selected precursor are acquired simultaneously.
- **Best suited for:**
  - Smaller to medium-sized panels where high selectivity and mass accuracy are needed.
  - Situations where post-acquisition selection of fragment ions or confirmation of analyte identity is important.
- **Advantages:**
  - High selectivity and mass accuracy.
  - Flexibility to select or confirm fragments after acquisition.
- **Limitations:**
  - Lower throughput compared to MRM for very large panels.

## Data-Independent Acquisition (DIA)

- **Description:**
  - DIA methods (e.g., SWATH, MS^E) acquire MS/MS data for all ions within defined m/z windows, enabling comprehensive coverage.
- **Best suited for:**
  - Studies requiring broad coverage and retrospective data mining.
  - Targeted quantification when combined with appropriate data processing workflows.
- **Advantages:**
  - Enables both targeted and untargeted analysis from the same dataset.
  - Allows for post-acquisition discovery of new targets.
- **Limitations:**
  - More complex data analysis and potential for increased interference.

## Full Scan (Targeted Extraction)

- **Description:**
  - Full scan acquisition collects MS1 spectra across a wide m/z range, with targeted quantification performed by extracting signals for specific m/z values.
- **Best suited for:**
  - Small panels or when only precursor ion information is needed.
  - Situations where maximum flexibility for post-acquisition analysis is desired.
- **Advantages:**
  - Simple setup and broad data collection.
  - Allows for retrospective analysis of additional targets.
- **Limitations:**
  - Lower sensitivity and selectivity compared to MRM/PRM.

## Choosing an Acquisition Method

- Consider the number of targets, required sensitivity/selectivity, sample throughput, and data analysis needs.
- MRM is preferred for large, quantitative panels; PRM for high selectivity and confirmation; DIA for broad coverage and discovery; full scan for flexibility and small panels.
- The choice of method should align with study goals and available instrumentation.

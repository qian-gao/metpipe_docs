# Targets and Assay Design

Careful selection and documentation of target analytes is the foundation of a robust targeted metabolomics or lipidomics workflow. The choices made at this stage directly impact data quality, interpretability, and reproducibility.

## Defining the Target List

- **Selection criteria:**
   - Choose analytes based on biological relevance, study goals, and analytical feasibility.
   - Consider pathway coverage, disease association, or hypothesis-driven targets.
- **Documentation:**
   - For each analyte, record:
      - Name and stable identifier (e.g., InChIKey, HMDB, KEGG, ChEBI)
      - Expected ion form(s) and polarity (e.g., [M+H]+, [M-H]-)
      - Expected retention time window or RT index
      - Expected fragments/transitions (for MRM/PRM)
      - Reference spectra or links to spectral libraries (if available)
   - Maintain a structured target list (spreadsheet or database) for traceability and downstream processing.
- **Data structure:**
   - Organize the target list as a table with columns for all relevant metadata (analyte name, ID, RT, m/z, transitions, etc.).
   - Use this table as the basis for method setup, data extraction, and reporting.

## Acquisition Strategy

- **MRM/SRM (triple quadrupole):**
   - Suitable for large panels requiring high sensitivity and robust quantitation.
   - Enables scheduled acquisition for high throughput.
- **PRM / high-resolution targeted:**
   - Useful for smaller panels or when high selectivity and mass accuracy are needed.
   - Allows retrospective data analysis and flexible fragment selection.
- **Strategy selection:**
   - Match acquisition strategy to study needs, instrument capabilities, and data analysis requirements.

## Method Design Constraints

- **Concentration range and LLOQ:**
   - Estimate expected analyte concentrations and ensure the method covers this range with acceptable accuracy and precision.
   - Define lower and upper limits of quantification (LLOQ/ULOQ) for each analyte.
- **Sample matrix and extraction:**
   - Consider matrix effects and select extraction methods compatible with target analytes.
   - Plan for matrix-matched calibration if needed.
- **Sample throughput and batch size:**
   - Determine the number of samples, QCs, and calibrators per batch for robust data and manageable instrument time.

## Best Practices

- Regularly review and update the target list as new standards or biological insights become available.
- Use standardized identifiers and controlled vocabularies to facilitate data sharing and integration.
- Visualize target coverage (e.g., pathway maps) to ensure alignment with study goals.

A well-structured and documented target list streamlines all downstream data processing and reporting steps.


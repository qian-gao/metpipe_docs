# Quality control setup in metabolomics studies
Quality control (QC) is an essential component of metabolomics studies, aimed at ensuring the reliability and consistency of the generated data. The implementation of quality control strategies is crucial to monitor and control data quality along the entire analytical workflow, and consequently ensure the reproducibility, accuracy, and meaningfulness of metabolomics data.

Metabolite levels can be influenced by a myriad of preanalytical factors related to sample collection and preprocessing, conditions that must be tightly controlled to guarantee the metabolic integrity of biological samples under study. Besides, instrumental stability issues and fluctuations in analytical performance also have a negative impact on reproducibility and accuracy, especially when dealing with large-scale studies or complex samples. Along the experiment, the MS system may suffer from significant drifts in sensitivity, mass accuracy, retention time (RT), and peak resolution. These drifts can lead to systematic errors that compromise the quality of the data and the validity of the biological conclusions drawn from them. Therefore, it is essential to implement robust QC procedures to monitor and correct for these potential sources of variability.

## Quality control sample types
- **Blank sample (BL)**: Blank samples must be prepared by replacing the biological sample under study with water during the extraction process but using the same chemicals, labware, and SOPs as for real samples. 
- **Pool sample (PO)**: pool sample is prepared by mixing equal aliquots of each of the samples under investigation.
- **Clinical pool sample (CP)**: Clinical pool sample is prepared by uning a bulk representative sample. 
- **NIST sampl (NIST)**: Standard reference material (SRM) 1950 (Metabolites in Frozen Human Plasma) from the National Institute of Standards and Technology (NIST) can be used as a QC sample to assess the accuracy and reproducibility of metabolomics measurements.

All QC samples and study samples are spiked with a set of internal standards.

## QC procedures
The most frequent origin of systematic errors in metabolomics is deficient instrumental stability (e.g., loss in MS sensitivity or deterioration of chromatographic columns), which is ultimately mirrored in signal drifts according to the run order. 

### QC of internal standards
The m/z, RT, and peak intensity of internal standards can be plotted against the run order to monitor the mass accuracy, retention time drifts, and signal drift along the analytical run.

### QC of pooled samples
Pooled samples can be used to assess the overall analytical variability throughout the experiment. The relative standard deviation (RSD) of metabolite intensities in pooled samples can be calculated to evaluate the reproducibility of the measurements. Additionally, PCA scores plot should be used to examine if pooled samples cluster together, indicating consistent analytical performance.

### QC of NIST/CP samples
NIST/CP samples can be analyzed periodically throughout the analytical run to assess the accuracy and reproducibility of metabolomics measurements. The measured metabolite coverage and intensities can be compared between batches to evaluate consistency. The RSD of metabolite intensities in NIST samples can also be calculated to assess reproducibility.









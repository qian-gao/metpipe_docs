# QC of internal standards

The implementation of quality control strategies is crucial to monitor and control data quality along the entire analytical workflow, and consequently ensure the reproducibility, accuracy, and meaningfulness of metabolomics data.

Metabolite levels can be influenced by a myriad of preanalytical factors related to sample collection and preprocessing, conditions that must be tightly controlled to guarantee the metabolic integrity of biological samples under study. Besides, instrumental stability issues and fluctuations in analytical performance also have a negative impact on reproducibility and accuracy, especially when dealing with large-scale studies or complex samples. Along the experiment, the MS system may suffer from significant drifts in sensitivity, mass accuracy, retention time (RT), and peak resolution.

## Quality control sample types
- **Blank sample (BL)**: Blank samples must be prepared by replacing the biological sample under study with water during the extraction process but using the same chemicals, labware, and SOPs as for real samples. 
- **Pool sample (PO)**: pool sample is prepared by mixing equal aliquots of each of the samples under investigation.
- **Clinical pool sample (CP)**: Clinical pool sample is prepared by uning a bulk representative sample. 

All QC samples and study samples are spiked with a set of internal standards.

## QC procedures
The most frequent origin of systematic errors in metabolomics is deficient instrumental stability (e.g., loss in MS sensitivity or deterioration of chromatographic columns), which is ultimately mirrored in signal drifts according to the run order. 

### Detection of m/z, RT drift
To monitor the mass accuracy and retention time drifts during data aquisition, the m/z and RT of internal standards can be plotted with respect to their analytical run order to check for time-related trend in the data.   

### Detection of signal drifts
The peak intensity of internal standards can be plotted against the run order to monitor the signal drift along the analytical run. PCA scores plot should be used to examine if samples show a continuous drift or a homogeneous distribution. Pool samples should ideally cluster in the center of the plot.







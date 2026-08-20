# Untarged lipidomics/metabolomics method description

## Raw data preprocessing
Raw data were preprocessed using MZmine 4.9. Briefly, raw files were imported and processed through mass detection, chromatogram building, smoothing, chromatogram deconvolution, deisotoping, alignment, and gap filling, resulting in a feature table.

## Feature annotation
For feature annotation, feature m/z and retention times were first matched against an in-house library of authentic standards using an m/z tolerance of ms1_tol ppm and a retention time tolerance of 0.2 min. Subsequently, acquired MS/MS spectra were matched against both the in-house MS/MS library and the public spectral database containing ESI(+)-MS/MS spectra from authentic standards. Spectral matching was performed using a mass tolerance of ms2_tol ppm and a minimum spectral similarity score of 0.7. In addition, rule-based annotation was applied for lipid identification using diagnostic fragment ions. The following parameters were used for different anlaysis.

| Instrument | ms1_tol | ms2_tol |
| --- | --- | --- |
| Orbitrap | 5 ppm | 10 ppm |
| QTOF | 10 ppm | 20 ppm |

| Assay | Public spectral database |
| --- | --- |
| lipidomics | MoNA-export-LipidBlast_2022.msp |
| RP metabolomics | M_RP.HSS_AK_Exploris240_20260619.msp<br>MoNA-export-All_LC-MS-MS_Orbitrap.msp<br>MSMS-Public_experimentspectra-VS19.msp |


Annotated features were assigned an identification level according to confidence: 
- Level 1: compounds confirmed with authentic standards
- Level 2: putatively annotated compounds identified based on MS/MS spectral matching or diagnostic fragment evidence.

## Post processing
The resulting peak table was post-processed in R using the following filtering criteria: 
- (1) features were removed if their mean intensity in pooled QC samples was less than twice their mean intensity in blank samples; 
- (2) only features with a mean intensity greater than 100 in pooled QC samples were retained; 
- (3) features with a coefficient of variation (CV) greater than 30% in pooled QC samples were excluded; 
- (4) features with a correlation coefficient below 0.7 in the QC dilution series were removed; 
- (5) features with more than 50% missing values across samples were discarded. Then missing values were imputed using half of the minimum intensity observed for the respective feature.

The resulting features were normalized to the internal standard that exhibited the lowest coefficient of variation in pooled QC samples. Data acquired in positive and negative ionization modes were processed separately and merged after normalization to retain a single feature per compound.








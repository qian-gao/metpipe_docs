# Preprocessing

In general, the data preprocessing procedure is shown below:

![](image/preprocessing/flow.png)

## Construction of EICs
![](image/preprocessing/EIC.png)

## Peak detection
![](image/preprocessing/chromatogram_deconvolution.png)

### Issues:
- **Co-eluting metabolites**

![](image/preprocessing/co_eluting.jpg)

Example of deconvolution: three overlapping peaks were separated, making use of the mass spectral information. This results in a peak table with the response for all three individual metabolites and their corresponding mass spectrum

- **False positive peaks**

![](image/preprocessing/false_positive_peaks.png)

- **Difficulty in estimating boundries**

![](image/preprocessing/estimate_boundries.png)

## Alignment
![](image/preprocessing/align_1.png)
![](image/preprocessing/align_2.png)

## Gap filling
![](image/preprocessing/gap_filling.png)

## Identification
### MS1 level
Based on m/z and RT:

![](image/preprocessing/identification_1.gif)


### MS2 level
Based on MS2 spectrum matching

![](image/preprocessing/identify_ms2_1.jpg)

#### Match with different collision energy
![](image/preprocessing/identify_ms2_2.jpg)

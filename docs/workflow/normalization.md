# Normalization
Signal drift and batch effect
![Signal drift and batch effect](image/normalization/norm.png){ width="800" }
## Method
### General method
![Signal drift and batch effect](image/normalization/norm_general.png)

Sum / Mean / Median

Calculation: Imn / scaling factor 
After normalization, all samples have the same sum / mean / median

### Internal standard based method
![Signal drift and batch effect](image/normalization/norm_is.png)

Best internal standard / Lowest CV
NOMIS

Calculation: Imn / ISmp 
Internal standards are chosen based on CVn in pool samples

### Linear method
![Signal drift and batch effect](image/normalization/norm_lm.png)

Limma / Combat
Based on linear model
Consider the batch effect as a covariate and adjust for it

### Non-linear method
![Signal drift and batch effect](image/normalization/norm_nlm.png)

Lowess
Based on MA plot (LogFC vs mean) 
Model paired data as a function of mean intensity

### Signal-dependent non-linear method
![Signal drift and batch effect](image/normalization/norm_sdnlm.png)

Qspline
Based on distribution
Model paired data at different quantiles as a function of mean intensity

## Evaluation
![Signal drift and batch effect](image/normalization/norm_eval_pca.png)
![Signal drift and batch effect](image/normalization/norm_eval_box.png)

PCA plot, different QC samples
Pooled RSD / median absolute deviation (MAD) / variance in QC samples



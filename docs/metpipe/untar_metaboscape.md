# Untargeted metabolomics processing

## Preprocessing in Metaboscape
### Raw data import


### Feature processing


### Annotation
#### Lipid Species Annotation
The algorithm to distinguish lipid species utilizes accurate m/z ratio, isotopic pattern and CCS (if available) of the precursor, as well as MS/MS spectra.
The algorithm utilizes MS/MS rules derived from the literature to confirm lipid annotations based on class specific headgroup fragments, as well as chain fragments, 
which are used to reconstruct an annotation on the molecular species level. Deselecting this option allows annotations solely on accurate m/z, isotope pattern and 
CCS (if available), which can lead to a high number of false positive annotations.
The quality of a lipid annotation can be controlled using wide and narrow filters for annotation (Lipid Annotation Dialog, 5). The MS/MS score is the intensity 
coverage (sum of intensity of matched signals divided by the sum of intensities of all signals), multiplied by 10 to obtain numbers in the range of an MS/MS score 
from Spectral Library searches.

##### Recommended settings
m/z (ppm): 2/50?  
mSigma:50/250  
MS/MS: 800/300  
CCS (%): 1/3


#### Spectral library

##### Recommended settings
m/z (ppm): 2/10  
mSigma:50/250  	
MS/MS: 800/300  	
CCS (%): 1/3

#### Smart Formula

> **Recommended settings**  
m/z (ppm): 2/5  
mSigma: 20/100


### Export

## Post-preprocessing treatment in R
The post-preprocessing treatment is applied on the peaktables from positive mode and negative mode seperately and then merged together to become one final peaktable.

### Peak cleaning
The principles for peak cleaning are explained [here]().


```
params$mean.filter <- 
    list(c( 3, "BL", "<", "PO100"), # mean in PO should be > 3 times BL
         c( 1, "PO100", ">", 500))

params$rsd.filter <- c(1, "PO100", "<", 0.3)        # 0.3, RSD in PO should be < 30%
params$rt.range <- c(0.6, 30)         # Only keep peaks in 0 - 30 min 

params$filter_by_missing_feature_pct <- 50 # remove features with missings more than 50%
```

### Normalization

```
params$norm.method <- c("bestis", "low_cv", "pqn", "loess", "sum", "median")
```

### Merge and map feature info

```
params$path.datatable.pos <- paste0(params$path.result, "04_Normalization_comparison/", "pos_normalised_bestis.xlsx")
params$path.datatable.neg <- paste0(params$path.result, "04_Normalization_comparison/", "neg_normalised_bestis.xlsx")
```




# Missing imputation

## Types of missing values
* **Missing not at random (MNAR)**   

Missing values caused by under the limits of quantification (LOQ) are considered as MNAR

* **Missing at random (MAR)**   

MAR assumes the possibility of a variable being missing is determined by other observed variables. Thus, missing values due to suboptimal data preprocessing, e.g., inaccurate peak detection and deconvolution of co-eluting compounds, can be called MAR. 

* **Missing completely at random (MCAR)**   

Unexpected missing values are regarded as MCAR when they originate from random errors and stochastic fluctuations during the data acquisition process (e.g., incomplete derivatization or ionization).

## Missing imputation method
* **For MNAR**   

LOD: Limit of Detection
HM: Half of the Minimum
...

* **For MAR/MCAR**   

RF: Random forest
KNN: k Nearest Neighbors
... 


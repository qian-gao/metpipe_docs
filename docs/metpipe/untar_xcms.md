# Untargeted processing with XCMS

### findChromPeaks
![](image/untar_xcms/find0.png)

![](image/untar_xcms/find1.png)

![](image/untar_xcms/find2.png)

![](image/untar_xcms/find3.png)

### groupChromPeaks
![](image/untar_xcms/group0.png)

![](image/untar_xcms/group1.png)

### adjustRtime - PeakGroups
![](image/untar_xcms/adjustRT0.png)

### fillChromPeaks


### Group peaks
For soft ionisation methods such as LC/ESI-MS, different kind of ions besides
the protonated molecular ion occurs. These are adducts (e.g.[M + K]+,
[M+Na]+) and fragments (e.g. [M−C3H9N]+, [M+H−H20]+). Dependingon the molecule having an intrinsic charge, [M]+ may be observed as well. In most cases a substance generates a bulk of different ions. There interpretation is time consuming, especially if substances co-elute. Therefore deconvolution, which separates the different substances and discovery of the ion species is necessary.

#### CAMERA
The CAMERA annotation procedure can be split into two parts: We want to
answer the questions which peaks occur from the same molecule and secondly
compute its exact mass and annotate the ion species. Therefore CAMERA
annotation workflow contains following primary functions:

1. peak grouping after retention time (groupFWHM)
2. peak group verification with peakshape correlation (groupCorr)
Both methods separate peaks into different groups, which we define as "pseudospectra". Those pseudospectra can consists from one up to 100 ions, depending on the molecules amount and ionizability. Afterwards the exposure of the ion species can be performed with:
1. annotation of possible isotopes (findIsotopes, findIsotopesWithValidation)
2. annotation of adducts and calculating hypothetical masses for the group
(findAdducts)

#### pmd
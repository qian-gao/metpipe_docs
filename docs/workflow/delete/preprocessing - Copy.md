# Preprocessing

Raw data processing
The raw data processing consists of essentially two steps: Data import and Mass detection

Raw data import
Either open (e.g. mzML) and native vendor (e.g. Thermo, Bruker) data formats can be imported in MZmine 3. All the supported formats are listed here (LINK to Doc). For more details see the Data import module.

Mass detection
This step produces a list (referred to as "mass list") of the m/z values found in each MS scan across the LC run that exceed a user-defined threeshold (i.e. noise level). For more details see the Mass detection module.

Feature processing
The goal of the "Feature processing" is to obtain a list of all the detected features (characterized by a RT and m/z value) from the raw LC-MS data.

Chromatogram building
The first step in the "Feature processing" is to build the so-called extracted ion chromatograms (EICs) for each detected mass (see "Mass detection"). There are two modules in MZmine 3 that can fulfil this task: ADAP chromatogram builder (widely used) and Grid mass (create docs).

The "detected" features in each ﬁle are listed in the so-called "feature lists", which are then further processed and aligned to connect corresponding features across all samples.

Smoothing in retention time dimension (optional)
Depending on the LC peak shape (i.e. data noisiness), the user can perform smoothing in retention time dimension. For more details see the Mass detection and Smoothing modules.

Feature resolving
Feature resolving step enables separation of co-eluting and overlapping chromatography peaks and as such is one of the pivotal steps in data preprocessing. For more detalis on the algorithm used and parameters settings, see the Local minimum resolver module.

13C isotope filter (isotope grouper)
In order to remove redundant features, such as the ones generated due to the presence of isotopologues, isotope filter should be applied. 13C isotope filter (isotope grouper) removes 13C isotope features from the feature list. Use the isotope finder for more sensitive detection of possible isotope signals.

Isotope pattern finder
Isotope pattern finder searches for the isotope signals of selected chemical elements in the mass list of each feature. The isotope pattern detected by the isotope finder module has priority over the one detected by the isotope filter (grouper) module, if both are available. For more details, see the Isotope pattern finder module.

Feature alignment
Feature alignment enables alignment of corresponding features across all samples.

Join aligner
This module aligns detected peaks in different samples through a match score. The score is calculated based on the mass and retention time of each peak and ranges of tolerance stipulated in the parameter setup dialog. For more information, see the join aligner module.

Gap-filling
Absence of features in some samples can either reflect the truth - the metabolite is absent in the given sample, or it can be due to data preprocessing.To account for this, gap filling is applied as the next step.

Gap-filling (peak finder)
Gap-filling can be performed on the aligned feature lists to cope with missing features that might be artifacts of the feature-detection process. For more details see the Gap-filling (peak finder) module.

Export
Depending on the downstream analyses, there are several export options which are accessible through Feature list methods → Export feature list.



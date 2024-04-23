# LC-MS data structure

![](image/data_structure/data_structure.png)
This is the basic data structure from LC-MS analysis. The abundances of the ions are plotted as a total ion chromatogram (TIC). This plot displays the peak intensities of the analyte ions versus their RT. Further, each point in the chromatogram is associated with a mass spectrum. The mass spectrum depicts the ion abundances versus the measured m/z values.

## Nomenclature
![](image/data_structure/data.jpg)

- **Total ion chromatogram (TIC)**: The sum of all signals across all m/z.
- **Base peak chromatogram (BPC)**: The set containing the most intense signal for each RT across all m/z.
- **Spectrum**: A spectrum contains all points with a single RT value. 
- **Total ion spectrum (TIS)**: The sum of signals across all spectra. 
- **Extracted ion chromatogram (XIC)**: A slice of data containing a contiguous m/z range extending across all RT. 
- **Isotope trace**: The signal produced by a single ion of a single analyte (i.e., a peptide or a lipid) at a particular charge state.
- **Isotopic envelope trace**: The group of isotopic traces produced by a single analyte at a particular charge state. 

## MS data form
![](image/data_structure/centroid.png)

- **Profile (a)**: the raw data detected by a mass spectrometer consists of distributed signal across m/z values at each point where an ion is detected.
- **Centroid (b)**: the raw data has been reduced to data points that represent the local maxima in a single spectrum, a distribution of data over an m/z range for a given RT.






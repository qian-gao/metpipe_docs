# Data handling (supported formats)

MZmine supports both **open** (e.g., .mzML, .mzXML, .imzML, .netCDF, and .aird) and **proprietary**
formats from
Thermo Scientific .raw, and Bruker Daltonics .d and .tdf/tsf. All other raw data files from other
vendors must be converted into an open format prior to the import. Therefore, a vendor-provided or
third-party software can be used.

The **recommendations** for the data handling are the conversion of the raw data to centroided .mzML
data files,
except for timsTOF data (native .tdf and .tsf inside the Bruker .d folder), and the conversion of MS
imaging data
to .imzML, except for the timsTOF fleX MS imaging data.

## Data conversion to open formats (.mzML / .imzML)

### MSConvert (ProteoWizard) to mzML

MSConvert supports the conversion of AB SCIEX, Agilent, Bruker, Shimadzu, Thermo Scientific,
and [Waters](data_conversion.md#waters) raw data. More information about the formats can be found in
the [ProteoWizard Documentation for Users](https://proteowizard.sourceforge.io/doc_users.html).
Furthermore, profile data can be centroided to reduce the file size and memory consumption,
which can be important when processing larger datasets.

Recommended conversion settings for high-resolution MS data to mzML (newer than mzXML). Use **64 bit
** for _m/z_ to retain accuracy.
**Compression is optional** but reduces the size significantly without much information loss - this
might be instrument dependent though.

The **peak picking** filter needs to be the first in the list - otherwise MSConvert might default to
another algorithm
than the selected vendor-specific one. **Beware** that previous versions of MSConvert had the
titleMaker filter at the
first position and the peak picking algorithm was added manually and the position needed to be
switched accordingly to
peak picking first.

![](image/data_conversion/msconvert.png)




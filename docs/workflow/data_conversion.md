# Data conversion

Many LC–MS instruments generate data in **vendor-specific formats** (e.g., Bruker `.d`, Thermo `.raw`). These formats are often not directly supported by open-source tools used in metabolomics/lipidomics workflows. A standard first step is therefore to convert raw files into an **open format** (most commonly **`mzML`**) while preserving the information needed for downstream feature detection and QC.

---

## MSConvert (ProteoWizard)

[MSConvert](https://proteowizard.sourceforge.io/doc_users.html) from **ProteoWizard** supports conversion for AB SCIEX, Agilent, Bruker, Shimadzu, Thermo Scientific, and Waters data. It can also apply optional filters (e.g., vendor peak picking, compression) during conversion.

### Profile vs centroid data

- **Profile data** contain the raw instrument signal and are generally the most information-rich.
- **Centroid data** store only detected peaks and can be much smaller and faster to process.

Centroiding can be helpful for large studies, but it can also affect:
- low-intensity features,
- peak shapes,
- downstream peak detection/quantification depending on the software.

---

## Recommended conversion settings

These settings are typical for high-resolution MS1 (and MS/MS when present). Exact choices can be instrument- and workflow-dependent.

- **m/z precision**: use **64-bit** m/z to retain mass accuracy.
- **Compression**: optional, but usually recommended to reduce storage. If available, prefer **zlib** compression (widely supported).
- **Vendor peak picking (centroiding)**:
  - If centroiding during conversion, use the **vendor peak picking** option.
  - Make sure **Peak Picking** is the **first** filter in the filter list (ProteoWizard applies filters in order; placing it later can yield unexpected results).
- **Noise filtering** (optional): a **threshold** filter can reduce file size and noise, but be cautious—over-filtering can remove real low-abundance signals.

![](image/data_conversion/msconvert.png)

### Practical checklist

After conversion, verify:

- File count matches the number of injections (including blanks/QCs).
- Polarity handling is as expected (some instruments/methods generate separate files or separate scans).
- MS1/MS2 levels are present as expected (if MS/MS was acquired).
- RT and m/z ranges look plausible in a quick viewer (e.g., vendor software, Skyline, MZmine, or MSConvert preview).





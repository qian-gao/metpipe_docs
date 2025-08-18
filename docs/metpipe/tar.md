# Targeted peak picking

### 1. Introduction

Peak picking is a fundamental step in LC–MS and GC–MS data processing. While **untargeted peak picking** aims to detect all measurable features in a dataset, **targeted peak picking** focuses on predefined metabolites or lipids of interest, typically guided by prior knowledge, authentic standards, or library entries. This strategy provides higher specificity, reproducibility, and quantitative accuracy, making it indispensable for validation studies, biomarker panels, and clinical assays.

---

### 2. Principles of Targeted Peak Picking

* **Prior knowledge**: Targeted approaches rely on known retention times (RT), accurate masses (m/z), and often fragmentation patterns (MS/MS).
* **Narrow search windows**: Instead of scanning the full spectrum, features are extracted within strict RT and m/z tolerances (e.g., ±5 ppm, ±0.1 min).
* **Improved sensitivity**: By focusing only on known targets, noise and false positives are reduced.
* **Quantitative accuracy**: Often combined with internal standards for absolute or relative quantification.

---

### 3. Workflow for Targeted Peak Picking

1. **Define target list**:

   * Based on authentic standards, spectral libraries, or previously published biomarker panels.
   * Include expected RT, precursor ion m/z, and, if possible, MS/MS transitions.
2. **Extract chromatograms**:

   * Generate extracted ion chromatograms (EIC/XIC) for each target.
   * Use tight mass accuracy and RT windows.
3. **Peak detection and integration**:

   * Fit chromatographic peaks (Gaussian/Lorentzian models or simple integration).
   * Ensure consistency across replicates and QC samples.
4. **Quality control checks**:

   * Evaluate peak shape (symmetry, width).
   * Check signal-to-noise ratio (S/N > 10 is typical).
   * Compare against internal standards.
5. **Quantification**:

   * Absolute quantification: calibration curves with authentic standards.
   * Relative quantification: intensity ratios to internal standards.

---

### 4. Advantages of Targeted Peak Picking

* High reproducibility across studies.
* Lower computational burden compared to untargeted analysis.
* Stronger statistical power due to fewer multiple-testing corrections.
* Suitable for clinical translation and regulatory environments.

---

### 5. Limitations

* Restricted to known metabolites/lipids; novel discoveries are not captured.
* Dependent on accurate prior knowledge of RT and fragmentation.
* May miss isomeric or co-eluting compounds if monitoring windows are too narrow.

---

### 6. Applications

* **Biomarker validation**: Following discovery-phase studies.
* **Clinical assays**: E.g., monitoring lipid panels or amino acid profiles.
* **Quality control**: Tracking key metabolites to evaluate analytical stability.
* **Pharmacokinetics**: Quantifying drug metabolites and lipids in biological fluids.

---

### 7. Tools and Software

* **Vendor software**: Skyline, Analyst, Xcalibur (targeted MS workflows).
* **Open-source tools**: MZmine (targeted peak detection modules), Skyline (SRM/MRM and PRM), MS-DIAL targeted mode.
* **Integration into pipelines**: Can be combined with untargeted analysis to build hybrid workflows.

---

✅ **Summary**:
Targeted peak picking is a robust and efficient strategy for quantifying predefined metabolites and lipids. While it sacrifices discovery power compared to untargeted workflows, it provides unmatched accuracy, reproducibility, and suitability for clinical or regulatory contexts.

---

Would you like me to also draft a **step-by-step targeted peak picking workflow** (like I did for the full processing workflow), so you can use it as a practical checklist alongside this explanatory text?


# Quality control setup

Quality control (QC) is essential for producing **reliable and comparable** LC–MS metabolomics/lipidomics data. QC samples and procedures are used to (1) detect problems early (e.g., contamination, carryover, retention-time drift, sensitivity loss), (2) quantify analytical variability, and (3) support downstream steps such as filtering, normalization, and batch-effect handling.

Many sources of unwanted variation can affect measured intensities, including **pre-analytical factors** (collection, storage, extraction, plate effects) and **instrumental factors** (mass accuracy, ion-source condition, chromatographic aging, temperature changes). In long sequences and multi-day studies, these effects often appear as **systematic trends with run order** and/or **differences between batches**. A well-planned QC scheme makes these patterns observable and, where appropriate, correctable.

---

## QC sample types

| QC type | How it is prepared | Primary purpose | Typical use |
|---|---|---|---|
| **Blank (BL)** | Processed with the same solvents/chemicals/labware as study samples but **without biological material** (e.g., water or extraction solvent) | Identify **contaminants**, background, and **carryover** | Filter features present in blanks; diagnose contamination over time |
| **Pooled QC (PO)** | Equal (or representative) aliquots from many study samples mixed into one pool | Monitor **instrument stability** and analytical precision across the run | Inject regularly to assess drift; compute RSD; support QC-based normalization |
| **Dilution series (DS)** | Serial dilutions of a pooled QC or reference material | Assess **linearity** and dynamic range of features/targets | Optional; supports linearity checks and response factor estimation |
| **Reference material (e.g., NIST SRM)** | Certified/standard reference material (e.g., **NIST SRM 1950** for human plasma metabolomics) | Benchmark **comparability** and long-term performance | Periodic injections; compare coverage/response across batches and time |

---

## Internal standards (IS)
Internal standards are typically spiked into study samples and QC samples (as appropriate for the method) and used to monitor:

- **Retention time (RT)** stability
- **Mass accuracy (m/z)** stability
- **Signal response / sensitivity drift**

IS behavior is also used for diagnostic plots and, in some workflows, to support normalization or correction steps (method-dependent).

---

## Recommended placement in the analytical sequence

A common and defensible LC–MS sequence structure is:

1. **System suitability / conditioning** injections (method-specific; often includes pooled QC, blanks, dilution series and reference material)
2. Study samples with **regular QC injections** (e.g., pooled QC every 5–10 injections)
3. **Blanks** placed to monitor contamination and carryover (e.g., after high-concentration samples or at regular intervals)
4. End-of-run pooled QCs, blanks, reference materials and dilution series

For multi-day or multi-batch studies, ensure that each batch contains:

- A balanced mix of **biological groups** (design principle)
- The same QC scheme (pooled QC frequency, blanks, dilution series and reference material)

---

## Scope note
The QC principles above apply to both **untargeted** and **targeted** LC–MS workflows. Untargeted pipelines often rely more heavily on pooled-QC-driven diagnostics and feature filtering, while targeted assays may emphasize calibration/QC levels and acceptance criteria defined by the assay SOP.









# Merge peaklist and map information

After post-processing (cleaning, missingness filtering/imputation, normalization), the processed peaklists from **positive** and **negative** ion mode are merged into a single final table. The merge step should (1) avoid duplicating the same compound reported in both modes, and (2) attach consistent compound metadata from the identification/library results.

The exact merge logic depends on how identification is represented in your pipeline (feature-level annotation vs compound-level identification). The procedure below assumes you have a column that represents the **same compound identity** in both modes (e.g., InChIKey, library ID, or curated compound name).

---

## General procedures

### 1) Harmonize identifiers and columns

Before merging, ensure both mode-specific peaklists use the same:

- sample column names and sample order
- intensity scale (raw vs log) and normalization status
- key identifier columns (e.g., InChIKey, library ID) that will be used for merging

### 2) Remove redundant feature entries across compounds
If your peaklists are still at the feature level (m/z–RT) rather than compound level, you may have multiple features corresponding to the same compound (e.g., different adducts, isotopes, or in-source fragments). Consider removing redundant features to simplify downstream analysis.

- If you have identified adducts/in-source fragments, keep only one representative feature per compound (e.g., the most abundant adduct).

### 3) Remove redundant compound entries across modes

If a compound is detected/annotated in both modes, choose a single representative entry per compound.

Suggested decision order (use the first applicable rule and document it):

- **Prefer higher-confidence identification** (e.g., MS/MS match score, identification level, or manual validation flag).
- If confidence is similar, prefer the mode with **better analytical quality**:
	- lower pooled-QC CV% (more precise)
	- lower missingness in study samples
- If quality is similar, keep the entry with higher **typical signal** in study samples (e.g., higher median/mean intensity).

> Notes:

> - Only merge across modes when you are confident two rows represent the **same compound identity**. If identity is uncertain, keep both and mark the mode/adduct explicitly.
> - If you still work at feature level (m/z–RT) rather than compound level, avoid merging solely by similar m/z/RT across modes; positive/negative adduct chemistry makes that unreliable.

### 4) Map compound metadata from the library/annotation table

Attach compound-related metadata to the final output table (ideally Metabolomics Workbench IDs). Typical fields include:

- Molecular formula
- Monoisotopic mass
- HMDB ID
- KEGG ID
- PubChem CID
- SMILES
- InChIKey
- Metabolite / lipid class

If multiple library hits exist for the same key (e.g., synonyms or isomers), define a rule to select a primary record (e.g., highest score or curated preferred name) and keep alternative hits in separate columns if needed.







# Pathway analysis

This section follows the central message of **“Metabolites are not genes — avoiding the misuse of pathway analysis in metabolomics” (2025)**: pathway analysis in metabolomics/lipidomics requires extra care because metabolite coverage, mapping, and pathway overlap behave very differently than gene-centric data. Pathway results should usually be interpreted as **pathway-consistent signals** (context), not as definitive proof that a specific pathway is “activated”.

## Why pathway analysis is different for metabolites (vs genes)

- **Many-to-many mapping is common**: one MS feature can map to multiple candidate metabolites; one metabolite often belongs to **multiple pathways**.
- **Pathway “entanglement”**: pathways overlap heavily in metabolite space; ubiquitous “hub” metabolites (e.g., ATP, NAD(H), acetyl-CoA; also common lipid backbones) can make many pathways appear significant.
- **Sparse and biased coverage**: especially for targeted metabolomics (and many lipidomics panels), only a subset of the metabolome is measured and this subset is platform/method dependent.
- **Identification uncertainty propagates**: pathway results are only as good as the metabolite IDs and mapping rules; isomer ambiguity can directly translate into pathway ambiguity.
- **Directionality is less straightforward**: unlike transcript abundance, metabolite abundance reflects production/consumption, transport, compartmentation, and regulation; a “pathway change” is rarely captured by one metabolite.

Practical implication: pathway tools are best used to **summarize patterns** and **generate hypotheses**, then followed by targeted validation.

## Enrichment analysis
Enrichment (metabolite set enrichment analysis, MSEA) tests whether a **set of metabolites** associated with a pathway or chemical class shows a stronger signal than expected.

Typical inputs (depending on method/tool):

- a list of significant metabolites (or annotated features)
- a ranked list (e.g., by statistic)
- a quantitative table (samples × metabolites)

Key requirement: define the correct **background/universe**.

- Unlike transcriptomics, metabolomics/lipidomics usually does **not** measure “all possible metabolites”. Many metabolites in a database have zero probability of being observed in your assay.
- If the tool supports it, provide a **reference metabolome** (all metabolites measurable by your platform/method) or use the set of metabolites that passed QC as the universe.

Interpretation:

- Enrichment results are sensitive to shared metabolites across pathways. Expect related pathways to co-appear.
- Prefer statements like “signals consistent with …” rather than declaring a specific pathway is activated.

## Pathway analysis
Metabolomics pathway analysis typically combines:

- **set-level statistics** (enrichment / over-representation / rank-based)
- **topology-aware scoring** (optionally weighting metabolites by their role/location in the pathway network)

Use cases:

- Summarize which biological processes are most consistent with observed metabolite changes.
- Prioritize pathways for follow-up (targeted measurement, flux, enzyme assays, genetic perturbations).

Common pitfalls:

- Treating the pathway database as ground truth: pathway definitions are curated and incomplete and can differ by resource/version.
- Over-interpreting “top pathways” when only a few shared metabolites drive significance.
- Ignoring identification confidence (putative IDs and ambiguous mapping inflate false specificity).

## Network analysis
Network analysis places metabolites (and optionally genes/enzymes) into a graph context (e.g., global metabolic networks or curated association networks) to support exploration.

Use it to:

- visualize connectivity among measured metabolites
- identify clusters/modules that may reflect shared biochemistry
- inspect whether “significant pathways” are driven by a few hub metabolites

Network visualization is best treated as **interpretation support**, not confirmation.

## Common tools (examples)

The choice of tool depends on whether you start from **confident metabolite IDs**, **putative annotations**, or **MS features**. Regardless of tool, apply the same principles above (mapping transparency, appropriate background, and conservative interpretation).

- **MetaboAnalyst**: enrichment (MSEA) and pathway analysis (enrichment + topology), plus visualization.
- **MetaboAnalystR**: R interface enabling scripted, reproducible analyses using MetaboAnalyst methods.
- **mummichog**: feature-to-pathway activity prediction for untargeted LC–MS when metabolite IDs are incomplete.
- **GSEA-style / rank-based methods** (implemented in multiple toolkits): use ranked metabolite lists to reduce dependence on hard cutoffs.
- **ChemRICH**: chemical similarity enrichment as an alternative to pathway databases (useful when pathway mapping is sparse/ambiguous).
- **Cytoscape** (with pathway/network apps): flexible network visualization and integration of metabolites/genes; interpretation depends on the chosen network resource.

Lipid-focused pathway/context tools vary by database coverage. Common choices include lipid class enrichment and pathway-context approaches provided by platform-specific tools and lipid resources (report the database/resource and version used).

## Recommended workflow (practical and defensible)
1. **Decide what you want to claim**
   - Hypothesis generation and biological context (typical)
   - Narrow pathway support for a specific mechanism (requires stronger evidence)

2. **Define inputs and identification confidence**
   - Prefer **identified metabolites** and record confidence levels.
   - If using **putative annotations/features**, state this clearly and keep pathway claims exploratory.

3. **Make mapping rules explicit**
   - Report which identifiers you use (HMDB/KEGG/ChEBI/InChIKey).
   - Define how you handle ambiguous matches (keep all candidates vs select one; how ties are resolved).

4. **Pick an analysis method aligned with the input**
   - **ORA/MSEA on a significant list**: simple, but sensitive to thresholds and overlap.
   - **Rank-based approaches**: less dependent on arbitrary cutoffs.
   - **Topology/network-aware scoring**: can improve prioritization but does not eliminate overlap/ambiguity.

5. **Use an assay-appropriate universe/background**
   - Avoid “all metabolites in the database”.
   - Use metabolites measurable/detectable in your assay (or the QC-passing set).

6. **Summarize results as themes and show the drivers**
   - Group redundant pathways into **themes**.
   - For each theme/pathway, list the contributing metabolites/features, their direction of change, and confidence.

### Interpretation guidelines (wording to avoid over-claiming)
- Prefer: **“The data show a pathway-consistent pattern involving …”**
- Avoid: **“Pathway X is activated/inhibited”** unless you have strong mechanistic evidence, good pathway coverage, and an analysis design that supports directionality.
- Treat pathway output as **contextualization**, not validation.

## Minimum reporting checklist
- Database(s) used (KEGG/Reactome/MetaCyc/etc.) + version/date.
- ID mapping rules (including ambiguous matches) and confidence levels of inputs.
- Background set definition.
- Method (ORA / rank-based / topology / feature-inference) + parameters.
- Multiple testing correction approach.
- For each reported pathway: list of contributing metabolites/features + effect directions.

**Reference:** *Metabolites are not genes — avoiding the misuse of pathway analysis in metabolomics* (2025).



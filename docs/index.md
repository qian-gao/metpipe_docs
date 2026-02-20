# metpipe documentation

metpipe provides a reproducible workflow for **metabolomics and lipidomics** data processing, from raw/feature-level data to quality control (QC), post-processing, evaluation, and statistical interpretation.

---

## Workflow

This documentation describes recommended computational practices for metabolomics/lipidomics, including:

- **Study design and data organization** (randomization, QC setup, data conversion, LC-MS data structure)
- **Preprocessing** (e.g., feature detection, filtering, missingness handling, normalization)
- **Quality control (QC)** and diagnostic reporting  
- **Post-processing** (e.g., feature cleaning, imputation, normalization)  
- **Data evaluation** (e.g., QC metrics, batch effects, drift) 

The goal is to support **transparent and reproducible** analyses across studies.

---

## R package: metpipe

**metpipe** is an R package for metabolomics/lipidomics data processing. It implements core pipeline steps with an emphasis on:

- Consistent handling of **sample metadata** and analytical batches  
- Built-in **QC** and summary reporting  
- Standardized outputs that are easy to use in downstream statistical workflows  

---

## Web application: Data explorer

**Data explorer** is a Shiny web application built on top of **metpipe**. It provides an interactive interface to:

- Run common processing steps without writing code  
- Explore QC metrics and data structure  
- Generate plots and export processed datasets  

Use the package for scripted, reproducible pipelines; use the app for interactive inspection of results.
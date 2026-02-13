# metpipe documentation

metpipe provides a reproducible workflow for **metabolomics and lipidomics** data processing, from raw/feature-level data to quality control, post processing, evaluation and differential analysis.

---

## Workflow

This documentation describes recommended computational practices for metabolomics/lipidomics, including:

- **Project organization** and metadata conventions  
- **Data import** and format expectations  
- **Quality control (QC)** and diagnostic reporting  
- **Pre-processing** (e.g., filtering, normalization, transformation)  
- **Exploratory analysis** and visualization  
- **Export** of analysis-ready outputs for statistics and interpretation  

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
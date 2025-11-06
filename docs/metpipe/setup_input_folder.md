## Standardized workflow

The only input needed is the subfolder name where the raw/mzML data is stored (e.g. PL_LIPS_PASEF). The subfolder naming should follow the standard naming convention as shown in the figure below (i.e. Matrix_Assay_method). The data file naming should follow the standard naming convention (i.e. Project ID_Assay Method Polarity_Date_Run Seq_Sample Name_Extraction Replicate_Technical Replicate, e.g. MP000_LIPSPASEFp_09092025_004_BL_1_1).

![Project subfolder naming](image/project_subfolder_naming.png)

### Supported assays and methods
The pipeline current supports the following assays and methods:  

- Assays: Lipidomics (LIPS, LIPL), Metabolomics (RP, zHILIC)
- Methods: FDDA*, PASEF

\* Currently FDDA files need to be converted to mzML format before processing.

### Default library setting
The pipeline will automatically link the in-house MS1/MS2 libraries and public spectral libraries based on the assay detected from the subfolder name. The default library settings are as follows:

- Lipidomics (LIPS, LIPL):
  - In-house MS1 library (internal standards only)
    - MP_ISTD_mzmine_Lipidomics_4min_pos_20250507.csv
    - MP_ISTD_mzmine_Lipidomics_4min_neg_20250507.csv
    - MP_ISTD_mzmine_Lipidomics_10min_pos_20250507.csv
    - MP_ISTD_mzmine_Lipidomics_10min_neg_20250507.csv
  - Public spectral library
    - MoNA-export-LipidBlast_2022.msp

- Metabolomics (zHILIC):
  - In-house metabolite library (internal standards and standards)
    - MP_library_mzmine_zHILIC_neg_20251023.csv
  - In-house MS2 library
    - MP_metabolomics_RP_60.msp
  - Public spectral library
    - MSMS-Public_experimentspectra-VS19.msp

### Example for plasma lipidomics analysis with short PASEF method

#### Folder structure

```yaml
- Projects
  - MP001
    - raw
      - PL_LIPS_PASEF
        - pos
        - neg
```

The 'PASEF' in the subfolder name indicates the acquisition method used. This means in pos/neg folders, all the data files should be PASEF data files.   

### Example for plasma metabolomics analysis with zHILIC column with full scan and DDA acquisition

#### Folder structure

```yaml
- Projects
  - MP001
    - mzML
      - PL_zHILIC_FDDA
        - neg
```

The 'FDDA' in the subfolder name indicates the acquisition method used. This means in neg folder, all the data files should be either full scan or DDA data files, and both types need to exist. For DDA data files, the file name should contain 'DDA' in the Assay method part (e.g. MP001_zHILICDDAn_15102025_000_PO_1_1).



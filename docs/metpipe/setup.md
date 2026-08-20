# Standardized workflow

The only input needed is the subfolder name where the raw/mzML data is stored (e.g. PL_LIPS_PASEF). The subfolder naming and data file naming should follow the standard naming convention as shown in the figure below. The pipeline will automatically detect the assay and method from the subfolder name and link the corresponding in-house and public libraries for data processing.

-   Subfolder naming: Matrix_Assay_Analysis
-   Data file naming: Project ID_Assay Method Polarity_Date_Run Seq_Sample Name_Extraction Replicate_Technical Replicate, e.g. MP000_LIPSPASEFp_09092025_004_BL_1_1.

------------------------------------------------------------------------

## Supported assays and methods

The pipeline current supports the following assays and analysis.

### Assays

| Abbreviation | Assay                        |
|--------------|------------------------------|
| LIPS         | Lipidomics BuMe short method |
| LIPL         | Lipidomics BuMe long method  |
| zHILIC       | zHilic method                |
| RP           | Reverse phase method         |

### Analysis

| Abbreviation | Instrument | Analysis |
|------------------------|------------------------|------------------------|
| PASEF | QTOF with TIMS on | PASEF for all samples |
| FDDA | QTOF with TIMS off | Full scan for all samples + DDA for pools |
| FPASEF | QTOF with TIMS off/on | Full scan for all samples + PASEF for pools |
| MS1 | QTOF with TIMS off | Full scan for all samples |
| OFDDA | Orbitrap | Full scan for all samples + DDA for pools |
| OMS1 | Orbitrap | Full scan for all samples |
| OPSFDDA | Orbitrap with polarity switch | Full scan for all samples + DDA for pools |

\* Currently FDDA files need to be converted to mzML format before processing.

------------------------------------------------------------------------

## Default library setting

The pipeline will automatically link the in-house MS1/MS2 libraries and public spectral libraries based on the assay detected from the subfolder name. The default library settings are as follows:

### Data processing pipelines

| Assay | Analysis | istd_lib_pos | istd_lib_neg | spectral_lib | mzmine_params |
|------------|------------|------------|------------|------------|------------|
| LIPS | PASEF | MP_ISTD_mzmine_Lipidomics_4min_pos_20250507.csv | MP_ISTD_mzmine_Lipidomics_4min_neg_20250507.csv | MoNA-export-LipidBlast_2022.msp | lipidomics_untargeted_pasef.mzbatch |
| LIPS | FDDA | MP_ISTD_mzmine_Lipidomics_4min_pos_20250507.csv | MP_ISTD_mzmine_Lipidomics_4min_neg_20250507.csv | MoNA-export-LipidBlast_2022.msp | lipidomics_untargeted_dda.mzbatch |
| LIPL | PASEF | MP_ISTD_mzmine_Lipidomics_10min_pos_20250507.csv | MP_ISTD_mzmine_Lipidomics_10min_neg_20250507.csv | MoNA-export-LipidBlast_2022.msp | lipidomics_untargeted_pasef.mzbatch |
| LIPL | FDDA | MP_ISTD_mzmine_Lipidomics_10min_pos_20250507.csv | MP_ISTD_mzmine_Lipidomics_10min_neg_20250507.csv | MoNA-export-LipidBlast_2022.msp | lipidomics_untargeted_dda.mzbatch |
| zHILIC | PASEF |  | MP_library_mzmine_zHILIC_neg_20251023.csv | MSMS-Public_experimentspectra-VS19.msp<br>MP_metabolomics_RP_60.msp | hilic_untargeted_pasef.mzbatch |
| zHILIC | FDDA |  | MP_library_mzmine_zHILIC_neg_20251023.csv | MSMS-Public_experimentspectra-VS19.msp<br>MP_metabolomics_RP_60.msp | hilic_untargeted_dda.mzbatch |
| RP | PASEF | MP_library_mzmine_RP_pos_20260415.csv | MP_library_mzmine_RP_neg_20260415.csv | MSMS-Public_experimentspectra-VS19.msp<br>MP_metabolomics_RP_60.msp | metabolomics_untargeted_pasef.mzbatch |
| RP | FDDA | MP_library_mzmine_RP_pos_20260415.csv | MP_library_mzmine_RP_neg_20260415.csv | MSMS-Public_experimentspectra-VS19.msp<br>MP_metabolomics_RP_60.msp | metabolomics_untargeted_dda.mzbatch |
| LIPS | FPASEF | MP_ISTD_mzmine_Lipidomics_4min_pos_20250507.csv | MP_ISTD_mzmine_Lipidomics_4min_neg_20250507.csv | MoNA-export-LipidBlast_2022.msp | lipidomics_untargeted_dda.mzbatch |
| LIPL | FPASEF | MP_ISTD_mzmine_Lipidomics_10min_pos_20250507.csv | MP_ISTD_mzmine_Lipidomics_10min_neg_20250507.csv | MoNA-export-LipidBlast_2022.msp | lipidomics_untargeted_dda.mzbatch |
| RP | MS1 | MP_library_mzmine_RP_pos_20260415.csv | MP_library_mzmine_RP_neg_20260415.csv |  | metabolomics_untargeted_ms1.mzbatch |
| RP | OFDDA | MP_library_mzmine_RP_pos_orbitrap_20260410.csv | MP_library_mzmine_RP_neg_orbitrap_20260410.csv | M_RP.HSS_AK_Exploris240_20260619.msp<br>MoNA-export-All_LC-MS-MS_Orbitrap.msp<br>MSMS-Public_experimentspectra-VS19.msp | metabolomics_untargeted_orbitrap_dda.mzbatch |
| RP | OMS1 | MP_library_mzmine_RP_pos_orbitrap_20260410.csv | MP_library_mzmine_RP_neg_orbitrap_20260410.csv |  | metabolomics_untargeted_orbitrap_ms1.mzbatch |
| RP | OPSFDDA | MP_library_mzmine_RP_pos_orbitrap_20260410.csv | MP_library_mzmine_RP_neg_orbitrap_20260410.csv | M_RP.HSS_AK_Exploris240_20260619.msp<br>MoNA-export-All_LC-MS-MS_Orbitrap.msp<br>MSMS-Public_experimentspectra-VS19.msp | metabolomics_untargeted_orbitrap_dda.mzbatch |

------------------------------------------------------------------------

## Example for plasma lipidomics analysis with short PASEF method

### Folder structure

``` yaml
- Projects
  - MP001
    - raw
      - PL_LIPS_PASEF
        - pos
        - neg
```

The 'PASEF' in the subfolder name indicates the analysis performed. This means in pos/neg folders, all the data files should be PASEF data files.

------------------------------------------------------------------------

## Procedures

### Standardized workflow
#### Input

The only input needed is the subfolder name where the raw/mzML data is stored (e.g. PL_LIPS_PASEF). The subfolder naming should follow the standard naming convention as shown in the figure below (i.e. Matrix_Assay_method). The data file naming should follow the standard naming convention (i.e. Project ID_Assay Method Polarity_Date_Run Seq_Sample Name_Extraction Replicate_Technical Replicate, e.g. MP000_LIPSPASEFp_09092025_004_BL_1_1).

#### Processing

The workflow is executed in two sequential steps:

- Prepare workflow  
  This step parses the input (the project subfolder containing raw/mzML files), inspects the files to infer assay- and file-specific settings, and generates all required parameters (for example: preprocessing options, library paths, and other assay-specific settings). All parameters are written to config.yml for use by the next step.

- Run workflow  
  This step reads the config.yml produced by prepare_workflow and executes the preprocessing and downstream processing (e.g., peak detection, alignment, and annotation) according to those parameters. Processing logs and result files are written to the project output directory.

### Non-standardized workflow
For non-standardized workflows, the core processing steps are the same as for the standardized workflow. prepare_workflow still generates a default config.yml, but users may edit its parameters to accommodate non-standard inputs (for example, to point to an alternative library, change preprocessing or filtering thresholds, or modify assay-specific settings).

## Step by step guidance for standardized workflow

### Input
The input is the subfolder name where the raw/mzML data is stored. The pipeline will automatically detect all the files in the subfolder and generate the parameters needed for processing. The in-house library and public spectral libraries will be automatically linked based on the assay and method. The pipeline will also detect the sample types (e.g., BL, PO, NIST) and running sequence based on the standardized sample naming convention. 

With the standardized naming convention, no further input is needed from the user.

### Prepare workflow
To prepare the workflow, run the following command in powershell:
```powershell
docker run -it `
    -v E:/:/mnt/e `
    qiangao/metpipe:0.1 `
    Rscript /wd/prepare_standard_workflow.R --raw "/mnt/e/Projects/MP_workshop/raw/PL_LIPS_PASEF"
```
This command mounts the E: drive to the Docker container and runs the `prepare_standard_workflow.R` script, specifying the raw data location. Adjust the raw folder paths and the dirve where the raw data is stored as necessary for your system. Note that the raw folder path inside the Docker container should start with `/mnt/` and use forward slashes.

### Check generated config.yml
After running the prepare_workflow step, a `config.yml` file will be generated in the output directory. Review this file to ensure that all parameters are correctly set for your dataset. If you are using a non-standardized workflow, you may need to edit this file to adjust settings such as library paths or preprocessing options.

The `config.yml` file contains all the necessary parameters for the subsequent processing step, including:

#### Input and output paths
- path_raw: path to raw/mzML files
- path_result: path to output results 

#### Preprocessing in MZMine
- mzmine_params: MZMine parameters
- mzmine_threads: MZMine number of threads

#### Library used for preprocessing
- path_lib_istd_pos/path_lib_istd_neg: path to in-house library including internal standards
- path_spectral_lib: path to spectral library

#### Post-processing parameters
##### Filtering

- mean.filter: mean filter threshold, e.g. 2*BL < PO (meaning features with mean intensity in PO samples more than two times the mean intensity in BL samples will be kept).  
```yaml
- - '2'  
- BL  
- <  
- PO  
```

- rsd.filter: RSD filter threshold, e.g. 30 (meaning features with RSD less than 30% in PO samples will be kept).  
```yaml
- - '1'
- PO
- <
- '0.3'
```  

- rt.range: retention time range to keep, e.g. (0, 30) (meaning features with retention time between 0 and 30 minutes will be kept).  
```yaml
- 0
- 30
```
   
- filter_by_missing_feature_pct: filter features by missing percentage across all specific type of samples, e.g. 50 (meaning features with less than 50% missing values across all specific type of samples will be kept).
- filter_by_missing_sample_type: sample types used for missing value filtering, e.g. PO (meaning only PO samples will be used for missing value filtering).
- outliers.sample: sample names to be considered as outliers and removed from further processing, e.g. BL_1_3, PO_1_1.  
```yaml
- BL_1_3
- PO_1_1
```

- clean.po.sample.to.use: sample types used for cleaning duplicate features, e.g. PO (meaning only PO samples will be used for cleaning duplicate features)

##### Imputation
- impute.method.sample: imputation method for sample missing values, e.g. HF, LoD, median, min, mean, knn.  
- impute.method.is: imputation method for internal standard missing values

##### Normalization
- norm.po.sample.to.use: sample types used for normalization, e.g. PO
- norm.method: normalization method, e.g. bestis, low_cv, median, sum, pqn, loess, combat, limma.   
```yaml
- bestis
- low_cv
- sum
- median
```
- sample.type.keep: sample types to keep for further analysis after normalization, e.g. PO, NIST.  
```yaml
- PO
- NIST
```

##### Merge positive and negative mode data
- final.norm: final normalization method to choose
- final.eval.sample.to.use: sample types used for cleaning duplicate features in the final merged data.
- final.sample.type.keep: sample types to keep for further analysis in the final merged data.  
```yaml
- PO
- NIST
```
##### Metadata   
- raw_files_pos: list of raw/mzML files in positive mode
- meta_pos: metadata positive mode data, e.g. Sample.type, Run.seq
- raw_files_neg: list of raw/mzML files in negative mode
- meta_neg: metadata hegative mode data, e.g. Sample.type, Run.seq

### Run workflow
To execute the full processing workflow, run the following command in powershell:
```powershell
docker run -it `
    -v E:/:/mnt/e `
    qiangao/metpipe:0.1 `
    Rscript /wd/run_workflow.R --raw "/mnt/e/Projects/MP_workshop/peaktable/PL_LIPS_PASEF/config.yml"
```
In this step, the `run_workflow.R` script is executed, using the `config.yml` file generated in the previous step. Adjust the paths as necessary for your system. The processing logs and result files will be written to the output directory specified in config.yml.

### Re-run workflow
#### Re-run MZMine preprocessing with modified parameters
In the initial run of the workflow, default MZMine processing parameters are generated and saved in pos/neg folders inside the result folder. To modify and re-run MZMine preprocessing with custom parameters, edit the `mzmine_parameters_pos/neg.mzbatch` files in the respective pos/neg folders. After making the desired changes, remove the preprocessing output files in the previous run in pos/neg folder, and execute the run_workflow.ps1 script again.

To better understand the MZMine parameters, the .mzbatch files can be opened in MZMine GUI (Project -> Batch mode -> Load). After editing and saving the parameters in MZMine GUI, export the updated parameters back to the .mzbatch files. Then, re-run the run_workflow.R script as shown above.

#### Re-run downstream processing with modified parameters
To re-run the downstream processing with modified parameters (e.g., filtering thresholds, normalization methods), edit the `config.yml` file generated in the prepare_workflow step. After making the desired changes, execute the run_workflow.ps1 script again.


### Output
All the output files will be saved in the specified result folder (path_result in config.yml). The main output files include:

- pos/neg folders: MZMine preprocessing output files for positive and negative mode data, respectively.
- qc_report.html: Quality control report summarizing the internal standards in all samples. Based on prerpocessed peaktable before post-processing.
- peaktable_pos/neg.xlsx: Preprocessed peaktable, before post-processing. 
- peaktable_istd_pos/neg.xlsx: Preprocessed peaktable including only internal standards.
- post_processing.html: Documentation of post-processing steps applied to the data, including filtering, imputation, normalization, and merging of positive and negative mode data.
- evaluation.html: Evaluation report summarizing the missing distribution, qc of internal standard, normalization comparison, batch evaluation and annotation summary. Based on post-processed peaktable.
- datatable.xlsx: Final processed data table after post-processing, including merged positive and negative mode data and feature annotations and database mappings.

```powershell 

## One step command
To run the entire workflow in a single step, you can use the following command in powershell:
```powershell
docker run -it `
    -v E:/:/mnt/e `
    qiangao/metpipe:0.1 `
    Rscript /wd/prepare_run_workflow.R --raw "/mnt/e/Projects/MP_workshop/raw/PL_LIPS_PASEF"
```

## Notes for non-standardized workflow

The 








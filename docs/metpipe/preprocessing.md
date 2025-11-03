## Procedures

### Standardized workflow
#### Input

The only input needed is the subfolder name where the raw/mzML data is stored (e.g. PL_LIPS_PASEF). The subfolder naming should follow the standard naming convention as shown in the figure below (i.e. Matrix_Assay_method). The data file naming should follow the standard naming convention (i.e. Project ID_Assay Method Polarity_Date_Run Seq_Sample Name_Extraction Replicate_Technical Replicate, e.g. MP000_LIPSPASEFp_09092025_004_BL_1_1).

![Project subfolder naming](image/project_subfolder_naming.png)

#### Processing

The workflow is executed in two sequential steps:

- Prepare workflow  
  This step parses the input (the project subfolder containing raw/mzML files), inspects the files to infer assay- and file-specific settings, and generates all required parameters (for example: preprocessing options, library paths, and other assay-specific settings). All parameters are written to config.yml for use by the next step.

- Run workflow  
  This step reads the config.yml produced by prepare_workflow and executes the preprocessing and downstream processing (e.g., peak detection, alignment, and annotation) according to those parameters. Processing logs and result files are written to the project output directory.

### Non-standardized workflow
For non-standardized workflows, the core processing steps are the same as for the standardized workflow. prepare_workflow still generates a default config.yml, but users may edit its parameters to accommodate non-standard inputs (for example, to point to an alternative library, change preprocessing or filtering thresholds, or modify assay-specific settings).

## Step by step guidance

### Input
The input is the subfolder name where the raw/mzML data is stored. The pipeline will automatically detect all the files in the subfolder and generate the parameters needed for processing. The in-house library and public spectral libraries will be automatically linked based on the assay and method. The pipeline will also detect the sample types (e.g., BL, PO, NIST) and running sequence based on the standardized sample naming convention. The pipeline current supports the following assays and methods:
- Assays: Lipidomics (LIPS, LIPL), Metabolomics (RP, zHILIC)
- Methods: FDDA*, PASEF

With the standardized naming convention, no further input is needed from the user.

* Currently FDDA files need to be converted to mzML format before processing.

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
- outliers.sample: sample names to be considered as outliers and removed from further processing, e.g. BL_1_3.
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

## One step command
To run the entire workflow in a single step, you can use the following command in powershell:
```powershell
docker run -it `
    -v E:/:/mnt/e `
    qiangao/metpipe:0.1 `
    Rscript /wd/prepare_run_workflow.R --raw "/mnt/e/Projects/MP_workshop/raw/PL_LIPS_PASEF"
```








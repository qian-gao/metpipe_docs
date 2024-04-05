# Data explorer user guide
An instruction

# Generate sample list

### Input
#### Original sample name file:
xlsx file should contain at least four columns - Name, Project, Method, Date
1. Name: put sample names in this column
2. Project, Method, Date only need input in the first row
3. Method: should be filled in without ionization mode
4. Date: DDMMYYYY, e.g. 10112021

#### Set QC samples
Initial block of samples: samples at the beginning of the run
Cycle block of samples: samples repeating during the run
Final block of samples: samples at the end of the run
Cycle size: number of samples between cycle blocks

#### Sample type
sol: solvent
BL: extraction blank
PO: pool
PO-12-5, PO-25, PO-50, PO-100: pool sample with different dilution
CP: clinical pool
BP: batch pool
NIST: NIST SRM 1950 plasma
CAL: calibration curve
IQ: QC samples
M-Mix: Master mix

#### Customize plate
If samples already have fixed positions on the plate, these information should be provided in column 'Position' in the uploaded sample name file

#### Randomization
Block randomization:
Extra columns with stratum variables need to be provided in the sample name file
If subject is used as stratum, it should be provided in column 'Subject' in the uploaded sample name file



# Match library
#### Peak table file
xlsx file should contain sheets named either 'POS' or 'NEG' indicating ionization mode:
1. If match peaktable by identity, there should be at least one column names 'Identity', which is the identity of the feature. This identity should be from the column 'Library.name' from library
2. If match peaktable by RT and m/z, the first three columns should be 'id', 'rt', 'mz'



# RT mapping

#### Retention time mappping file:
Consist of 2 sheets (Method 1) or 3 sheets (Method 2)
Method 1:
- Sheet 1: two columns of retention time from analytical method a and b, columm 'Identity' is optional
- Sheet 2: one column of retention time to predict from analytical method a, columm 'Identity' is optional. Retention time in analytical method b will be predicted

Method 2:
- Sheet 1: peaktable from analytical method a, the first 3 columns are - retention time, m/z, identity. Samples start from 4th column
- Sheet 2: peaktable from analytical method b, same format as Sheet 1
- Sheet 3: one column of retention time to predict from analytical method a, columm 'Identity' is optional. Retention time pairs from analytical method a and b will be selected based on m/z difference and correlation. Then using the RT pairs as reference, retention time in analytical method b will be predicted

    

# Calibration
#### Calibration curve file:
1. Consist of two sheet: first sheet, intensities of calibration curve
First sheet, intensities of calibration curve
Second sheet, concentrations of calibration curve
2. Names of internal standards should start with 'IS_'
3. Samples should be arranged by increasing concentrations
4. Technical replicates should be next to each other
5. If intensities of calibration curve is 0, replace it with 0.01
     
#### Peak table file:
1. The same format as the first sheet in calibration curve file

Smooth parameter:
Decrease the number to make the curve more smooth
      


# Upload
#### Peaks files:
csv or xlsx files exported from preprocessing software such as MZMine 2
1. The column name for retention time, m/z and identity should be the following 'rt', 'mz', 'Identity'
2. Samples should start from the 8th column
                       
#### Internal standard file:
csv or xlsx files exported from preprocessing software such as MZMine 2
1. The column name for retention time, m/z and identity should be the following 'rt', 'mz', 'Identity'
2. Samples should start from the 8th column
                       
#### Study design file (optional):
csv or xlsx files containing information about samples
1. The column name for sample name should be 'Sample.name'
2. If sample names are not informative, column 'Sample.type' and 'Batch' should be included to indicate the sample type and batch information



# Preprocessing


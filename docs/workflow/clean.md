# Peak cleaning

Metabolomics data are prone to contain artifact signals originating from sources other than the biological matrix under investigation, such as additives and preservatives incorporated during sample collection and processing, ghost peaks derived from sample preparation (e.g., derivatization), impurities present in solvents and reagents, and contaminants coming from labware and the MS system (e.g., plasticizers or column bleeding). Furthermore, these contaminants and other matrix components may accumulate in the instrument (e.g., in the autosampler or in the column) as a result of inadequate washing between sample injections, leading to the appearance of carryover signals from the foregoing samples in subsequent injections. 

## Based on blanks
Features can be considered as artifacts when 
* their mean values in real samples do not exceed three times the mean values detected in blanks.
* their RSD is above 15% in blanks.

## Based on RSD
Features can be considered as artifacts when
* their RSD in pool samples is above 30%.
* their RSD in pool samples is above 1.5 times their RSD in samples.

## Based on intensity
Features can be removed when thier mean intensities in pool samples are too low, such as 500.

## Based on missing
Features can be removed when too many missings existing.

## Based on retention time
Early eluting features should be removed.





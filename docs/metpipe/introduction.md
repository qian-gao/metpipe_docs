# Introduction

**metpipe** is an R package designed to provide a comprehensive and standardized pipeline for metabolomics data processing.

This section introduces the use of **metpipe** for metabolomics and lipidomics data processing.

## System Requirements

- **Docker** version 4.49.0 or higher

Currently Docker has been setup in the following workstations:
- Olaf
- Archibald 
- Simba
- Boots

## Special notes for usage in KU workstations

- The procedure to start Docker
    - **Request Admin Privileges** in Heimdal Agent
    - Right click on **Docker Desktop** and choose **Run as administrator**

- Before start, check if Disk image location is setup in a drive other than C drive
    - Open Docker, click Settings -> Recsources -> Advanced
    - Check **Disk image location**, it should not be in C drive. It should be in e.g. E:\DockerData\DockerDesktopWSL

- After running, quit Docker before log out


import zipfile
import os

# Extract the zip file
extract_path = 'C:/Users/Usuario/Desktop/PROJECTS/fortranibal.github.io/'

# List extracted files
extracted_files = []
for root, dirs, files in os.walk(extract_path):
    for file in files:
        extracted_files.append(os.path.join(root, file))

print(extracted_files)

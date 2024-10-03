#!/bin/bash

# Create the destination folders if they don't exist
mkdir -p SS NI II

# Move files based on the presence of SS, NI, or II in the filename
for file in *.zip; do
    if [[ "$file" == *"-SS-"* ]]; then
        mv "$file" SS/
    elif [[ "$file" == *"-NI-"* ]]; then
        mv "$file" NI/
    elif [[ "$file" == *"-II-"* ]]; then
        mv "$file" II/
    fi
done

echo "Files have been moved to the appropriate folders."

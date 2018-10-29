#!/bin/bash
# make sure you always put $f in double quotes to avoid any nasty surprises i.e. "$f"
for f in $*
do
  echo "Processing $f file..."
  mongoimport -h localhost:4005 -d amd -c obras "$f" 
done
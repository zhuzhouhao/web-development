#!/bin/bash

for file in *
do
  if [ -d "$file" ] && [ ! "$file" == "node_modules_shared" ];
  then
    echo "$file"
    cd "$file"
    ln -s ../node_modules_shared node_modules
    cd ..
  fi
done

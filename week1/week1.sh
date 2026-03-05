#!/bin/bash
echo "enter number of files "
read num
read -p "enter the name of the directory: " dir
while [ $num -gt 0 ]; do
  if [ ! -d "$dir/week$num" ]; then
    mkdir "$dir/week$num"
  fi
  ((num--))
done
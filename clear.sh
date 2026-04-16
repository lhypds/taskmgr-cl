#!/usr/bin/env bash
set -e

echo "Removing task folders in $(pwd)..."
removed=0
for d in */; do
  if [[ "$d" =~ ^[0-9]{12} ]]; then
    rm -rf "$d"
    echo "  removed: $d"
    ((removed++))
  fi
done
echo "Done. $removed task folder(s) removed."

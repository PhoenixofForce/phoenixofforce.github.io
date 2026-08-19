#!/usr/bin/env bash
#
# Cuts the hover demo loops for the project cards out of the raw gameplay
# recordings and encodes them into static/videos/.
#
# Usage: scripts/encode-demos.sh [source-dir]
#
# Output names follow the projectSlug() convention from src/lib/projects.ts,
# same as the readme files in src/lib/md/.

set -euo pipefail

SRC_DIR="${1:-.}"
OUT_DIR="static/videos"
CRF=26
HEIGHT=480

mkdir -p "$OUT_DIR"

# encode <slug> <source file> <start-end>...
encode() {
  local slug=$1 src="$SRC_DIR/$2"
  shift 2

  if [[ ! -f $src ]]; then
    echo "skip $slug — missing $src" >&2
    return
  fi

  local filter="" labels="" i=0
  for seg in "$@"; do
    filter+="[0:v]trim=${seg%-*}:${seg#*-},setpts=PTS-STARTPTS[v$i];"
    labels+="[v$i]"
    i=$((i + 1))
  done
  filter+="${labels}concat=n=$i:v=1:a=0,scale=-2:$HEIGHT,setsar=1[out]"

  ffmpeg -y -loglevel error -i "$src" \
    -filter_complex "$filter" -map "[out]" -an \
    -c:v libx264 -crf "$CRF" -preset slow -pix_fmt yuv420p \
    -movflags +faststart "$OUT_DIR/$slug.mp4"

  printf '%-38s %s\n' "$slug.mp4" "$(du -h "$OUT_DIR/$slug.mp4" | cut -f1)"
}
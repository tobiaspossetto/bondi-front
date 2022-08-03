#!/usr/bin/env bash

COMPACT='
/^\s*$//d; # Lineas vacias
s/\s*\/\/.*//g; # Borrar comentarios
s/\n/;/g; # Unir todo con ;
'

sed -z "$COMPACT" < /dev/stdin

exit 1

POINTS=$(sed -z 's/\n/;/g; s/;$//' < /dev/stdin)

curl "http://router.project-osrm.org/match/v1/car/$POINTS?overview=full" \
| jq '[.tracepoints[].location] | map([.[1], .[0]])'
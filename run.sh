#!/bin/sh

SCRIPT_DIR=$(
    cd $(dirname $0)
    cd ../
    pwd
)

de ${SCRIPT_DIR}

npm rum serve

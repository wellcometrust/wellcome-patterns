#!/usr/bin/env bash
# This line is because of node-sass, I think
# TODO (jamesgorrie): remove this line
npm rebuild node-sass

mkdir -p ./build/dist
npm run build
cp -R ./dist ./build
cp index.html ./build

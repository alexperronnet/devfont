#!/bin/bash

# process SVG files
npx babel-node bin/processSvgs.js

# create dist directory
npx rimraf dist
mkdir dist

# build icons.json
npx babel-node bin/buildIconsJson.js

# create dist/icons directory
npx rimraf dist/icons
mkdir dist/icons

# build SVG icons
npx babel-node bin/buildSvgs.js

# build JavaScript library
npx webpack --output-filename devfont.js --mode development
npx webpack --output-filename devfont.min.js --mode production
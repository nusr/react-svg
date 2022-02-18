#!/usr/bin/env sh
set -e
rm -rf build
npm run build
cd build
git init
git add .
git commit -m 'update Github Gages'
git push -f  git@github.com:nusr/react-svg.git master:gh-pages
cd -
exit


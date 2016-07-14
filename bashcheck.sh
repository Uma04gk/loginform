#!/bin/bash

git status
git add .
git status
git commit -m $1
git checkout gh-pages
git merge master
git push origin gh-pages
git checkout master
git push origin master


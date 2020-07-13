#!/bin/bash
git init
git remote add google-auth-express-js  https://github.com/thecloudgarage/google-auth-express-js.git
git add .
git commit -m 'new commit 1'
git push -f google-auth-express-js master

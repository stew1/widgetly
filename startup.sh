#!/bin/bash

# cd client/
# npm i --silent --production
# npm run build

cd /server/
npm i --silent --production
mkdir ./public
cp -r ../client/build/* ./public/
node ./bin/www

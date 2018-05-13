#!/bin/bash

cd client/
npm i
npm run build

cd ../server/
npm i
mkdir ./public
cp -r ../client/build/* ./public/
start ./bin/www

#!/bin/bash

cd server/
npm i --silent --production
node ./bin/www

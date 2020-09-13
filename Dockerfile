FROM node:14.16.0 as build

WORKDIR /app

COPY client/src src/
COPY client/public public/
COPY client/.browserslistrc client/.eslintr
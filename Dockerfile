FROM node:14.16.0 as build

WORKDIR /app

COPY client/src src/
COPY client/public public/
COPY client/.browserslistrc client/.eslintrc.js client/babel.config.js client/package-lock.json client/package.json client/vue.config.js ./

RUN npm ci
RUN npm run b
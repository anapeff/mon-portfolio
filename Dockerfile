FROM node:20.17.0-alpine3.20 AS build

WORKDIR /src/app

COPY package.json package-lock.json /src/app/

RUN npm ci

COPY . .

RUN npm run build

FROM httpd:2.4.62-alpine3.20

COPY --from=build /src/app/build /usr/local/apache2/htdocs/

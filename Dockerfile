# syntax=docker/dockerfile:1
FROM node:lts-alpine AS build

WORKDIR /src

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

FROM node:lts-alpine AS server

WORKDIR /app

RUN addgroup --system --gid 1001 admin
RUN adduser --system --uid 1001  stl

COPY --from=build --chown=stl:admin /src/node_modules ./node_modules
COPY --from=build --chown=stl:admin /src/package.json ./package.json
COPY --from=build --chown=stl:admin /src/dist ./

CMD ["node", "main"]

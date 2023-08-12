# syntax=docker/dockerfile:experimental
FROM node:18-buster-slim as base

ENV PATH /app/node_modules/.bin:$PATH


FROM base as development

ENV NODE_ENV development

WORKDIR /app

CMD ["nodemon", "--inspect=0.0.0.0:9229", "src/test.js"]
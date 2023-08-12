# syntax=docker/dockerfile:experimental
FROM node:18-buster-slim as base

ENV NODE_ENV development

ENV PATH /app/node_modules/.bin:$PATH

WORKDIR /app


FROM base as runner

CMD ["nodemon", "src/runner.js"]


FROM base as test_mathjs

CMD ["nodemon", "src/test_mathjs.js"]


FROM base as test_lodash

CMD ["nodemon", "src/test_lodash.js"]
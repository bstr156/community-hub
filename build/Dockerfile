FROM node:lts

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn
COPY . .
# We need this hack, don't run yarn build in separate line
#RUN set -a && . ./envs/web.env && set +a; yarn build

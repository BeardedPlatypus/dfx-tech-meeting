FROM node:buster-slim as mdx-base

FROM mdx-base as development

RUN apt-get update \
    && apt-get install git-all --no-install-recommends -y

WORKDIR /usr/app
COPY ./ /usr/app/

RUN npm install

EXPOSE 3000
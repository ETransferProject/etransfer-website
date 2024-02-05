FROM node:18.17.0

ARG web=/opt/workspace/etransfer

WORKDIR ${web}

COPY . ${web}

RUN yarn \
    && yarn build:pro

ENTRYPOINT yarn start

EXPOSE 3000

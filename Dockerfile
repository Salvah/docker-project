FROM node:18-alpine
WORKDIR /app
RUN sh -c yarn install && yarn dev
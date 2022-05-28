FROM node:alpine

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
ENV NODE_OPTIONS --openssl-legacy-provider

COPY package.json ./
COPY yarn.lock ./

RUN yarn install
COPY . ./

EXPOSE 3000

CMD ["yarn", "docz", "dev"]
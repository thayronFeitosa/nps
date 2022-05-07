FROM node:14-alpine

WORKDIR /usr/app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 4001


RUN rm -rf .env\
  .gitignore \
  api \
  src

CMD ["yarn", "start"]

FROM node:14.14.0-alpine
WORKDIR '/app'
COPY ./package.json ./
RUN yarn install
COPY . .
RUN yarn build
CMD ["yarn", "prod"]
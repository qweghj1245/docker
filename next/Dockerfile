FROM node:14.14.0-alpine
WORKDIR '/app'
COPY ./package.json ./
RUN yarn install
COPY . .
RUN yarn build
CMD ["yarn", "dev"]

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=0 /app/.next /usr/share/nginx/html
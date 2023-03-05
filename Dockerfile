FROM node:16.15.0-alpine as dependencies
USER root
RUN apk add --update --no-cache python3 make gcc libsass g++ autoconf bash zlib-dev libpng-dev automake yarn build-base zlib libltdl nasm git
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn run build

FROM nginx:1.23.2-alpine as final
WORKDIR /app
COPY --from=dependencies /app/build /usr/share/nginx/html
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d
COPY ./.htpasswd /etc/nginx/.htpasswd
EXPOSE 443
FROM node:16.13-alpine3.15 as build

RUN apk --no-cache add --virtual .builds-deps build-base python3

WORKDIR /usr/local/comments-svc

COPY dist package.json ./

RUN npm install --production

FROM node:16.13-alpine3.15

WORKDIR /usr/local/comments-svc

COPY --from=build /usr/local/comments-svc .

EXPOSE 50051

CMD ["node", "main.js"]

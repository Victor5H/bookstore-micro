FROM node:18.19.0-alpine3.18

WORKDIR app/src/

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 5555

CMD ["npm","run","dev"]

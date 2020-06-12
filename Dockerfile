FROM node:13.1.0 as mainbuilder

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

CMD ["npm","run","build"]


FROM nginx
COPY --from=mainbuilder  /app/build  /usr/share/nginx/html
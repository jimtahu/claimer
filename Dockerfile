FROM node:latest
LABEL maintainer "jimtahu@gmail.com"
WORKDIR /code
COPY package.json /code
RUN npm install
COPY . /code
CMD npm test

FROM node:4
ADD ./package.json /gnexjs/package.json
WORKDIR /gnexjs
RUN npm install
ADD . /gnexjs
RUN npm test

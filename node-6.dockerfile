FROM node:6
ADD ./package.json /gnexjs/package.json
WORKDIR /gnexjs
RUN npm install
ADD . /gnexjs
RUN npm test

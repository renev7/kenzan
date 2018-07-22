# docker build -t kenzan .
# docker run --name kenzan_code_challenge -d -p 3000:3000 kenzan

FROM node:carbon

WORKDIR /usr/src/app/kenzan

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]

FROM node

WORKDIR /app/web1

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8001

CMD ["npm", "start"]
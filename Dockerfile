FROM node

WORKDIR /app

COPY package*.json /app

RUN npm install && npm cache clean --force

CMD ["npm", "run", "dev"]
FROM node:18-alpine

# Create app directory
WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

COPY .next ./.next

CMD [ "npm", "run", "build" ]
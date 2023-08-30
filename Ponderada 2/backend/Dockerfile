FROM node:alpine 

WORKDIR /api

COPY package.json .

COPY package-lock.json .

RUN npm install

COPY . . 

EXPOSE 1234

RUN npx prisma generate

COPY . .

CMD ["npm", "run", "dev"]

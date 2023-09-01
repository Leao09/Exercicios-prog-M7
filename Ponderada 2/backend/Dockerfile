FROM node:latest

WORKDIR /backend

# Copiando os arquivos necessários para dentro do container
COPY package.json ./
COPY package-lock.json ./
COPY prisma ./prisma

# Instalando as dependências do projeto
RUN npm install

# Copiando todos os outros arquivos do projeto para dentro do container
COPY . ./
# Comando para iniciar a aplicação dentro do container
CMD ["npm", "start"]
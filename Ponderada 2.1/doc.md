# Atividade ponderada de programação

## Estrutura de pastas 
<pre><code>
ponderada 2.1/
│
├── backend/
|   ├── app/
|   |      ├── auth/
|   |      ├── routes/
│   ├── requirements.txt
│   ├── dockerfile
|   └── .env
│
├── frontend/
│   ├── src/
│   ├── gitignore
│   ├── Dockerfile
|   └── package.json
│
├── doc.md
└── docker-compose.yml
</code></pre> 

## Arquitetura da solução:
- Para a arquitetura dessa solução foi utilizado um [Frontend](#frontend) em React, um [Backend](#backend) em FastAPI e o banco de dados em PostgreSQL.

### Frontend
- Para a construção do frontend foram utilizado algumas bilbiotecas que serão listadas abaixo.

1. Axios, utilizado para realizar a integração através de requisições para o backend 
2. Icons, biblioteca utilizada para baixar icones do próprio framework do react.
3. Router, uma biblioteca utilizada para facilitar a navegação entre páginas através de rotas diretamente do frontend.

### Backend
- Para a construção do backend foram utilizado algumas bilbiotecas que serão listadas abaixo.

1. Omar, uma biblioteca que faz o papel de ORM como uma abstração do SQLAchemy que por sua vez ja é uma abstração de banco de dados do tipo SQL.
2. Psycopg, uma biblioteca que posibilita a utilizando do banco de dados postgres.
3. PyJWT, uma biblioteca para a utilização de tokens para a autenticação das rotas.

## Como executar a ponderada 
- para rodar a aplicação bastar copiar este código para um arquivo docker-compose.yml
<pre><code>
version: "3.8"

services:
  db:
    image: postgres:15-alpine
    volumes:
      - postgres_data:/var/lib/postgresql/data/
    expose:
      - 5432
    environment:
      POSTGRES_DB: postgres
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres

  server:
    image: felipeleao0902/podnerada2-server
    command: bash -c 'uvicorn app.main:app --host 0.0.0.0'
    ports:
      - "8000:8000"
    environment:
      - DATABASE_URL=postgresql://postgres:postgres@db:5432/postgres
    depends_on:
      - db

  frontend:
    image: felipeleao0902/ponderada2-frontend
    ports:
      - "3000:3000"

volumes:
  postgres_data:
</code></pre>
- E por fim rodar o seguinte comando:
<pre><code>
docker compose up -d build
</code></pre>
- Assim sua aplicação estará rodando com o frontend na porta 3000.
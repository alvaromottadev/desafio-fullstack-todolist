# 📝 Todo List — Full Stack (React + NestJS)

Este repositório contém a solução completa do Desafio Prático de Desenvolvimento Full Stack, composta por:

- Frontend: Vite + React + TypeScript + Tailwind

- Backend: NestJS + TypeORM + PostgreSQL

- Persistência: Banco de dados relacional com Docker + PostgreSQL

A aplicação permite criar, visualizar, editar, concluir e excluir tarefas, além de exibir estatísticas gerais.

## 🎯 Objetivo do Projeto

O objetivo deste desafio é desenvolver um sistema completo de gerenciamento de tarefas (Todo List), avaliando conhecimentos em:

- Desenvolvimento de API RESTful (NestJS)

- Desenvolvimento de interface web responsiva (React)

- Integração Frontend/Backend

- Organização, tipagem e boas práticas de código

- Uso de banco de dados real e persistência

- Documentação e clareza técnica

## 📁 Estrutura do Repositório

```
desafio-fullstack-todolist/
├── backend/ # API REST (NestJS + PostgreSQL)
├── frontend/ # Interface Web (React + Vite + Tailwind)
└── README.md # Este arquivo
```

## 🚀 Tecnologias Utilizadas

### Frontend

- React + TypeScript

- Vite

- TailwindCSS

- shadcn/ui

- React Router DOM

- Axios

- Arquitetura Mobile-first

- Entre outras

### Backend

- NestJS

- TypeORM

- PostgreSQL

- Docker & Docker Compose

- Class Validator / Transformer

- Swagger

- Jest

- Entre outras

## 🧩 Funcionalidades do Sistema

O usuário pode:

- Visualizar todas as tarefas

- Criar novas tarefas

- Editar título, descrição e data de vencimento

- Marcar/desmarcar como concluída (isDone)

- Excluir tarefas

- Visualizar estatísticas (total / concluídas / pendentes)

- Usar a aplicação de forma fluida no mobile ou desktop

O backend:

- Possui CRUD completo de tarefas

- Validações com DTOs

- Documentação com Swagger

- Persistência via TypeORM + PostgreSQL

- Tratamento de erros com HttpException

- Arquitetura modular (TasksModule)

O frontend:

- Consome a API via Axios

- Usa React Router

- Usa componentes acessíveis com shadcn/ui

- Segue componenteização atômica

- Interface clean e responsiva (mobile-first)

## ⚙️ Como rodar o projeto (Passo a Passo Geral)

Cada repositório (backend e frontend) possui seu próprio **README** com detalhes, mas aqui está o guia rápido:

1. Clone o repositório

```
git clone https://github.com/alvaromottadev/desafio-fullstack-todolist.git
```

Acesse a pasta:

```
cd .\desafio-fullstack-todolist\
```

Cada módulo (backend e frontend) possui um arquivo `.env.example` contendo valores padrão de desenvolvimento.

Para que a aplicação funcione corretamente, é necessário renomear esse arquivo para `.env`

## Backend

2. Subir Banco de Dados (Docker) 🐳

Acesse o diretório do backend:

```
cd backend
```

Suba o banco de dados PostgreSQL com o docker (lembre-se de abrir o Docker antes de executar o comando):

```
docker compose up -d
```

3. Instale as dependências

Utilize o comando para instalar as dependências:

```
npm install
```

4. Rodar em desenvolvimento:

```
npm run start:dev
```

Observação: Você também pode usar o script `npm run start:docker`, ele irá subir o banco de dados no docker e iniciar a aplicação.

A API estará em:

👉 http://localhost:3000

👉 Swagger: http://localhost:3000/docs

## Frontend

5. Instalar as dependências

Acesse o diretório do frontend:

```
cd ..
cd frontend
```

Utilize o comando para instalar as dependências:

```
npm install
```

6. Rodar a aplicação:

```
npm run dev
```

O frontend estará em:

👉 http://localhost:5173

## 🔗 Endpoints Disponíveis (API)

| Método | Rota         | Descrição                  |
| ------ | ------------ | -------------------------- |
| POST   | `/tasks`     | Criar nova tarefa          |
| GET    | `/tasks`     | Listar todas as tarefas    |
| GET    | `/tasks/:id` | Buscar tarefa por ID       |
| PATCH  | `/tasks/:id` | Atualizar tarefa existente |
| DELETE | `/tasks/:id` | Remover uma tarefa         |

Para detalhes completos, acesse o Swagger:

👉 http://localhost:3000/docs

## 📦 Repositórios Individuais

Cada módulo possui sua própria documentação detalhada:

📌 Backend:
https://github.com/alvaromottadev/desafio-fullstack-todolist/tree/main/backend

🎨 Frontend:
https://github.com/alvaromottadev/desafio-fullstack-todolist/tree/main/frontend

## 📄 Licença

Este projeto está sob a licença MIT.

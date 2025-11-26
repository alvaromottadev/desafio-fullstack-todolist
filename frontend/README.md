# 🎨 Todo List — Frontend (React + Vite + TypeScript)

Este repositório contém o frontend da aplicação Todo List, desenvolvido como parte do Desafio Prático de Desenvolvimento Full Stack.
A interface foi construída com foco em usabilidade, acessibilidade, responsividade (mobile-first) e clean design.

O frontend consome a API do backend (NestJS) e oferece todas as operações de gerenciamento de tarefas: criar, listar, editar, concluir e excluir.

## 🚀 Tecnologias Utilizadas

Core

- React + TypeScript

- Vite

- React Router DOM

- Axios

UI / Estilização

- TailwindCSS

- shadcn/ui (Dialog, AlertDialog, Button, etc.)

- Componentes atômicos personalizados (TaskCard, StatsCard, TaskTitle...)

Arquitetura

- Hooks customizados (useTasks)

- Componentização atômica

- Mobile-first

- Client API com Axios instance centralizada

## 🛠️ Requisitos de Instalação

Certifique-se de ter instalado:

- Node.js 18+

- npm

- Docker + Docker Compose

## ⚡ Como rodar a aplicação

1. ⚙ Criar arquivo `.env`

Crie o arquivo `.env` na raiz do frontend ou remova o `.example` do `.env.example` e utilize ele.

A URL da API utiliza, por padrão, a porta 3000. Caso você tenha alterado essa porta ou realizado o deploy da API, não se esqueça de atualizar esse valor.

Exemplo de arquivo `.env`:

```
VITE_API_URL=http://localhost:3000
```

2. 🧩 Instale as dependências

Instale as dependências utilizando o comando no diretório `desafio-fullstack-todolist/frontend`

```
npm install
```

3. ▶ Inicie a aplicação

Agora você pode iniciar o frontend em ambiente de desenvolvimento:

```
npm run dev
```

O frontend estará disponível em:

👉 http://localhost:5173

## 🗺️ Rotas da API

A API expõe o CRUD completo da entidade Task.

| Método | Rota         | Descrição                      | Corpo da Requisição                           |
| ------ | ------------ | ------------------------------ | --------------------------------------------- |
| POST   | `/tasks`     | Criar nova tarefa              | `{ title, description, dueDate }`             |
| GET    | `/tasks`     | Listar todas as tarefas        | —                                             |
| GET    | `/tasks/:id` | Buscar tarefa por ID           | —                                             |
| PATCH  | `/tasks/:id` | Atualizar uma tarefa existente | `{ title?, description?, isDone?, dueDate? }` |
| DELETE | `/tasks/:id` | Remover uma tarefa             | —                                             |

Você pode testar pelo `Insomnia` ou `Postman` ou através da documentação `Swagger` disponivel em:

👉 http://localhost:3000/docs

## 🧪 Testes

Para executar os testes unitários use:

```
npm run test
```

## 🔒 Validação e Tratamento de Erros

Este projeto utiliza:

- DTOs com decorators do Class Validator

- Pipes globais (ValidationPipe)

- Exceções do NestJS (HttpException, NotFoundException, etc.)

- Services contendo a lógica de negócio

- Controllers apenas recebendo/parando requisições

## ⚠️ Observações para o Revisor

- O projeto segue arquitetura modular do NestJS.

- As regras de negócio estão contidas no Service.

- Validações são realizadas por DTOs.

- A comunicação com o banco utiliza TypeORM com repositórios.

- Exceções apropriadas são retornadas para erros como task não encontrada.

- O banco deve estar ativo via Docker antes de iniciar a API.

## 📄 Licença

Este projeto está sob a licença MIT.

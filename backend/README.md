# 📌 API de Gerenciamento de Tarefas — Backend (NestJS)

Este repositório contém o backend da aplicação Todo List, desenvolvido como parte do Desafio Prático de Desenvolvimento Full Stack.
A API fornece operações CRUD completas para gerenciamento de tarefas, seguindo boas práticas de arquitetura do NestJS.

## 🚀 Tecnologias Utilizadas

- **TypeScript**
- **Node.js**
- **NestJS**
- **TypeORM**
- **PostgreSQL**
- **Docker & Docker Compose**
- **Class Validator / Class Transformer**
- **Swagger**
- **Jest**
- **Nest CLI**

## 🧩 Estrutura da Entidade Task

| Campo         | Tipo         | Descrição                                           |
| ------------- | ------------ | --------------------------------------------------- |
| `id`          | UUID         | Identificador único da tarefa                       |
| `title`       | string       | Título da tarefa                                    |
| `description` | string       | Descrição detalhada                                 |
| `isDone`      | boolean      | Indica se a tarefa está concluída (padrão: `false`) |
| `dueDate`     | Date \| null | Data de vencimento da tarefa (opcional)             |
| `createdAt`   | Date         | Timestamp automático de criação                     |
| `updatedAt`   | Date         | Timestamp automático da última atualização          |

## 🛠️ Requisitos de Instalação

Certifique-se de ter instalado:

- Node.js 18+

- npm

- Docker + Docker Compose

## ⚡ Como rodar a aplicação

1. Clone o repositório e acesse o diretório do backend

```
git clone https://github.com/alvaromottadev/desafio-fullstack-todolist.git
```

Após clonar use:

```
cd backend
```

2. ⚙ Criar arquivo `.env`

Crie o arquivo `.env` na raiz do backend ou remova o `.example` do `.env.example` e utilize ele.

Os valores presentes no arquivo .env.example correspondem às configurações do banco de dados Postgres utilizado via Docker Compose e à URL padrão do frontend configurado com Vite. **Essas credenciais são destinadas exclusivamente ao ambiente de desenvolvimento e não representam risco de segurança**, por isso podem ser expostas no arquivo de exemplo. Caso você não utilize o banco de dados fornecido pelo Docker Compose, lembre-se de atualizar esses valores conforme o ambiente desejado.

Exemplo de arquivo `.env`:

```
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=todo_user
DB_PASSWORD=todo_password
DB_NAME=todolist_db
DB_AUTOLOADENTITIES=true
DB_SYNCHRONIZE=true
CORS_ORIGIN=http://localhost:5173
PORT=3000
```

Observação: O `DB_SYNCHRONIZE` true é só para desenvolvimento. Nunca use synchronize: true em produção, ele altera o schema automaticamente e pode causar perda de dados.

3. 🧩 Instale as dependências

Instale as dependências utilizando o comando no `desafio-fullstack-todolist/backend`

```
npm install
```

4. 🐘 Subir o Banco de Dados com Docker

Abra o Docker e suba o PostgreSQL usando Docker Compose:

```
docker compose up -d
```

Obs.: Você pode usar o script `npm run start:docker` também, ele irá subir o banco com docker e iniciar a API.

5. ▶ Inicie a aplicação

Agora você pode iniciar a API com algum desses comandos:

```
npm run start
npm run start:dev -> Em modo desenvolvimento
npm run start:docker -> Sobe o docker junto
```

A API estará disponível em:

👉 http://localhost:3000

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

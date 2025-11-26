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

## ⚡ Como rodar a aplicação

1. Clone o repositório e acesse o diretório do frontend

```
git clone https://github.com/alvaromottadev/desafio-fullstack-todolist.git
```

Após clonar use:

```
cd frontend
```

2. ⚙ Criar arquivo `.env`

Crie o arquivo `.env` na raiz do frontend ou remova o `.example` do `.env.example` e utilize ele.

A URL da API utiliza, por padrão, a porta 3000. Caso você tenha alterado essa porta ou realizado o deploy da API, não se esqueça de atualizar esse valor.

Exemplo de arquivo `.env`:

```
VITE_API_URL=http://localhost:3000
```

3. 🧩 Instale as dependências

Instale as dependências utilizando o comando no diretório `desafio-fullstack-todolist/frontend`

```
npm install
```

4. ▶ Inicie a aplicação

Agora você pode iniciar o frontend em ambiente de desenvolvimento:

```
npm run dev
```

O frontend estará disponível em:

👉 http://localhost:5173

## 📱 Responsividade (Mobile-First)

Toda a interface foi desenvolvida seguindo o conceito mobile-first, garantindo:

- Melhor usabilidade em telas pequenas

- Layout fluido

- Componentes adaptados

- Uso de breakpoints estratégicos no Tailwind

## 🧠 Funcionalidades Implementadas

- Listar tarefas
- Criar tarefas
- Editar tarefas
- Excluir tarefas
- Marcar/desmarcar como concluída
- Exibir métricas (total, concluídas, pendentes)
- UI responsiva (mobile-first)
- Dialogs e AlertDialog com shadcn/ui

## ⚠️ Observações para o Revisor

- O código está organizado em componentes reutilizáveis e otimizados.

- A comunicação com o backend está centralizada e tipada.

- UI projetada com precisão, mantendo consistência visual e acessibilidade.

## 📄 Licença

Este projeto está sob a licença MIT.

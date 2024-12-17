# API REST com Express e MongoDB

Este projeto é uma API REST desenvolvida com **Node.js**, **Express** e **MongoDB**. A aplicação fornece rotas para manipular **usuários**, **posts** e **comentários**, com as operações CRUD (Create, Read, Update, Delete) básicas e algumas funcionalidades extras, como busca e votação em posts.

## 🛠️ **Tecnologias Utilizadas**
- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express**: Framework minimalista para Node.js.
- **MongoDB**: Banco de dados NoSQL utilizado para armazenar os dados.
- **Mongoose**: Biblioteca para modelagem de dados no MongoDB.

---

## 🔗 **Rotas da Aplicação**

### **1. Rotas para Usuários**

#### **Listar todos os usuários**
- **Método**: \`GET\`
- **Rota**: \`/users\`
- **Descrição**: Retorna todos os usuários cadastrados.

#### **Buscar usuários pelo e-mail**
- **Método**: \`GET\`
- **Rota**: \`/users/search?email=:email\`
  - \`:email\` → e-mail do usuário para buscar.
- **Descrição**: Retorna os usuários filtrados com base em parâmetros passados.

#### **Criar um novo usuário**
- **Método**: \`POST\`
- **Rota**: \`/users\`
- **Corpo da Requisição**:
   \`\`\`json
   {
      "name": "Nome do Usuário",
      "email": "usuario@exemplo.com"
   }
   \`\`\`

#### **Atualizar um usuário**
- **Método**: \`PUT\`
- **Rota**: \`/users/:id\`
- **Parâmetro**: 
   - \`:id\` → ID do usuário a ser atualizado.
- **Corpo da Requisição**:
   \`\`\`json
   {
      "name": "Novo Nome",
      "email": "novousuario@exemplo.com"
   }
   \`\`\`

#### **Deletar um usuário**
- **Método**: \`DELETE\`
- **Rota**: \`/users/:id\`
- **Parâmetro**: 
   - \`:id\` → ID do usuário a ser deletado.

---

### **2. Rotas para Posts**

#### **Listar todos os posts**
- **Método**: \`GET\`
- **Rota**: \`/posts\`

#### **Criar um novo post**
- **Método**: \`POST\`
- **Rota**: \`/posts\`
- **Corpo da Requisição**:
   \`\`\`json
   {
      "title": "Título do Post",
      "content": "Conteúdo do Post"
   }
   \`\`\`

#### **Atualizar um post**
- **Método**: \`PUT\`
- **Rota**: \`/posts/:id\`
- **Parâmetro**: 
   - \`:id\` → ID do post a ser atualizado.

#### **Deletar um post**
- **Método**: \`DELETE\`
- **Rota**: \`/posts/:id\`
- **Parâmetro**: 
   - \`:id\` → ID do post a ser deletado.

#### **Votar em um post**
- **Método**: \`POST\`
- **Rota**: \`/posts/:id/vote\`
- **Parâmetro**: 
   - \`:id\` → ID do post.
- **Descrição**: Incrementa votos em um post específico.

---

## 🚀 **Execução e Testes**
Para testar as rotas, você pode usar a ferramenta como **Reqbin** para realizar as requisições HTTP.

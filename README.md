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
- **Tela de uso**: Screen 3
    - Na tela de pesquisa é possível ver os usuários.

#### **Buscar usuários pelo e-mail**
- **Método**: \`GET\`
- **Rota**: \`/users/search?email=:email\`
  - \`:email\` → e-mail do usuário para buscar.
- **Descrição**: Retorna os usuários filtrados com base em parâmetros passados.
- **Tela de uso**: Screen 3
    - Na tela de pesquisa é possível encontrar o usuário desejado.

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
- **Tela de uso**: Screen
    - Na tela de registro é necessário adicionar um novo usuário.

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
- **Tela de uso**: Screen 4
    - Na tela de visualização de usuário é possível atualizar seu próprio perfil.

#### **Deletar um usuário**
- **Método**: \`DELETE\`
- **Rota**: \`/users/:id\`
- **Parâmetro**: 
   - \`:id\` → ID do usuário a ser deletado.
- **Tela de uso**: Screen 4
    - Na tela de perfil é possível deletar sua conta.

---

### **2. Rotas para Posts**

#### **Listar todos os posts**
- **Método**: \`GET\`
- **Rota**: \`/posts\`
- **Tela de uso**: Screen 2
    - Na tela principal aparecem os post de interesse do usuário. 

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
- **Tela de uso**: Screen 1
    - A tela de publicação é utilizada para publicar os posts.

#### **Atualizar um post**
- **Método**: \`PUT\`
- **Rota**: \`/posts/:id\`
- **Parâmetro**: 
   - \`:id\` → ID do post a ser atualizado.
- **Tela de uso**: Screen 1
    - Na tela de publicação é possível alterar/atualizar o post.

#### **Deletar um post**
- **Método**: \`DELETE\`
- **Rota**: \`/posts/:id\`
- **Parâmetro**: 
   - \`:id\` → ID do post a ser deletado.
- **Tela de uso**: Screen 1
    - Na tela de publicação é possível deletar um post.

#### **Like/Deslike em um post**
- **Método**: \`POST\`
- **Rota**: \`/posts/:id/vote\`
- **Parâmetro**: 
   - \`:id\` → ID do post.
- **Descrição**: Permite dar like/deslike em um post específico.
- **Tela de uso**: Screen 2 e Screen 3
    - Tanto na tela principal e na tela de pesquisa é possível dar like/deslike num post.

---

### **3. Rotas para Comentários**

#### **Listar comentários de um post**
- **Método**: \`GET\`
- **Rota**: \`/posts/:id/comments\`
- **Parâmetro**:
   - \`:id\` → ID do post.
- **Tela de uso**: Screen 2 e Screen 3
    - É possível visualizar os comentários em posts tanto na tela principal como na tela de pesquisa.

#### **Criar um comentário em um post**
- **Método**: \`POST\`
- **Rota**: \`/posts/:id/comments\`
- **Parâmetro**:
   - \`:id\` → ID do post.
- **Corpo da Requisição**:
   \`\`\`json
   {
      "text": "Comentário sobre o post"
   }
   \`\`\`
- **Tela de uso**: Screen 2 e Screen 3
    - É possível comentar em posts tanto na tela principal como na tela de pesquisa.

#### **Atualizar um comentário**
- **Método**: \`PUT\`
- **Rota**: \`/posts/:id/comments/:commentId\`
- **Parâmetros**: 
   - \`:id\` → ID do post.
   - \`:commentId\` → ID do comentário a ser atualizado.
- **Corpo da Requisição**:
   \`\`\`json
   {
      "text": "Comentário atualizado"
   }
   \`\`\`
- **Tela de uso**: Screen 2 e Screen 3
    - É possível atualizar seu comentário em posts tanto na tela principal como na tela de pesquisa.

#### **Deletar um comentário**
- **Método**: \`DELETE\`
- **Rota**: \`/posts/:id/comments/:commentId\`
- **Parâmetros**: 
   - \`:id\` → ID do post.
   - \`:commentId\` → ID do comentário a ser deletado.
- **Tela de uso**: Screen 2 e Screen 3
    - É possível deletar seus comentários em posts tanto na tela principal como na tela de pesquisa.

---

### **4. Rota para pesquisa**

#### **Buscar Posts por palavras contidas no texto**
- **Método**: \`GET\`
- **Rota**: \`/posts/search?keyword=:palavra-chave\`
- **Parâmetros**:
    - \`palavra-chave\` → Palavra utilizada como referência para a busca.
- **Tela de uso**: Screen 3
  - A tela de pesquisa utiliza uma palavra-chave para fazer a busca de um post.

## 🚀 **Execução e Testes**
Para testar as rotas, você pode usar a ferramenta como **Reqbin** para realizar as requisições HTTP.

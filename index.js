const express = require("express");
const mongoose = require("mongoose");
const UserController = require("./controllers/UserController");
const PostController = require("./controllers/PostController"); // Adicionando a importação do PostController
const CommentController = require("./controllers/CommentsController");

const app = express();

// Middleware para interpretar JSON no corpo das requisições
app.use(express.json());

// Conexão ao MongoDB
mongoose
  .connect(
    "mongodb+srv://henricocostta:Neto12345$@cluster0.cw9mg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  )
  .then(() => console.log("Conectado ao MongoDB!"))
  .catch((err) => console.error("Erro ao conectar ao MongoDB:", err));

// Rotas para usuários
app.get("/users", UserController.show); // Listar todos os usuários
app.get("/users/search", UserController.index); // Buscar usuários pelo e-mail
app.post("/users", UserController.store); // Adicionar um usuário
app.delete("/users/:id", UserController.destroy); // Deletar um usuário
app.put("/users/:id", UserController.update); // Atualizar um usuário

// Rotas para posts
app.get("/posts", PostController.show); // Listar todos os posts
app.post("/posts", PostController.store); // Criar um novo post
app.put("/posts/:id", PostController.update); // Atualizar um post
app.delete("/posts/:id", PostController.destroy); // Deletar um post
app.post("/posts/:id/vote", PostController.vote); // Votar em um post

// Rotas para comentários
app.get("/posts/:id/comments", CommentController.show); // Listar todos os comentários de um post
app.post("/posts/:id/comments", CommentController.store); // Criar um comentário em um post
app.delete("/posts/:id/comments/:commentId", CommentController.destroy); // Deletar um comentário
app.put("/posts/:id/comments/:commentId", CommentController.update); // Atualizar um comentário

// Rota para pesquisa
app.get("/posts/search", PostController.search); // Pesquisar posts

// Inicializando o servidor
app.listen(3000, () => console.log("Servidor rodando na porta 3000"));

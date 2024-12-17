const mongoose = require('mongoose');

// Definir o esquema do comentário
const CommentSchema = new mongoose.Schema({
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post', // Referência ao modelo Post
    required: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Referência ao modelo User
    required: true
  }
}, { timestamps: true }); // Adiciona campos createdAt e updatedAt automaticamente

// Criar o modelo do comentário
module.exports = mongoose.model('Comment', CommentSchema);

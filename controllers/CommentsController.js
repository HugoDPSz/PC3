const mongoose = require('mongoose');
const Comment = require('../models/comments'); // Supondo que você tenha um modelo de Comment

module.exports = {
  // Listar todos os comentários de um post
  async show(req, res) {
    const { id } = req.params;
    try {
      const comments = await Comment.find({ postId: id });
      res.json(comments);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao listar comentários' });
    }
  },

  // Criar um comentário
  async store(req, res) {
    const { id } = req.params; // ID do post
    const { content, author } = req.body; // Conteúdo do comentário
    try {
      const comment = await Comment.create({ postId: id, content, author });
      res.status(201).json(comment);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar o comentário' });
    }
  },

  // Deletar um comentário
  async destroy(req, res) {
    const { id, commentId } = req.params;
    try {
      const comment = await Comment.findByIdAndDelete(commentId);
      if (!comment) {
        return res.status(404).json({ error: 'Comentário não encontrado' });
      }
      res.json({ message: 'Comentário deletado com sucesso' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar o comentário' });
    }
  },

  // Atualizar um comentário
  async update(req, res) {
    const { id, commentId } = req.params;
    const { content } = req.body;
    try {
      const updatedComment = await Comment.findByIdAndUpdate(commentId, { content }, { new: true });
      if (!updatedComment) {
        return res.status(404).json({ error: 'Comentário não encontrado' });
      }
      res.json(updatedComment);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar o comentário' });
    }
  }
};

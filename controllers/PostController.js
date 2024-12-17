const mongoose = require('mongoose');
const Post = require('../models/Post'); // Supondo que você tenha um modelo de Post

module.exports = {
  // Listar todos os posts
  async show(req, res) {
    try {
      const posts = await Post.find();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao listar posts' });
    }
  },

  // Criar um post
  async store(req, res) {
    try {
      const { title, content, category, author } = req.body;

      // Criar o post com todos os campos necessários
      const post = await Post.create({ title, content, category, author });

      res.status(201).json(post);
    } catch (error) {
      console.error("Erro ao criar o post:", error.message);
      res.status(500).json({ error: 'Erro ao criar o post', details: error.message });
    }
  },

  // Atualizar um post
  async update(req, res) {
    try {
      const { id } = req.params;
      const updatedPost = await Post.findByIdAndUpdate(id, req.body, { new: true });
      if (!updatedPost) {
        return res.status(404).json({ error: 'Post não encontrado' });
      }
      res.json(updatedPost);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar o post' });
    }
  },

  // Deletar um post
  async destroy(req, res) {
    try {
      const { id } = req.params;
      const deletedPost = await Post.findByIdAndDelete(id);
      if (!deletedPost) {
        return res.status(404).json({ error: 'Post não encontrado' });
      }
      res.json({ message: 'Post deletado com sucesso' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar o post' });
    }
  },

  // Votação (like/dislike) no post
  async vote(req, res) {
    try {
      const { id } = req.params;
      const { voteType } = req.body; // Pode ser 'like' ou 'dislike'
      const post = await Post.findById(id);

      if (!post) {
        return res.status(404).json({ error: 'Post não encontrado' });
      }

      if (voteType === 'like') {
        post.likes += 1;
      } else if (voteType === 'dislike') {
        post.dislikes += 1;
      }else if (voteType === 'undolike'){
        post.likes -= 1;
       }else if (voteType === 'undodislike'){
        post.dislikes -= 1;
      }

      await post.save();
      res.json(post);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao votar no post' });
    }
  },

  async search(req, res) {
    try {
      // Receber a palavra-chave da query string
      const { keyword } = req.query;

      if (!keyword) {
        return res.status(400).json({ error: 'A palavra-chave é obrigatória.' });
      }

      // Buscar posts que contenham a palavra-chave no título ou conteúdo
      const posts = await Post.find({
        $text: { $search: keyword }
      });

      // Se nenhum post for encontrado
      if (posts.length === 0) {
        return res.status(404).json({ message: 'Nenhum post encontrado.' });
      }

      // Retornar os posts encontrados
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao realizar a pesquisa.' });
    }
  }
};

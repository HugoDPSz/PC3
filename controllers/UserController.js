const mongoose = require('mongoose');
const User = require('../models/User');

module.exports = {
// lista todos usuarios
     async show(req, res)
    {
        let users = await User.find();
        return res.json(users);
    }, 
  //lista com filtro "email"
     async index(req,res)
    {
        let users = await User.find(
          { email : req.query.email}
                                   );
        return res.json(users);
    },
  // adiciona usuario
  async store(req, res)
     {
        const user =  await User.create(req.body);

        return res.json(user);
     },

    // Deletar usuário
    async destroy(req, res) {
      try {
        const { id } = req.params; // Captura o ID da URL
        const user = await User.findByIdAndDelete(id); // Deleta pelo ID
        if (!user) {
          return res.status(404).json({ error: 'Usuário não encontrado' }); // Caso o ID não exista
        }
        return res.json({ message: 'Usuário deletado com sucesso' });
      } catch (error) {
        return res.status(500).json({ error: 'Erro ao deletar usuário' });
      }
    },

  // altera usuario
  // devesse passar dois dados: o id via param e o json via body
   async update(req,res){
        let user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true}); 
        return res.json(user);
    }

};
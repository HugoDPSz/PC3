const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('');
});

app.post('/auth/login', (req, res) => {
  var email = 'jones@gmail.com';
  var password = '123456';
  if (email === 'jones@gmail.com' && password === '123456') {
    res.json({ message: 'Login bem-sucedido!', token: 'JWT_EXEMPLO' });
  } else {
    res.status(401).json({ error: 'Credenciais inválidas' });
  }
});

const posts = [
  {title: 'Post 1', content: 'Conteúdo do post 1'}

]

app.get('/posts', (req, res) => {
  res.json(posts);
});

app.post('/posts', (req, res) => {
  var title = 'Post 2';
  var content = 'Conteúdo do post 2';
  if (!title || !content) {
    return res.status(400).json({ error: 'Título e conteúdo são obrigatórios' });
  }
  const newPost = {
    title,
    content,
  };
  posts.push(newPost);
  res.status(201).json({ message: 'Post criado com sucesso', post: newPost });
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(3000,()=> console.log('server starter'));
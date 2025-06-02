const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para parsear JSON
app.use(express.json());

// Rota para receber dados do cadastro
app.post('/cadastro', (req, res) => {
  const novoUsuario = req.body;

  // Lê o arquivo usuarios.json
  fs.readFile('usuarios.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Erro ao ler o arquivo:', err);
      return res.status(500).send('Erro no servidor');
    }

    let usuarios = [];
    if (data) {
      usuarios = JSON.parse(data);
    }

    // Adiciona o novo usuário
    usuarios.push(novoUsuario);

    // Escreve no arquivo usuarios.json
    fs.writeFile('usuarios.json', JSON.stringify(usuarios, null, 2), (err) => {
      if (err) {
        console.error('Erro ao escrever no arquivo:', err);
        return res.status(500).send('Erro no servidor');
      }

      res.status(200).send('Usuário cadastrado com sucesso!');
    });
  });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
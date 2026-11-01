const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { validarAluno } = require('./alunoService');

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// Rota para cadastrar alunos
app.post('/alunos', async (req, res) => {
  const { nome, email } = req.body;

  // Usa o serviço para validar os dados
  if (!validarAluno(nome, email)) {
    return res.status(400).json({ erro: 'Dados inválidos. Verifique nome e email.' });
  }

  try {
    const aluno = await prisma.aluno.create({
      data: { nome, email }
    });
    res.status(201).json(aluno);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao salvar no banco de dados. O email já pode estar cadastrado.' });
  }
});

module.exports = app;
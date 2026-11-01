import { describe, it, expect } from 'vitest';
const request = require('supertest');
const app = require('../src/app');

describe('Testes de Rota - API Alunos', () => {
  it('Deve bloquear o cadastro e retornar erro 400 se o email for inválido', async () => {
    const response = await request(app)
      .post('/alunos')
      .send({ nome: 'João', email: 'joao_sem_arroba.com' });

    expect(response.status).toBe(400);
    expect(response.body.erro).toBe('Dados inválidos. Verifique nome e email.');
  });
});
import { describe, it, expect } from 'vitest';
const { validarAluno } = require('../src/alunoService');

describe('Testes Unitários - alunoService', () => {
  it('Deve retornar true se o nome e email forem válidos', () => {
    const resultado = validarAluno('Ricardo Ferreira', 'ricardo@email.com');
    expect(resultado).toBe(true);
  });

  it('Deve retornar false se o email não tiver o símbolo @', () => {
    const resultado = validarAluno('Ricardo', 'ricardoemail.com');
    expect(resultado).toBe(false);
  });
});
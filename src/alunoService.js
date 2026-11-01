// Função simples para validar os dados do aluno antes de salvar
function validarAluno(nome, email) {
  if (!nome || !email) {
    return false;
  }
  if (!email.includes('@')) {
    return false;
  }
  return true;
}

module.exports = { validarAluno };
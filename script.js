function validarCadastro() {
const nome = document.getElementById('nome').value.trim();
const cpf = document.getElementById('cpf').value.trim();
const numero = document.getElementById('numero').value.trim();
const endereco = document.getElementById('endereco').value.trim();
const dataNasc = document.getElementById('dataNasc').value;

// Verifica se todos os campos estão preenchidos
if (!nome || !cpf || !numero || !endereco || !dataNasc) {
alert('Todos os campos são obrigatórios!');
return false;
}

// Validação simples de CPF (11 dígitos numéricos)
if (cpf.length !== 11 || isNaN(cpf)) {
alert('CPF deve ter exatamente 11 dígitos numéricos!');
return false;
}

// Validação básica de número de telefone (pode ser ajustada para formato específico)
if (isNaN(numero) || numero.length < 10) {
alert('Número de telefone inválido! Use pelo menos 10 dígitos.');
return false;
}

// Verifica se a data de nascimento é válida e não futura
const dataNascObj = new Date(dataNasc);
const hoje = new Date();
if (dataNascObj > hoje) {
alert('Data de nascimento não pode ser no futuro!');
return false;
}

alert('Cadastro realizado com sucesso! Entraremos em contato em até 48 horas.');
return true;
}

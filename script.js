const divUsername = document.querySelector('.avatar-content');
divUsername.innerHTML = ('<span>Nome Usuário</span>');

const spanUsername = document.createElement('span');
spanUsername.innerText = 'Nome Usuário';
spanUsername.className= 'username';
divUsername.parentNode.replaceChild(spanUsername, divUsername);

//divUsername.replaceWith(spanUsername); - outra forma;
const [ inputPrimeiroNome] = document.getElementsByName('name');
inputPrimeiroNome.placeholder ='Primeiro Nome';

//opçao2 - inputPrimeiroNome.placeholder = inputPrimeiroNome.placeholder.replace('Nome Completo','Primeiro Nome');


//Atividade 2
//Ex 1
const formInputs = document.querySelectorAll('.form-auth input');
formInputs.forEach(input => input.style.boderRadius = '4px');

//Ex 3
const {body} = document;
body.style.backgroundColor = "#666";

//Ex 4
body.style.cssText = 'backgorund: #666; color: red'


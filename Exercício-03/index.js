// Sistema de gastos familiar.

// Crie um objeto que possuirá 02 propriedades, ambas do ripo array;
 // receitas:[] // despesas[];

 // Agora, crie uma função que irá caucular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo.

 const receitas = [
    salario = 2800
 ];

 const despesas = [
    aluguel = 400,
    luz = 80,
    agua = 40,
    alimentação = 700,
    rastreador = 80,
    internet = 55,
    academia = 50,
    dendista = 60,
    sogrinha = 450,
];

var total = aluguel + luz + agua + alimentação + rastreador + internet + academia + dendista + sogrinha;

var saldo = salario - total;

console.log('Seu salário é de: R$ ' +salario.toLocaleString('pt-BR', {style:'currency', currency:'BRL'}));
console.log('Suas dispesas somaram um total de: R$ ' + total.toLocaleString('pt-BR', {style:'currency', currency:'BRL'}))

if(total < salario){
    console.log('Com base na sua receita e despesa, seu saldo atual é de: R$' +saldo+ 
    ',ou seja, você está fazendo um bom uso do seu salário gastando menos do quê ganha.')

} else if(total == salario){
    console.log('Com base na sua receita e despesas, seu saldo atual é de: R$' 
    +saldo+ ',ou seja, você conseguiu pagar todas as suas contas, porém não sobrou nada.')
    
} else if(total > salario){
    console.log('Com base na sua receita e despesas, seu saldo atual é de: R$'
     +saldo+ ', ou seja você, ultrapassou seu saldo')
};




 
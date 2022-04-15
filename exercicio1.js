/*
1. Escreva funções que implementam as quatro operações aritméticas. Todas elas devem
receber dois valores numéricos como parâmetro e devolver o valor de sua respectiva
operação. Faça a implementação usando a palavra function para todas elas.
*/

function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function divisao(a, b) {
    return a / b;
}

a = 5;
b = 101;

console.log('A soma de A e B eh: ' + somar(a, b));
console.log('A subtracao de A e B eh: ' + subtrair(a, b));
console.log('A multiplicacao de A e B eh: ' + multiplicar(a, b));
console.log('A divisao de A e B eh: ' + parseFloat(divisao(a, b).toFixed(2)));


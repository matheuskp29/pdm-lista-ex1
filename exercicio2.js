/*
2. Refaça o exercício 1 usando arrow functions.
*/

const somar = (a, b) => {
    return a + b;
}

const subtrair = (a, b) => {
    return a - b;
}

const multiplicar = (a, b) => {
    return a * b;
}

const divisao = (a, b) => {
    return a / b;
}

a = 75;
b = 24;

console.log('A soma de A e B eh: ' + somar(a, b));
console.log('A subtracao de A e B eh: ' + subtrair(a, b));
console.log('A multiplicacao de A e B eh: ' + multiplicar(a, b));
console.log('A divisao de A e B eh: ' + parseFloat(divisao(a, b).toFixed(2)));
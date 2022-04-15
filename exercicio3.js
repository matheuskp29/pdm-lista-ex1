/*
3. Crie um objeto JSON que abriga todas as operações do exercício 2.
*/

operacoes = {
    somar: somar = (a, b) => {
        return a + b;
    },
    subtrair: subtrair = (a, b) => {
        return a - b;
    },
    multiplicar: multiplicar = (a, b) => {
        return a * b;
    },
    divisao: divisao = (a, b) => {
        return a / b;
    }
}

a = 55;
b = 5;

console.log('A soma de A e B eh: ' + operacoes.somar(a, b));
console.log('A subtracao de A e B eh: ' + operacoes.subtrair(a, b));
console.log('A multiplicacao de A e B eh: ' + operacoes.multiplicar(a, b));
console.log('A divisao de A e B eh: ' + parseFloat(operacoes.divisao(a, b).toFixed(2)));
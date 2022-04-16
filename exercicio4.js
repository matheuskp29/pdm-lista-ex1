/*
Escreva um script que apresenta as seguintes operações para o usuário:
1- Soma
2- Subtração
3-Multiplicação
4- Divisão
5- Sair
O programa deve ficar em loop até que o usuário digite 5. Se o usuário digitar uma opção
inválida, o programa deve informá-lo disso e mostrar o menu de opções novamente. Use
o objeto JSON do exercício 4 para realizar as operações aritméticas.
*/
import promptSync from 'prompt-sync';

const scanner = promptSync();

const operacoes = {
    somar: (a, b) => {
        return a + b;
    },
    subtrair: (a, b) => {
        return a - b;
    },
    multiplicar: (a, b) => {
        return a * b;
    },
    divisao: (a, b) => {
        return a / b;
    }
}

console.log('Bem vindo ao programa de calculadora!\n')
console.log('Informe o valor do primeiro numero: ')
let a = parseInt(scanner())
console.log('\nInforme o valor do segundo numero: ')
let b = parseInt(scanner())

let opcao = 0

while (opcao !== 5) {

    console.log('\nSelecione algumas das opcoes abaixo para calcular \n')
    console.log('1 - Soma \n2 - Subtracao \n3 - Multiplicacao \n4 - Divisao \n5 - Sair. \n')
    opcao = parseInt(scanner())
    switch (opcao) {
        case 1:
            console.log('Soma: ' + operacoes.somar(a, b))
            break;
        case 2:
            console.log('Subtracao: ' + operacoes.subtrair(a, b))
            break;
        case 3:
            console.log('Multiplicacao: ' + operacoes.multiplicar(a, b))
            break;
        case 4:
            console.log('Divisao: ' + operacoes.divisao(a, b))
        case 5:
            break;
        default:
            console.log('Opcao informada eh invalida')
            break;
    }
}

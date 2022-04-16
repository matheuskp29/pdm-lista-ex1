/*
6. Refaça o exercício 5 usando a construção async/await.
*/

import promptSync from 'prompt-sync';
import 'dotenv/config';
import fetch from 'node-fetch';

const scanner = promptSync();

console.log('Selecione uma opcao: ')

main()


async function main() {
    do {
        console.log('1 - Digitar Latitude e longitude.')
        console.log('2 - Sair')
        let op = parseInt(scanner())

        if (op === 1) {
            console.log('Digite a Latidude: ')
            let lat = parseFloat(scanner())
            console.log('Digite a Longitude: ')
            let long = parseFloat(scanner())

            let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${process.env.API_KEY}&units=${process.env.UNITS}`;
        
            try {
                const res = await fetch(url)
                const response = await res.json();
                console.log(`\nTemperatura do local: ${response.main.temp}° graus \n`)
            } catch{
                console.log('\nLatitude ou longitude nao encontrada. Tente Novamente\n')
            }
            
        } else if (op === 2) {
            break
        } else {
            console.log('Opcao invalida!')
        }
    } while (true)
}
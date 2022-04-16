/* O serviço Current weather data pode ser encontrado no link a seguir. Observe que ele
não é o mesmo utilizado em aula. https://openweathermap.org/current
Faça um programa que, utilizando promises e as funções then/catch, exibe a temperatura
atual (atributo chamado  temp). O programa deve ser um loop que exibe as seguintes
opções para o usuário: 1- Digitar latitude e longitude 2- Sair
O programa fica em loop até que o usuário digite 2. Ao digitar 1, o usuário deve
informar   os   valores   de   latitude   e   longitude   da   localização   da   qual   deseja   saber   a
temperatura atual. Use um arquivo .env e o pacote dotenv para configurar uma variável
de ambiente que indica qual unidade de medida  de temperatura  deve ser utilizada:
Kelvin, Fahrenheit ou Celsius. Lembre-se de armazenar a chave de API no arquivo .env
e de tomar o cuidado de não armazená-lo no sistema de controle de versão.
*/
import promptSync from 'prompt-sync';
import 'dotenv/config';
import fetch from 'node-fetch';

const scanner = promptSync();

console.log('Selecione uma opcao: ')

main()

function main() {
    console.log('1 - Digitar Latitude e longitude.')
    console.log('2 - Sair')
    let op = parseInt(scanner())
    
    if(op === 1) {
        console.log('Digite a Latidude: ')
        let lat = parseFloat(scanner())
        console.log('Digite a Longitude: ')
        let long = parseFloat(scanner())

        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${process.env.API_KEY}&units=${process.env.UNITS}`;
        
        const consultaApi = fetch(url)
        .then(res => res.json()
        .then(res => {
            console.log(`\nTemperatura do local: ${res.main.temp}° graus\n`)
            main()
            })
        .catch(() => {
            console.log(`\nLatitude ou longitude não encontrada. Tente novamente!\n`)
            main()
        }))
    } else if (op !== 2) {
        console.log('\nOpcao invalida!\n')
        main()
    }
}
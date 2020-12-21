const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

bemVindo()

rl.question("Digite a operação desejada: ", function (operacao) {
    rl.question("Digite o primeiro numero: ", function (primeiroNumero) {
        rl.question("Digite o segundo numero: ", function (segundoNumero) {
            if (operacao == 1) {
                adicao(+primeiroNumero, +segundoNumero)
            } else if (operacao == 2) {
                subtracao(+primeiroNumero, +segundoNumero)
            } else {
                console.log('Operação Inválida !!!')
            }
            rl.close();
        });
    });
});

function bemVindo() {
    console.log('Bem vindo a calculadora da Carol')

    console.log('\n1 - Operação de Adição')
    console.log('2 - Operação de Subtração')
}

function adicao(numero1, numero2) {
    let resultado = numero1 + numero2

    console.log(`O resultado da operação é ${resultado}`)
}

function subtracao(primeiroNumero, segundoNumero) {
    let resultado = primeiroNumero - segundoNumero

    console.log(`O resultado da operação é ${resultado}`)
}
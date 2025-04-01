/*Esse módulo implementa as funções da calculadora.
Essas funções devem ser exportadas para serem usadas em outras outros arquviso fontes*/

function somar(a, b){
    return  a + b;
}

function subtrair(a, b){
    return a - b;
}

function multiplicar(a, b){
    return a * b;
}

function dividir(a, b){
    return a / b;
}

//module.exports para transformar em módulo o que quero exportar
module.exports = {
    somar, //só o nome da função para exportá-la
    subtrair,
    multiplicar,
    dividir
};

//outra maneira de fazer o module.exports para exportar as funções ou uma variavel 
/*export function somar(a, b){
    return a + b;
}
    
exports const PI = 3.14*/
//Módulo com as funções da calculadora

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
    somar,
    subtrair,
    multiplicar,
    dividir
};
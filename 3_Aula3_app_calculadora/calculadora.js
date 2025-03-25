//Módulo: essa funções ficam em um arquivo a parte e toda vez que precisar dessas funções eu carrego esse modulo
//Repositório de módulos: npm é o gerenciador de pacotes

function somar(a, b){
    return a + b;
}

function subtrair(a,b){
    return a - b;
}

function multiplicar(a, b){
    return a * b;
}

function dividir(a, b){
    return a / b;
}

//module.exports para transforma em módulo o que quero exporta
module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
}
//Módulo: essa funções ficam em um arquivo a parte e toda vez que precisar dessas funções eu carrego esse modelu

//importar as funções 
const calc = require('./calculadora');

console.log(calc.somar(2,3));
console.log(calc.subtrair(2,3));
console.log(calc.multiplicar(2,3));
console.log(calc.dividir(2,3));
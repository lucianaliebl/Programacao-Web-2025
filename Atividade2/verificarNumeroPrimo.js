function verificarNumeroPrimo(n){
    if (n <= 1){
        return false; //nº <= não são primos
    } 
    for (let i = 2; i <= Math.sqrt(n); i++){
        if( n % i === 0){
            return false; //se for divisivel por algum nº além de 1 e ele mesmo, ñ é primo
        }
    }
    return true;
}

console.log(`verificarNumeroPrimo(${0}) = ${verificarNumeroPrimo(0)}`);

console.log(`verificarNumeroPrimo(${1}) = ${verificarNumeroPrimo(1)}`);

console.log(`verificarNumeroPrimo(${2}) = ${verificarNumeroPrimo(2)}`);

console.log(`verificarNumeroPrimo(${3}) = ${verificarNumeroPrimo(3)}`);

console.log(`verificarNumeroPrimo(${7}) = ${verificarNumeroPrimo(7)}`);

console.log(`verificarNumeroPrimo(${83}) = ${verificarNumeroPrimo(83)}`);

console.log(`verificarNumeroPrimo(${100}) = ${verificarNumeroPrimo(100)}`);

console.log(`verificarNumeroPrimo(${991}) = ${verificarNumeroPrimo(991)}`);

console.log(`verificarNumeroPrimo(${104729}) = ${verificarNumeroPrimo(104729)}`);

console.log(`verificarNumeroPrimo(${14348907}) = ${verificarNumeroPrimo(14348907)}`);
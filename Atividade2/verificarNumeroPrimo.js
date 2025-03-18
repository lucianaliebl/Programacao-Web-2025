function verificarNumeroPrimo(n){ //não precisa declrar n, pq ele é uma variável que só existe para a função
    if (n < 2){
        return false; //nº <= 1 não são primos
    } 
    if( n <= 3){
        return true; // 3 e 2 são primos
    }
    if(n % 2 == 0){
        return false; //nº pares não são primos
    }
    for(let i = 3; i < n; i+=2){
        if(n % i == 0){
            return false; 
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
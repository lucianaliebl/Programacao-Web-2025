let num_A = 2;
let num_B = 3.0;
let num_C;

const operacoes = ["adição", "subtração", "multiplicação", "divisão"];

function imprimirResultado(operador1, operador2, operacao, resultado ){
    console.log(`A ${operacao} entre ${operador1} e ${operador2} é igual a ${resultado}`);
}

num_C = num_A + num_B;
//imprimirResultado(num_A, num_B, operacoes[0], num_C);

num_C = num_A - num_B;
//imprimirResultado(num_A, num_B, operacoes[1], num_C);

num_C = num_A * num_B;
//imprimirResultado(num_A, num_B, operacoes[2], num_C);

num_C = num_A / num_B;
//imprimirResultado(num_A, num_B, operacoes[3], num_C);

/*
Matriz: 
1 2 3
4 5 6
*/

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function imprimirMatriz(A){
    for(let i = 0; i < A.lenght; i++){
        let linha = "";
        for(let j; j < A[i].lenght; j++){
            console.log(A[i][j] + "\t");
        }
        console.log(linha);
    }
}

//imprimirMatriz(matriz);

let capitais = {
    DF: "Brasilia",
    DDD_DF: 61,
    SP: "São Paulo",
    DDD_SP: 11,
    RJ: "Rio de Janeiro",
    DDD_RJ: 21
};

//console.log(capitais.DF + " - " + capitais.DDD_DF);

for(chave in capitais){
    console.log(chave + "=" + capitais[chave]);
}

function verificarParidade(n){
    if(n % 2 == 0){
        return true;
    }
    return false;
}

let n = 2;
console.log(`verificarParidade(${n})=${verificarParidade(n)}`) ;
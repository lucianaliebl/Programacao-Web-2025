function imprimirMatriz(P){
    for(let i = 0; i < P.length; i++){
        let linha = "";
        for(let j = 0; j < P[i].length; j++){
            linha += P[i][j] + "\t";
        }
        console.log(linha);
    }
}

function transporMatriz(matrizB){
    let transposta = [];
    for(let i = 0; i < matrizB[0].length; i++){
        transposta[i] = [];
        for(let j = 0; j < matrizB.length; j++){
            transposta[i][j] = matrizB[j][i];
        }
    }
    console.log("Matriz transposta:");
    imprimirMatriz(transposta);
    return transposta;
}


let matrizA = [
              [1, 2, 3],
              [4, 5, 6],
              [7, 8, 9]
];

console.log("Matriz Original:");
imprimirMatriz(matrizA);

let matrizTransposta = transporMatriz(matrizA);




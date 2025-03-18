function transporMatriz(matrizB){
    console.log("\nMatriz Original\n");
    for(let i = 0; i < matrizB.length; i++){ //P.length diz a qtd de linhas
        let linha = "";
        for(let j = 0; j < matrizB[0].length; j++){ //para cada linha vejo a qtd de colunas
            linha += matrizB[i][j] + "\t"; //linha recebe o elemento espaço elemento
        }
        console.log(linha);//imprime a linha
    }

    console.log("\nMatriz transposta\n");
    for(let j = 0; j < matrizB[0].length; j++){//percorrer primeiro as colunas
        let linha = "";
        for(let i = 0; i < matrizB.length; i++){ //depois percorre a linha
            linha += matrizB[i][j] + "\t";
        }
        console.log(linha);//imprime a linha
    } 

}

let matrizA = [
              [1, 2],
              [3, 4],
              [5, 6]
];
    
transporMatriz(matrizA);





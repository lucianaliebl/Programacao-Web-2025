//Cria um array vazio que armazenará os produtos
let estoque = [];

//função para colocar o objeto dentro do array apend.array
//Define uma função que recebe três parâmetros para adicionar um produto ao estoque.
function adicionarProdutos(id_prod, nome_prod, qtd_prod){
    //Adiciona um novo objeto ao array . O objeto contém o id, o nome  e a qtd, que é convertida para número inteiro com parseInt
    estoque.push({id_prod, nome_prod, qtd_prod: parseInt (qtd_prod)});
    return (`O produto ${nome_prod} foi cadastrado com sucesso`);
};

// Define uma função que retorna todos os produtos do array estoque
function listaProdutos(){
    return estoque; //Retorna o conteúdo atual do array estoque
}

// Define uma função que remove um produto do array com base no seu id
function removerProdutos(id_prod){
    const tamanhoInicial = estoque.length; //Salva o tamanho inicial do array antes de remover o produto.
    estoque = estoque.filter(produto => produto.id_prod !== id_prod); //Filtra os produtos que não possuem o id especificado e atualiza o array estoque
    return tamanhoInicial != estoque.length //Compara o tamanho do array antes e depois da remoção para verificar se o produto foi encontrado e removido
        ? `Produto com ID ${id_prod} removido com sucesso!`
        : `Produto com ID ${id_prod} não encontrado` 
}

//Define uma função para editar a quantidade de um produto no estoque.
function editarQuantidade(id_prod, qtd_prod){
    const produto = estoque.find(produto => produto.id_prod === id_prod) //Encontra o produto com o  especificado.
    if (produto){
        produto.qtd_prod = parseInt(qtd_prod); //Se o produto existe, atualiza sua quantidade, convertendo-a para inteiro.
        return `Quantidade do produto com ID ${id_prod} alterada para ${qtd_prod}.`;//Retorna uma mensagem confirmando a alteração ou informando que o produto não foi encontrado.
    }else {
        return `Produto com ID ${id_prod} não encontrado.`;
    }
}

//Exporta as funções para que possam ser usadas em outro arquivo (como o index.js).
module.exports = {
    adicionarProdutos,
    listaProdutos,
    removerProdutos,
    editarQuantidade
}




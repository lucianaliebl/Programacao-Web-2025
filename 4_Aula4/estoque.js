//o index usa as funções para acessar esse array de itens, ele não pode acessar diretamente
let itens = []; //array de itens que começa vazio

//função adicionar que recebe certo item 
function adicionar(item){
    let item_valido = true;
    //fazendo validações do que o user informou, ex.: se id é realmente um nº
    if(
        !is_numerico(item.id) ||
        is_id_cadastrado(item.id) || 
        item.id <= 0 ||
        !is_numerico(item.qtd) ||
        item.qtd < 0 ||
        item.nome.length <= 0
    ){
        item_valido = false;
    }


    if(item_valido){ // se o que for informado pelo user estiver correto eu insiro no array
        itens.push(item); //adiciona um item ao array 
    }
    return item_valido; //para saber que deu certo a adicição de produto
}

//Função listar retornar o array de itens
function listar(){
    return itens;
}

//Percorrer o array para encontrar o objeto que tem o id deseja e mudo a qtd
//foreach é uma função para acessar item por item do array e item_cadastrado é uma variável dessa função que recebe o valor que o forEach está passando
function editar(id, qtd){
    let item_valido = true;
    if(
        !is_id_cadastrado(id) || //se o id não esta cadastrado
        !is_id_cadastrado(id) || // se o id não for numerico
        !is_numerico(qtd)
    ){
        item_valido = false;
    }

    if(item_valido){
        itens.forEach(item_cadastrado => { //para cada item cadastrado comporo o id cadastrado com o id que quero editar. 
            if(item_cadastrado.id == id){
                item_cadastrado.qtd = qtd; //se for o id do produto que eu quero, modifico a qtd do item
            }
        });
    }
    return true;
}

//Para essas funções serem exportadas para o index tem que exportar
module.exports = {
    adicionar,
    listar,
    editar
}

//Função informa se o id já está cadastrado
function is_id_cadastrado(id){
    let id_cadastrado = false; //assumo que o id não está cadastrado 
    itens.forEach(item_cadastrado => { //percorrer o array para verificar os ids da lista
        if(item_cadastrado.id == id){
            id_cadastrado = true; //se já existe um id na lista
        }
    });
    return id_cadastrado;
}

function is_numerico(n){
    if(isNaN(n) || n == null){ //isNam = is not a number --> se o n não é numerico ou é nulo retorna false
        return false;
    } 
    return true;
}
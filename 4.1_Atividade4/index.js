// Importa o framework Express.js.
const express = require('express');

//Cria uma aplicação do tipo express
const app = express(); 

//Importa as funções definidas no arquivo estoque.js
const estoque = require('./estoque');

//Define a rota adicionar. Os parâmetros id, nome e qtd são extraídos da URL.
app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
    const {id, nome, qtd} = req.params; // Obtém os parâmetros da URL
    const mensagem = estoque.adicionarProdutos(id, nome, qtd); //Chama a função adicionarProdutos do estoque .
    res.send(mensagem);// Retorna a mensagem de confirmação
})

//Define a rota /listar para listar os produtos
app.get('/listar', (req,res) =>{
    res.json(estoque.listaProdutos()); //Retorna os produtos no formato JSON.
});

//Define a rota /remover para remover um produto com base no id
app.get('/remover/:id', (req, res) => {
    const {id} = req.params; // obtém o id da URL
    const mensagem = estoque.removerProdutos(id); //Chama a função removerProdutos e retorna uma mensagem.
    res.send(mensagem);
});

//Define a rota /editar para alterar a quantidade de um produto.
app.get('/editar/:id/:qtd', (req, res) => {
    const {id, qtd} = req.params; //Obtém os parâmetros da URL.
    const mensagem = estoque.editarQuantidade(id, qtd); // Chama a função editarQuantidade e retorna uma mensagem.
    res.send(mensagem);
});

//Define a porta na qual o servidor rodará
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
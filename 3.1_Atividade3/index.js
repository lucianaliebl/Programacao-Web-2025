//Importa o módulo Express, que será usado para criar o servidor web
const express = require('express');

//Importa o módulo calculadora que contém as funções de operações matemáticas
const calculadora = require('./calculadora');
const { parse } = require('path');

//Cria uma instância da aplicação Express
const app = express();

//Define uma rota para a soma com dois parÂmetros 'a' e 'b'
app.get('/somar/:a/:b', (req, res) =>{
    //converte o parâmetro 'a' da URL para o nº (tipo float)
    const a = parseFloat(req.params.a);
    //converte o parâmetro 'b' da URL para o nº (tipo float)
    const b = parseFloat(req.params.b);
    //chama a função somar do módulo calculadora com os valores 'a' e 'b'
    const resultado = calculadora.somar(a, b);
    //envia como resposta o resultado da soma
    res.send(`Resultado da soma: ${resultado}`);
});

//Define a rota para a subtração com dois parâmetros 'a' e 'b'
app.get('/subtrair/:a/:b', (req,res) => {
    //converte o parâmetro 'a' da URL para nº do tipo float
    const a = parseFloat(req.params.a);
    //converte o parâmetro 'b' da URL para nº do tipo float
    const b = parseFloat(req.params.b);
    //chamar a função subtrair do módulo calculadora
    const resultado = calculadora.subtrair(a, b);
    //envia como resposta o resultado da subtração
    res.send(`Resultado da subtração: ${resultado}`);
});

//Define uma rota para a multiplicação com dois parâmetros 'a' e 'b
app.get('/multiplicar/:a/:b', (req, res) => {
    //converte o parâmetro 'a' da URL para nº do tipo float
    const a = parseFloat(req.params.a);
    //converte o parâmetro 'b' da URL para nº do tipo float
    const b = parseFloat(req.params.b);
    //chama a função multiplicar do módulo calculadora
    const resultado = calculadora.multiplicar(a, b);
    //envia como resposta o resultado da multiplicação
    res.send(`Resultado da multiplicação: ${resultado}`);
});

//Define uma rota para a divisão com dois parâmetros 'a' e 'b'
app.get('/dividir/:a/:b', (req, res) => {
    //converte o parâmetro 'a' da URL para nº do tipo float 
    const a = parseFloat(req.params.a);
    //converte o parâmetro 'b' da URL para nº do tipo float
    const b = parseFloat(req.params.b);
    //chama a função dividir do módulo calculadora
    const resultado = calculadora.dividir(a, b);
    //envia como resposta o resultado da divisão
    res.send(`Resultado da divisão: ${resultado}`);
});

//Define a porta na qual o servidor rodará
const PORT = 8080;

//Faz o servidor começar a "escutar" requisições na porta definida
app.listen(PORT, () => {
    //Exibe no console uma mensagem indicando que o servidor está rodando
    console.log(`Servidor rodando na porta ${PORT}`);
});
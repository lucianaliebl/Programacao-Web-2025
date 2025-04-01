//Tem que executar este arquivo

//Importa o módulo Express, que será usado para criar o servidor web
const express = require('express'); // contante express tem como conteúdo o módulo express

//Implementa uma aplicação web que fica rodando este codigo

//Carrega o módulo calculadora na variavel calculadora
//Importa o módulo calculadora que contém as funções de operações matemáticas
const calculadora = require('./calculadora'); // calculadora é um variavel que tem como conteúdo um modulo. O require importa o modulo
const { parse } = require('path');

//Cria uma aplicação do tipo Express
const app = express();

//Define o comportamento da aplicação
//Para requisições na porta '/'
app.get('/', (req, res) =>{
    //criando variavel html 
    let html = '<h1>app_calculadora</h1>';
    html += '<h3>Rotas disponíveis:</h3>';
    html += '<p>/somar/:a/:b <a href="/somar/1/2">testar</a>,/p>';
    html += '<p>/subtrair/:a/:b <a href="/subtrair/1/2">testar</a>,/p>';
    html += '<p>/multiplicar/:a/:b <a href="/multiplicar/1/2">testar</a>,/p>';
    html += '<p>/dividir/:a/:b <a href="/dividir/1/2">testar</a>,/p>';
    res.send(html)
});

//Define o comportamento da aplicação
//Define uma rota para a soma com dois parâmetros 'a' e 'b'
//Quando o user acessar esse endereço '/somar/:a/:b' acontece o seguinte:
app.get('/somar/:a/:b', (req, res) =>{
    //converte o parâmetro 'a' da URL para o nº (tipo float)
    const a = parseFloat(req.params.a); //req.params recupera o valor do parametro a que o user inseriu
    //converte o parâmetro 'b' da URL para o nº (tipo float)
    const b = parseFloat(req.params.b);
    //chama a função somar do módulo calculadora com os valores 'a' e 'b'
    const resultado = calculadora.somar(a, b);
    //envia como resposta o resultado da soma
    res.send(`Resultado da soma: ${resultado}`);
});
/*
Como o prof fez:
app.get('/soma/:a/:b', (req,res) => {
    let a = Number(req.params.a); o number garante que o que o user inseriu e um nº
    let b = Number(req.params.b);
    res.send(`${a} + ${b} = ${calc.somar(a,b)}`);
});
*/ 

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
    res.send(`Resultado da divisao: ${resultado}`);
});

//Define a porta na qual o servidor rodará
const PORT = 8080;

//Faz o servidor começar a "escutar" requisições na porta definida
app.listen(PORT, () => {  //() função anonima
    //Exibe no console uma mensagem indicando que o servidor está rodando
    console.log(`Servidor rodando na porta ${PORT}`);
});
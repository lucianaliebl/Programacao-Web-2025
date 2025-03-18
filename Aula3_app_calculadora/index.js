//Módulo: essa funções ficam em um arquivo a parte e toda vez que precisar dessas funções eu carrego esse modelu

//importar as funções 
const calc = require('./calculadora');
const express = require('express');

const app = express();

app.get('/', (req, res) =>{
    res.send('Olá mundo!')
});

app.get('/ola/:nome', (req, res)=>{
    res.send(`Ólá, ${req.params.nome}!`)
});

const PORT = 8080;
app.listen(PORT, () =>{
    console.log('app rodando na porta ' + PORT);
})

/*console.log(calc.somar(2,3));
console.log(calc.subtrair(2,3));
console.log(calc.multiplicar(2,3));
console.log(calc.dividir(2,3));*/
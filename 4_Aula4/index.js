//Para criar o servidor web
const express = require('express'); //importo o pacote express
const estoque = require('./estoque'); //usa o ./ para indicar que esse arquivo esta na mesma pasta que o index 
const app = express() //app recebe o retorno da função express (uso o pacote por meio de uma chamda de função)

//Quando o user acessar esse endereço '/', responda com o nome da aplicação
app.get('/', (req, res) => {
    let html =   '<h1>app_estoque</h1>';
    html     +=  '<h3>Rotas disponiveis:</h3>';
    html     +=  '<p>/adicionar/:id/:nome/:qtd<p>';
    html     +=  '<p>/listar</p>';
    html     +=  '<p>/remover/:id</p>';
    html     +=  '<p>/editar/:id/:qtd</p>';
    res.send(html);
});

//Programar o comportamento da aplicação para essa rota
app.get('/adicionar/:id/:nome/:qtd', (req,res)=>{
    let item = { //variavet item do tipo objeto. Criando o objeto
        id: Number(req.params.id), // o id é o que o usuario digitou como parametro. Usa number para garantir que será numero
        nome: req.params.nome, //preenche com os valores que o user digitou na requisição 
        qtd: Number(req.params.qtd),
    }; 
    res.send(estoque.adicionar(item));// envia uma resosta para o user (envia uma resposta para a requisição do user)
});

//Programando o comportamento da aplicação para essa rota
app.get('/listar', (req, res) => {
    res.send(estoque.listar());
});

app.get('/editar/:id/:qtd', (req, res) => {
    let id = Number(req.params.id);
    let qtd = Number(req.params.qtd);
    res.send(estoque.editar(id, qtd)); // devolve uma resposta para o user. Passa para a função editar o id e o qtd que o user informou
});

const PORT = 8080;

//Aplicação web é um processo que fica escutando requisições em certa porta
app.listen(PORT, () => {
    console.log('App rodando na porta ' + PORT);
});
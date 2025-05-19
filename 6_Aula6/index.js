const express         = require('express'); //importa o pacote express
const mustacheExpress = require('mustache-express'); //importa o pacote mustache
const app             = express(); //cria um app do tipo express usando o pacote importado

//constroi um renderizador de html para a aplicação
app.engine ('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname +'/views');
app.use(express.urlencoded({extended: true})); //transforma em um objeto

app.get('/', (req, res)=>{
    res.render('index.html');
});

app.post('/agendar_consulta', (req, res)=>{
    //A lógica de validação deve ficar no index.js e o index.html apenas exibe o formulário e as mensagens de erro   let form_invalido = false;
    let campos_invalidos = []
    const dataProcessamento = new Date();
    const dataConsulta = new Date(req.body.data_consulta)

    let dados_consulta = req.body //recuperar os dados do formulario

    if(req.body.nome.length == 0){ // tamanho da string nome é igual 0, nome é invalido
        form_invalido = true;
        campos_invalidos.push("Nome");
    }

    if(req.body.sobrenome.length == 0){ // tamanho da string sobrenome é igual 0, nome é invalido
        form_invalido = true;
        campos_invalidos.push("Sobrenome");
    }

    if(req.body.cpf.length == 0){ // tamanho da string nome é igual 0, cpf é invalido
        form_invalido = true;
        campos_invalidos.push("CPF");
    }

    if(req.body.data_nascimento.length == 0){
        form_invalido = true;
        campos_invalidos.push("Data de Nascimento");
    }

    if(req.body.telefone.length == 0){
        form_invalido = true;
        campos_invalidos.push("Telefone");
    }

    if(req.body.cep.length == 0){
        form_invalido = true;
        campos_invalidos.push("CEP");
    }

    if(req.body.endereco.length == 0){
        form_invalido = true;
        campos_invalidos.push("Endereço");
    }
   
    if(req.body.clinica.length == 0){
        form_invalido = true;
        campos_invalidos.push("Clinica");
    }
    
    if(req.body.especialidade.length == 0){
        form_invalido = true;
        campos_invalidos.push("Especialidade");
    }

    if(req.body.data_consulta.length == 0){
        form_invalido = true;
        campos_invalidos.push("Data da Consulta");
    }

    if(dataConsulta <= dataProcessamento){
        form_invalido = true;
        campos_invalidos.push("Data da consulta");
    }

    if(req.body.hora_consulta.length == 0){
        form_invalido = true; 
        campos_invalidos.push("Hora da consulta");
    }

    res.render('index.html', {form_invalido, campos_invalidos, dados_consulta});
});

const PORT = 8080;
app.listen(PORT,() =>{
    console.log(`app rodando na porta ` + PORT);
});
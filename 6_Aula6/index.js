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
    //Validção
    let form_invalido = false;
    let campos_invalidos = []

    let dados_consulta = req.body //recuperar os dados do formulario

    if(req.body.nome.lenght == 0){ // tamanho da string nome é igual 0, nomeé invalido
        form_invalido = true;
        campos_invalidos.push("Nome");
    }

    if(req.body.sobrenome.lenght == 0){ // tamanho da string nome é igual 0, nomeé invalido
        form_invalido = true;
        campos_invalidos.push("Sobrenome");
    }

    if(req.body.cpf.lenght == 0){ // tamanho da string nome é igual 0, nomeé invalido
        form_invalido = true;
        campos_invalidos.push("CPF");
    }
    res.render('index.html', {form_invalido, campos_invalidos, dados_consulta});
});

const PORT = 8080;
app.listen(PORT,() =>{
    console.log(`app rodando na porta ` + PORT);
});
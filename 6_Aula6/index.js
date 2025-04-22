const express         = require('express'); //importa o pacote express
const mustacheExpress = require('mustache-express'); //importa o pacote mustache
const app             = express(); //cria um app do tipo express usando o pacote importado

//constroi um renderizador de html para a aplicação
app.engine ('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname +'/views');

const PORT = 8080;
app.listen(PORT,() =>{
    console.log(`app rodando na porta ` + PORT);
})
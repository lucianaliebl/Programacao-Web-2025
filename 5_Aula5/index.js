const express         = require('express'); //importa o pacote express
const mustacheExpress = require('mustache-express'); //importa o pacote mustache
const app             = express(); //cria um app do tipo express usando o pacote importado

//constroi um renderizador de html para a aplicação 
app.engine ('html', mustacheExpress());//app quando for renderizar o html usa o mustache
app.set('view engine', 'html');
app.set('views', __dirname +'/views');



//Declarar uma rota
app.get('/ola/:nome', (req,res)=> { //()=> {} descreve o comportamento dessa rota quando ela for acionada
    let nome = req.params.nome //recupera o nome inserido pelo user
    res.render('index.html', {nome}); //renderizar o arquivo html, mas o express não consegue renderizar sozinho

}); 


const PORT = 8080; //cria uma constante porta
app.listen(PORT,()=>{
    console.log(`app rodando na porta ` + PORT);
})
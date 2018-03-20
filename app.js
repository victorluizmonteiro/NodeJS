//Importamos o arquivo de configuração do express
var configuracao = require("./config/express");

//Inicializamos o arquivo
var app = configuracao();

//Quando o arquivo do express subir para o servidor, ele mesmo importará o modulo de rotas

//Importamos o modulo de rotas, passando para ele a configuração do express como parametro
//var rotaProdutos = require("./app/routes/produtos")(app);

//Inicializamos o servidor com o metodo listen, onde passamos a porta e uma função anonima
app.listen(3000,function(){
    console.log("servidor rodando");
})
//Importamos o arquivo de configuração do express
var configuracao = require("./config/express");
//Inicializamos o arquivo
var app = configuracao();

//Configuramos uma rota, que retorna um html para o cliente
app.get("/produtos",function(req,res){

    /* Aqui estamos criando um html para ser respondido
    res.send("<html><body><h1>Produtos</h1></body></html>")
    */

    //Rendereizamos uma página, neste exemplo utilizando a engine EJS
    res.render("produtos/lista");
});

//Inicializamos o servidor com o metodo listen, onde passamos a porta e uma função anonima
app.listen(3000,function(){
    console.log("servidor rodando");
})
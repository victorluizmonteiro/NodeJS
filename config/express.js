//Importamos o módulo do express,este import nos retorna uma função não inicializada
var express = require("express");
//Inicializamos a função
var app = express();

//Definimos a engine de renderização das páginas
app.set('view engine','ejs');

//Para carregarmos módulos,a CommonJS determina que é necessario utilizar o objeto module.exports
module.exports = function(){
    return app;
}
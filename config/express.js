//Importamos o módulo do express,este import nos retorna uma função não inicializada
var express = require("express");

//Importa o modulo do Express-Load
var load = require('express-load');

//Para carregarmos módulos,a CommonJS determina que é necessario utilizar o objeto module.exports
module.exports = function () {

    //Inicializamos a função
    var app = express();

    //Definimos a engine de renderização das páginas
    app.set('view engine', 'ejs');
    //Informa para o Express, onde ele encontrará nosso pacote views, tendo nossos arquivos ejs
    app.set('views', './app/views')
    /*load(params).into(app) informa para o Express Load onde ele deve importar os módulos
    o .then encadeia os arquivos á serem importados
    o parametro cwd : 'app' indica para o express onde ele deve procurar os arquivos
    */
    load('routes',{cwd : 'app'}).then('infra').into(app)
    return app;
}
//Importa o arquivo de conexão com o banco de dados, retorna o createConnection
//var connectionFactory = require('../infra/connectionFactory');

//Passamos o argumento app como parâmetro, que será enviado pelo arquivo app.js
module.exports = function(app){
    //Configuramos uma rota, que retorna um html para o cliente
    app.get("/produtos",function(req,res){

        //Inicializa o createConnection importado do arquivo connectionFactory.js
       var connection = app.infra.connectionFactory();

        //Executa uma query no banco de dados, recebe como parametro a query e uma função que será executada após a consulta
        connection.query('select * from produtos',function(err,results){

            //Rendereizamos uma página, neste exemplo utilizando a engine EJS enviando para ela a lista de retornada pela query
        res.render("produtos/lista",{lista : results});
           
        });

        //Fecha a conexão
        connection.end();

        /* Aqui estamos criando um html para ser respondido
        res.send("<html><body><h1>Produtos</h1></body></html>")
        */
    
        
    });

    
}

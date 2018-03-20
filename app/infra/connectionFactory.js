//Importamos o módulo do MySQL
var mysql = require('mysql');


/*Deixamos o código de criar o banco dentro de um Wrapper
para que o Express Load não crie uma conexão com o banco assim que subir a aplicação.
Desta forma, só será criada uma conexão com o banco,assim que o objeto createDBConnection for chamado.
*/
function createDBConnection(){
     //Objeto responsável por criar a conexão com o banco.
     return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'casadocodigo_nodejs'
    });
}

module.exports = function () {

    return createDBConnection;
   
}

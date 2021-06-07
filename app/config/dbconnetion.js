var mysql = require('mysql');

let db = null;

function iniciar(){
    if(!db){
        db = mysql.createPool({
            connectionLimit : process.env.CONNECTION_LIMIT || 1,
            host : process.env.MYSQL_HOST,
            user : process.env.MYSQL_USER,
            password : process.env.MYSQL_PASSWORD || '',
            database : process.env.MYSQL_DATABASE

        });
    }
}

iniciar();

module.exports = db;
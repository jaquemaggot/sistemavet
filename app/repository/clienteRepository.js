const mysql = require('../utils/mysql');

module.exports={
    inserir,
    listar,
    deletar,
    atualizar,
    buscarid
}

async function inserir(cliente){
    await mysql.executeQuery('INSERT INTO clientes SET ?',cliente);
}

async function listar(){
    return mysql.executeQuery('SELECT * FROM clientes');
}

async function deletar(cliente){
    await mysql.executeQuery('DELETE from clientes WHERE id = ?',cliente);
}

async function atualizar(cliente,id){
    await mysql.executeQuery('UPDATE clientes SET ? where id = ?',[cliente,id]);
}

async function buscarid(cliente){
    return mysql.executeQuery('SELECT * FROM clientes where id = ? LIMIT 1',cliente);
}
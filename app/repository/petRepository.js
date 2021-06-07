const mysql = require('../utils/mysql');

module.exports = {
    inserir,
    listar,
    deletar,
    buscarid,
    atualizar
}

async function inserir(pet){
    await mysql.executeQuery('INSERT INTO pet SET ?',pet);
}

async function listar(){
    return await mysql.executeQuery('SELECT * FROM pet')
}

async function deletar(pet){
    await mysql.executeQuery('DELETE from pet WHERE id = ?', pet);
}

async function buscarid(pet){
    return mysql.executeQuery('SELECT * FROM pet where id = ? LIMIT 1',pet);
}

async function atualizar(pet,id){
    await mysql.executeQuery('UPDATE pet SET ? where id = ?',[pet,id]);
}
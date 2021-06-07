const mysql = require('../utils/mysql');

module.exports = {
    inserir,
    listar,
    deletar,
    buscarid,
    atualizar
}

async function inserir(atendente){
    await mysql.executeQuery('INSERT INTO atendente SET ?',atendente);
}

async function listar(){
    return await mysql.executeQuery('SELECT * FROM atendente')
}

async function deletar(atendente){
    await mysql.executeQuery('DELETE from atendente WHERE id = ?', atendente);
}

async function buscarid(atendente){
    return mysql.executeQuery('SELECT * FROM atendente where id = ? LIMIT 1',atendente);
}

async function atualizar(atendente,id){
    await mysql.executeQuery('UPDATE atendente SET ? where id = ?',[atendente,id]);
}
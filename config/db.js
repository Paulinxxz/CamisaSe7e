const mysql = require('mysql2');
require('dotenv').config();

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'camisase7e'
});

conexao.connect((erro) => {
    if (erro) {
        console.log('Erro ao conectar ao banco:', erro);
        return;
    }

    console.log('Conectado ao MySQL com sucesso!');
});

module.exports = conexao;
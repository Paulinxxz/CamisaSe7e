
var express = require('express');
var router = express.Router();
var db = require('../config/db');

// Listar camisas
router.get('/', function(req, res) {
    db.query('SELECT * FROM camisas', function(err, resultados) {
        if (err) throw err;

        res.render('index', {
            title: 'CamisaSe7e',
            camisas: resultados
        });
    });
});

// Cadastrar camisa
router.post('/itens', function(req, res) {
    var nome = req.body.nome;
    var time = req.body.time;
    var tamanho = req.body.tamanho;
    var preco = req.body.preco;
    var estoque = req.body.estoque;

    var sql = 'INSERT INTO camisas (nome, time, tamanho, preco, estoque) VALUES (?, ?, ?, ?, ?)';

    db.query(sql, [nome, time, tamanho, preco, estoque], function(err) {
        if (err) throw err;

        res.redirect('/');
    });
});

// Abrir formulario de edicao
router.get('/editar/:id', function(req, res) {
    var id = req.params.id;

    db.query('SELECT * FROM camisas WHERE id = ?', [id], function(err, resultados) {
        if (err) throw err;

        if (resultados.length === 0) {
            return res.redirect('/');
        }

        res.render('editar', {
            title: 'Editar Camisa',
            camisa: resultados[0]
        });
    });
});

// Salvar edicao
router.post('/editar/:id', function(req, res) {
    var id = req.params.id;
    var nome = req.body.nome;
    var time = req.body.time;
    var tamanho = req.body.tamanho;
    var preco = req.body.preco;
    var estoque = req.body.estoque;

    var sql = 'UPDATE camisas SET nome = ?, time = ?, tamanho = ?, preco = ?, estoque = ? WHERE id = ?';

    db.query(sql, [nome, time, tamanho, preco, estoque, id], function(err) {
        if (err) throw err;

        res.redirect('/');
    });
});

// Excluir camisa
router.post('/excluir/:id', function(req, res) {
    var id = req.params.id;

    db.query('DELETE FROM camisas WHERE id = ?', [id], function(err) {
        if (err) throw err;

        res.redirect('/');
    });
});

module.exports = router;
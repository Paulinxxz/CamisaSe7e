var express = require('express');
var router = express.Router();
var conexao = require('../config/db');

/* Página inicial */
router.get('/', function (req, res, next) {
  conexao.query('SELECT * FROM camisas', function (erro, resultados) {
    if (erro) {
      console.log(erro);
      return res.status(500).send('Erro ao buscar camisas.');
    }

    res.render('index', {
      title: 'CamisaSe7e',
      camisas: resultados
    });
  });
});
router.post('/itens', function (req, res) {
  var novaCamisa = {
    nome: req.body.nome,
    time: req.body.time,
    tamanho: req.body.tamanho,
    preco: req.body.preco,
    estoque: req.body.estoque
  };

  conexao.query('INSERT INTO camisas SET ?', novaCamisa, function (erro) {
    if (erro) {
      console.log(erro);
      return res.status(500).send('Erro ao cadastrar camisa.');
    }

    res.redirect('/');
  });
});
module.exports = router;
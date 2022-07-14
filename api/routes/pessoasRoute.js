const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router // Pessoas
.get('/pessoas', PessoaController.pegaTodasAsPessoas)
.get('/pessoas/:id', PessoaController.pegaUmaPessoa)
.post('/pessoas', PessoaController.criaPessoa)
.put('/pessoas/:id', PessoaController.atualizaPessoa)
.delete('/pessoas/:id', PessoaController.apagaPessoa)
.post('/pessoas/:id/restaura', PessoaController.restauraPessoa)

router //Matriculas
.get('/pessoas/:estudanteId/matricula/:matriculaId',  PessoaController.pegaUmaMatricula)
.post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
.put('/pessoas/:estudanteId/matricula/:matriculaId',  PessoaController.atualizaMatricula)
.delete('/pessoas/:estudanteId/matricula/:matriculaId',  PessoaController.apagaMatricula)
.post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', PessoaController.restauraMatricula)

module.exports = router
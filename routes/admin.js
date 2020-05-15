const express = require("express");
const router = express.Router();
const lingue = require('../models/lingue/pt-br')
const bd = require('../models/bd')

// ROTAS DE MENU ADMIN
router.get('/',(req,res) => {
    res.render('painel',{lingue:lingue})    
})
router.get('/funcionarios',(req,res) => {
    res.render('funcionarios',{lingue:lingue})    
})
router.get('/clientes',(req,res) => {
    res.render('clientes',{lingue:lingue})    
})
router.get('/atendimentos',(req,res) => {
    res.render('atendimentos',{lingue:lingue})    
})
router.get('/serviços',(req,res) => {
    res.render('serviços',{lingue:lingue})    
})
router.get('/relatorios',(req,res) => {
    res.render('relatorios',{lingue:lingue})    
})
router.get('/configuracoes',(req,res) => {
    res.render('configuracoes',{lingue:lingue})    
})
router.get('/log',(req,res) => {
    res.render('log',{lingue:lingue})    
})
router.get('/sair',(req,res) => {
    res.render('home',{lingue:lingue})    
})

// ROTAS DE CONFIGURACES

    
    bd.Companies.findAll({
        
    order: [['IDEMPRESA', 'DESC']],
    limit:1,
    raw: true
        
    }).then((idend)=>{console.log(idend.toJSON+"========================================")})
    




router.get('/cadastrar-empresas',(req,res) => {
    res.render('cadastrar-empresas',{lingue:lingue})    
})

router.post('/create-empresas',(req,res) => {
    bd.Companies.create({
        MATRIZ: req.body.MATRIZ,
        RAZAO: req.body.RAZAO,
        NOMEEMPRESA: req.body.NOMEEMPRESA,
        CNPJ: req.body.CNPJ,
        LOGO: req.body.LOGO,
        TELEFONE: req.body.TELEFONE,
        TELEFONE2: req.body.TELEFONE2,
        SERVICO: req.body.SERVICO,
        CONFIG: req.body.CONFIG,
        LICENSA: req.body.LICENSA
    }).then(
        () => {console.log("Cadastrando empresa!")}
        ).catch(
        (err)=> {res.send("Erro ao cadastrar! Erro: "+err)}
        )  
    bd.Addresses.create({
        // IDEMPRESA: teste.IDEMPRESA,
        RUA: req.body.RUA,
        NUMERO: req.body.NUMERO,
        BAIRRO: req.body.BAIRRO,
        COMPLEMENTO: req.body.COMPLEMENTO,
        PAIS: req.body.PAIS,
        ESTADO: req.body.ESTADO,
        CIDADE: req.body.CIDADE,
        CEP: req.body.CEP,

    }).then(
        () => {console.log("Cadastrando endereço!")}
        ).catch(
        (err)=> {res.send("Erro ao cadastrar endereço! Erro: "+err)}
        )               
})

module.exports = router
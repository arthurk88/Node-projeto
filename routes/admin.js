const express = require("express");
const router = express.Router();
const lingue = require('../models/lingue/pt-br')

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

router.get('/cadastrar-empresas',(req,res) => {
    res.render('cadastrar-empresas',{lingue:lingue})    
})

module.exports = router
const express = require("express");
const router = express.Router();
const lingue = require('../models/lingue/pt-br')

router.get('/',(req,res) => {
    res.render('painel',{lingue:lingue})    
})
router.get('/conf',(req,res) => {
    res.send('CONFIGURAÇÕES',{lingue:lingue})    
})

module.exports = router
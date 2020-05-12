const express = require("express");
const router = express.Router();

router.get('/',(req,res) => {
    res.render('painel')    
})
router.get('/conf',(req,res) => {
    res.send('CONFIGURAÇÕES')    
})

module.exports = router
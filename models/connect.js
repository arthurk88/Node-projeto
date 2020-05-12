const Sequelize = require('sequelize')
const sequelize = new Sequelize('proj', 'root','root',{
    host:"localhost",
    dialect:"mysql",
    define:{
        // PERMITI '_' no BANCO EXEMPLO BD_TIME;
        undercored: true,
        
        // don't forget to enable timestamps!
        timestamps: true,

        // I don't want createdAt
        createdAt: 'CREATE',

        // I want updatedAt to actually be called updateTimestamp
        updatedAt: 'UPDATE'
    }
})

sequelize.authenticate().then(function(){
    console.log("Connectado com Sucesso!")
}).catch(function(){
    console.log("ERRO ao connectar!")
})

module.exports = {
   sequelize:sequelize,
   Sequelize:Sequelize
} 
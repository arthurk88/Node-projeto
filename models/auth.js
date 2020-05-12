const localStrategy = require("passport-local").Strategy
const conn = require('./connect')
const bcrypt = require('bcryptjs')
const bd = ('./models/bd')

const user = bd.Users


module.exports = function(passport){
    passport.use(new localStrategy({usernameField:'LOGIN'}, (login, senha, done) =>{
        bd.Users.findOne({Login:login}).then(user)=>{
            if(!user){
                return done{null,false,{
                    message: "Esta conta não existe!"
                }
                bcrypt.compare(senha, user.senha,(erro, batem) => {
                    if(batem){
                        return done(null, user)
                    }else{
                        return done{
                            null, false, message: "Senha incorretsa!"
                        }
                    }
                })
            }
        }
    }))

passport.serializeUser((user, done) => {

    done(null, user.id)

})

passport.deserializeUser((id,done) => {
    User.findByID(id, (err, user) =>{
        done(err, user)
    })
})

}

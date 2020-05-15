// MODULOS & DEPEDENCIAS
    const conn = require('./models/connect')
    const express = require('express')
    const app = express()
    const bodyParser = require('body-parser')
    const handlebars = require('express-handlebars')
    const routeradmin = require('./routes/admin')
    const path = require('path')
    const session = require('express-session')
    const flash = require('connect-flash')
    const lingue = require('./models/lingue/pt-br')
    const bd = require('./models/bd.js')
    const passport = require("passport")
    const localStrategy = require("passport-local").Strategy
    const moment = require('moment')

// CONFIGURAÇÕES
    // SESSION
        app.use(session({
            secret: "cursodenode",
            resave: true,
            saveUninitialized: true
        }))
        app.use(passport.initialize())
        app.use(passport.session())
        app.use(flash())
    //MIDDLEWARE
        app.use((req,res,next) =>{
            res.locals.success_msg = req.flash('success_msg')
            res.locals.error_msg = req.flash('error_msg')
            next()
        })
    // Templetes engine
        app.engine('handlebars', handlebars({
            
            defaultLayout:'main',    
            helpers: {
            formatDate: (date) => {
                return moment(date).format('DD/MM/YYYY')
            }
        }}));
        app.set('view engine', 'handlebars');
    // CONFIGURAR BODY PARSER
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())
    // PUBLIC
        app.use(express.static(path.join(__dirname,'/public')))
        
// ROTAS
    app.use('/painel', routeradmin)

    app.get('/',(req,res) =>{
        res.render('home',{lingue:lingue})
    })
    
    app.get('/sobrenos',(req,res) =>{
        res.render('sobrenos',{lingue:lingue})
    })

    app.get('/contato',(req,res) =>{
        res.render('contato',{lingue:lingue})
    })

    app.post('/painel',(req,res, next) =>{
        passport.authenticate('local',{
            successRedirect: "/",
            failureRedirect: "/painel",
            failureFhash: true
        })(req,res,next)
    })

    app.get('*',(req,res) =>{
        res.render('404')
    })


// SERVIDOR
    const PORTA = 80;
    app.listen(PORTA, () => {console.log('Servidor Ativo')});
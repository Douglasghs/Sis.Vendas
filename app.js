const express = require("express")
const app = express()
const handlebars = require("express-handlebars")
const path = require("path");
const Post = require("./module/Post");
const body_parser = require("body-parser");



// config handlebars
  app.engine('handlebars', handlebars({defaultLayout: 'main'}))
  app.set('view engine', 'handlebars')
    //renderizando o handlebars
      app.get("/", function(req,res){
          res.render('formulario')
      })
      app.get("/relatorio", function(req,res){
          res.render('relatorio')
      })

    // config body-parse
    app.use(body_parser.urlencoded({extended: false}))
    app.use(body_parser.json())

    // config path
       app.use(express.static(path.join(__dirname, "public")))

    // passandpo valor pro banco 
    app.post("/", function(req,res){
      Post.create({
        nome_cliente: req.body.cliente,
        endereco : req.body.endereço,
        comple_endereco : req.body.com_endereco,
        quantidade: req.body.quantidade,
        lanche : req.body.endereço.lanches
      })
    })
module.exports = app;

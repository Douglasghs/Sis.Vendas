const express = require("express")
const app = express()
const handlebars = require("express-handlebars")
const path = require("path");

// config handlebars
  app.engine('handlebars', handlebars({defaultLayout: 'main'}))
  app.set('view engine', 'handlebars')
    //renderizando o handlebars
      app.get("/", function(req,res){
          res.render('formulario')
      })

    // config body-parser
       app.use(express.static(path.join(__dirname, "public")))

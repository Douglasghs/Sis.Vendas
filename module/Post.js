const bd = require("./bd");

const Post = bd.Sequelize.define('pedidos',{
    nome_cliente: {
        type: bd.sequelize.STRING 
    } ,
    endereco : {
        type: bd.sequelize.STRING
    },
    comple_endereco : {
        type: bd.sequelize.STRING
    },
    quantidade: {
        type: bd.sequelize.STRING
    },
    lanche : {
        type: bd.sequelize.STRING
    },
    compelento_lanche: {
        type: bd.sequelize.STRING
    }
}) 

//Post.sync({force: true});

module.exports = Post;
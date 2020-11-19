const bd = require('../modules/bd');
const Post = bd.sequelize.define('pedidos', {
    cliente: {
        type: bd.Sequelize.STRING
    }
}) 

//Post.sync({force: true});   criando tabela 

module.exports = Post;



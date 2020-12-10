const bd = require("./bd");

const Post = bd.Sequelize.define('pedidos',{    // Criando a tabela no banco de dados pelo código   
    nome_cliente: {                             // Informações sobre o banco só acessando o mesmo 
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
    }
}) 

//Post.sync({force: true});               // Se vc quiser ta um reflash na tabela do banco, siga os passos
                                          // - Retire os comentário da linha 
                                          // - Renicie o servidor e depois coloque novamente o comentário 
                                          // Se depois não colocar o comentário, a tabela vai ficar dando reflash direto 
module.exports = Post;
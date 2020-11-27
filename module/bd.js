const sequelize = require("sequelize")
const Sequelize = new sequelize('sisvenda','root','147258',{
    host: "localhost",
    dialect: 'mysql'
})

Sequelize.authenticate().then(function(){
    console.log("banco de dados ok");
}).catch(function(erro){
    console.log(erro);
})

module.exports = {
    sequelize: sequelize,
    Sequelize: Sequelize
}


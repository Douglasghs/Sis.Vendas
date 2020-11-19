const Sequelize = require('sequelize');
const sequelize = new Sequelize('sisvenda','root','147258',{
    host: "localhost",
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log("Banco de dados ok");
}).catch(function(erro){
    console.log(erro);
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
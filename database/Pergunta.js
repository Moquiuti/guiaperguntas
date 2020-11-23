 const Sequelize = require("sequelize");
 const connection = require("./database");

 //Definindo model
 const Pergunta = connection.define('pergunta', {
   titulo:{
     type: Sequelize.STRING,
     allowNull: false
   },
   descricao:{
     type: Sequelize.TEXT,
     allowNull: false
   }
 });

 Pergunta.sync({force: false}).then(() => {console.log("Tabela Pergunta criada com sucesso")}).catch((err) => {console.log("erro ao tentar criar tabela de perguntas: " +err)});

 module.exports = Pergunta;

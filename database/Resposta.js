const Sequelize = require("sequelize");
const connection = require("./database");

//Definindo model
const Resposta = connection.define('resposta', {
  corpo:{
    type: Sequelize.TEXT,
    allowNull: false
  },
  perguntaId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

Resposta.sync({force: false}).then(() => {console.log("Tabela Resposta criada com sucesso")}).catch((err) => {console.log("erro ao tentar criar tabela de respostas: " +err)});

module.exports = Resposta;

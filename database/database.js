const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas', 'root', '1804', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = connection;

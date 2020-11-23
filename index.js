const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const Pergunta = require("./database/Pergunta");

//database
connection.authenticate().then(() => {
  console.log("Conectado com Sucesso!");
}).catch((err) => {
  console.log("Erro ao tentar se conectar!");
});
//Estou dizendo para o express usar o EJS como View Engine
app.set('view engine','ejs');
app.use(express.static('public'));
// Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//Rotas
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/perguntar", (req, res) => {
  res.render("perguntar");
});

app.post("/salvarpergunta", (req, res) => {
  var titulo = req.body.titulo;
  var descricao = req.body.descricao;

  Pergunta.create({
    titulo: titulo,
    descricao: descricao
  }).then(() => {
    res.redirect("/");
  });
});


app.listen(8081, () => {console.log("Aplicação rodando!")});

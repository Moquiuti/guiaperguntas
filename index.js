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
  Pergunta.findAll({raw: true, order: [
    ['id','DESC']
  ]}).then(perguntas => {
    res.render("index", {
        perguntas: perguntas
    });
  });
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

app.get("/pergunta/:id", (req, res) => {
  var id = req.params.id;
  Pergunta.findOne({
    where: {id: id}
  }).then(pergunta => {
    if(pergunta != undefined){
      res.render("pergunta", {
        pergunta: pergunta
      });
    } else {
      res.redirect("/");
    }
  });
});

app.listen(8081, () => {console.log("Aplicação rodando!")});

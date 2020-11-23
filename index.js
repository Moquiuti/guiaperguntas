const express = require("express");
const app = express();

//Estou dizendo para o express usar o EJS como View Engine
app.set('view engine','ejs');
app.use(express.static('public'));

app.get("/:nome/:lang", (req, res) => {
  var nome = req.params.nome;
  var lang = req.params.lang;
  var exibirMsg = true;

  var produtos = [
    {nome: "Extreme Repair", preco: 120.00},
    {nome: "Extreme Long", preco: 110.00},
    {nome: "Extreme Naturals", preco: 55.80},
    {nome: "Extreme Skins", preco: 66.40},
    {nome: "OX", preco: 33.43},
    {nome: "Pó Descolorante", preco: 28.30}
  ];

  res.render("index", {
    nome: nome,
    lang: lang,
    empresa: "Guia do Programador",
    inscritos: 8000,
    msg: exibirMsg,
    produtos: produtos
  });
});

app.listen(8081, () => {console.log("Aplicação rodando!")});

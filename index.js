var { autor } = require("./models");
var { livro } = require("./models");
var express = require("express");
var app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

//Routes - Livros

app.get("/livros", async function(req, res){
var mostrar = await livro.findAll();
  res.json(mostrar);
});

app.get("/livros/:id", async function(req, res) {
 const id = await livro.findByPk(req.params.id);
 res.json(id)
});

app.post("/livros", async function(req, res){
  var mostrar = await livro.create(req.body);
  res.json(mostrar);
});

app.put("/livros/:id", async function(req, res){
  var resultado = livro.update(req.body,{ where: { id: req.params.id }});
  res.json(resultado);
});

app.delete("/livros/:id", async function (req, res){
 var resultado =  await livro.destroy({where : {id:req.params.id}});
 res.json(resultado)
});

//Routes - Autores

app.get("/autores", async function(req, res){
var mostrar = await autor.findAll();
  res.json(mostrar);
});

app.get("/autores/:id", async function(req, res) {
 const id = await autor.findByPk(req.params.id);
 res.json(id)
});

app.post("/autores", async function(req, res){
  var mostrar = await autor.create(req.body);
  res.json(mostrar);
});

app.put("/autores/:id", async function(req, res){
  var resultado = autor.update(req.body,{ where: { id: req.params.id }});
  res.json(resultado);
});

app.delete("/autores/:id", async function (req, res){
 var resultado =  await autor.destroy({where : {id:req.params.id}});
 res.json(resultado) 
});

///////////////////////////////////////////////////
app.listen(3000, function(){
  console.log("Servidor em ótimo funcionamento!");
});
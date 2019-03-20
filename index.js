//jshint esversion:6

//inicializo express
const express=require('express');
const app=express();

// inicializo body-parser
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

//activo carpeta public paara archivos estaticos
app.use(express.static('public'));

//seccion de rutas
app.get("/", function(req,res){
  res.sendFile(__dirname+"/index.html");
});
app.post("/", function(req,res){
  //recojo los valores que envian desde el formulario
console.log(req.body);
  var sexo=(req.body.sexo);
  var apellidoPaterno=(req.body.apadre);
  var apellidoMaterno=(req.body.amadre);
// declaro dos arrays de nombres
var nombresNene=["Andrés","Julian","Pelayo","Martin","Rodrigo","Antonio","Jose","Mario","Alejandro","Pedro","Agustin"];
var nombresNena=["Jimena","Sandra","Andrea","Petra","Lucía","Marina","Maria", "Olga","Carmen","Clara","Sara"];
 console.log(nombresNene.length);
  //Escogemos aleatoriamente un nombres
  //1. genero un numero aleatorio entre 0 y x, siendo
  //x el numero de nombre total del que dispongo
  // ese numero sera la posicion en el array
  // en mi caso sería entre 0 y 4
var posicionNene=Math.round(Math.random()*(nombresNene.length-1));
var posicionNena=Math.round(Math.random()*(nombresNena.length-1));


//Comprobamos si es niño o niña y responddemos con un mombre
  res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
    res.write("<h1>Enhorabuena!!!</h1>");
if (sexo==="1"){
  //es niño


  res.write("<h2>Puedes llamarle "+nombresNene[posicionNene]+" "+apellidoPaterno+" "+apellidoMaterno+"</h2>");

}
if(sexo==="2"){
  //es niña


  res.write("<h2>Puedes llamarle "+nombresNena[posicionNena]+" "+apellidoPaterno+" "+apellidoMaterno+"</h2>");

}
res.send();
});
//arrancar el servidor
app.listen(3000,function(){
  console.log("Servidor esta escuchando en puerto 3000.");
});

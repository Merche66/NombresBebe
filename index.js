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
//arrancar el servidor
app.listen(3000,function(){
  console.log("Servidor esta escuchando en puerto 3000.");
});

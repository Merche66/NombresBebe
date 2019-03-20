$(".sexo").on("change", function(){
  var opcion=$(this).val();
  switch(opcion){
  case "0": {
    $(".foto").attr("src","imagenes/VACIO.jpg");
    break;
  }
  case "1": {
    $(".foto").attr("src","imagenes/descarga.jpg");
    break;
  }
  case "2": {  
    $(".foto").attr("src","imagenes/niña.jpg");
    break;
  }
  }
});

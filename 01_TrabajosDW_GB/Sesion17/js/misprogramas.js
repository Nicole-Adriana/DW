$(document).ready(function(){
    $("a").click(function(evento){
     alert("Has pulsado el enlace. Ahora saldrás de la página de la USAT")
    });
});

//ocultar o mostrar caja
$("#cib").click(function(){
  $("#cont1").toggle(1500);
  }, function(){
    $("#cont1").toggle(1500);
  } 
)

$(document).ready(function () {
$( '#selh3' ).click(function(event) {
    
    $('#contenedor').load('selecciones/colombia.html');
   
  });

$("li a").click(function(event){
event.preventDefault();
if($(this).data('selecciones')!=null){
$("#contenedor").load('selecciones/'+$(this).data('seleccion')+'.html');
}

});

});


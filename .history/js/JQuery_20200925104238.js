
$(document).ready(function () {
$( '#selh3' ).click(function(event) {
    
    $('#container').load('selecciones/colombia.html');
   
  });

$("li a").click(function(event){
event.preventDefault();
if($(this).data('selecciones')!=null){
$("#container").load('selecciones/'+$(this).data('seleccion')+'.html');
}

});

});


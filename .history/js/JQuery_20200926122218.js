<script type='text/javascript' src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
 

/	$(document).ready(function(){
		$("#boton01").click(function(){
		    alert($("p").html());
		});
	});*/



$(document).ready(function () {
$( "'#selh3" ).click(function(event) {
    
    $('#container').load('selecciones/colombia.html');
   
  });

/*$('li a').click(function(event){
event.preventDefault();
if($(this).data('selecciones')!=null){
$("#container").load('selecciones/'+$(this).data('seleccion')+'.html');
}

});*/

});


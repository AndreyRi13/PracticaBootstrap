
 
 <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>



 /*	$(document).ready(function(){
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

});

   <script>
       var part="";

       $.getJSON('partidos.json',function(datos){
           $("#contenido").html('');
           $.each(datos["partidos"], fuction(idex,partido)){
               $("#contenido").append("<tr>"+
                "<td>"+partido["fecha"]+"</td><td>"+partido["equipo1"]+"</td><td>"
                    +"</tr>");
           }
       });
   </script>

*/

});


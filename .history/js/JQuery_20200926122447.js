
 <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8yc
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


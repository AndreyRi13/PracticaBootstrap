
 <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
 <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
 <script src="https://code.jquery.com/jquery-3.5.1.slim.js" integrity="sha256-DrT5NfxfbHvMHux31Lkhxg42LY6of8TaYyK50jnxRnM=" crossorigin="anonymous"></script>
 <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha256-4+XzXVhsDmqanXGHaHvgh1gMQKX40OUvDEBTu8JcmNs=" crossorigin="anonymous"></script>
 
 
 
 <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
 <script type="text/javascript" src="js/JQuery.js"></script>
 



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


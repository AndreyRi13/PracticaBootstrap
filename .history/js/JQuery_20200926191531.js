

<script src="https://code.jquery.com/jquery-3.5.0.js"></script>



/*	$(document).ready(function(){
   $("#boton01").click(function(){
       alert($("p").html());
   });
 });*/

$(document).ready(function () {
  $("#selh3").click(function (event) {

    $("#contenedor").load('selecciones/colombia.html');

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



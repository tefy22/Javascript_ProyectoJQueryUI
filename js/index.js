
$(document).ready(function () {
	$(".jugador1, .jugador2").draggable({
		drag: function(event,ui){
			$(this).addClass("seleccion",100);
		},
		stop:function(event,ui){
			$(this).removeClass("seleccion",100);
		}
	});
	
	$(".equipo-blanco").droppable({
		accept:".jugador1, .jugador2"
	});
	
});
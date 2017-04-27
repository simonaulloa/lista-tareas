var button = document.getElementById('button');

var onButtonClick = function(){

	button.addEventListener("click", onButtonClick);

	var datos = document.getElementsById('dato').value;

	var resultado = "<br><br><b><li>Titulo : </b>" + datos + "<br>";

};



//Función que agrega las tareas a la lista 

function obtenerDato(){

    var entrada = document.getElementById("nuevatarea").value;

    var agregarTarea = document.getElementsByClassName("añadirDato");

    agregarTarea[0].innerHTML += "<ul><li>" + entrada + "</ul></li>";

}
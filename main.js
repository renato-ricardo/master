function mostrarDatos(){

	//evento para evitar el envio de informacion

	var nombre = document.getElementById('nombre').value;
	var apellido = document.getElementById('apellido').value;

	alert("El nombre de la persona es : " + nombre + " El apellido es : " +  apellido);

	document.getElementById('demo').innerHTML ="El nombre es : " + nombre;
	document.getElementById('demo1').innerHTML ="El apellido es : " + apellido;

	Limpiar();
}

function Limpiar(){


	var nombre = document.getElementById('nombre').value ="";
	var apellido = document.getElementById('apellido').value="";

	alert("Casillas limpias");
}


function mostrarDatos(){

	//evento para evitar el envio de informacion

	var nombre = document.getElementById('nombre').value;
	var apellido = document.getElementById('apellido').value;
	var telefono = document.getElementById('telefono').value;
	alert("El nombre de la persona es : " + nombre + " El apellido es : " +  apellido);

	document.getElementById('demo').innerHTML ="El nombre es : " + nombre;
	document.getElementById('demo1').innerHTML ="El apellido es : " + apellido;
	document.getElementById('demo2').innerHTML ="El telefono es : " + telefono;

	Limpiar();
}

function Limpiar(){


	var nombre = document.getElementById('nombre').value ="";
	var apellido = document.getElementById('apellido').value="";

	
}


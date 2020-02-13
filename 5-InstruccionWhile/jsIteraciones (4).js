function mostrar() {

	

	var numero = parseInt(prompt("ingrese un número entre 0 y 9."));

	//isNan = is not a number (si numero, no es un número, entonces...)
	while (numero > 9 || numero < 0 || isNaN(numero)) {
		

		 numero = parseInt(prompt("Error. ingrese el número clave nuevamente "));

	}

	document.getElementById("Numero").value = numero;

}
	   //FIN DE LA FUNCIÓN
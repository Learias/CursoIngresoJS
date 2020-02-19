function mostrar() 
{

	var contador = 0;
	var acumulador = 0;
	var numero;

	
	while (contador < 5) {

		numero = parseInt(prompt('Ingrese un número '));
		//acumula en valores variables
		acumulador = numero + acumulador;
		//acumula en valores constantes
		contador++;

	}

	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / 5;

}


//FIN DE LA FUNCIÓN
function mostrar() {

	var contador = 0;
	var acumulador = 0;
	var numero;
	var seguir = 'si';

	//utilizo do/while, cuando quiero que la estructura repetitiva se repita al menos una vez.
	//es la única estructura que termina en ;  (while () ;)
	do {

		numero = parseInt(prompt('Ingrese un número '));
		//acumula en valores variables
		acumulador = numero + acumulador;
		//acumula en valores constantes
		contador++;
		seguir = prompt('Quiere volver a ingresar otro número? ');

	} while (seguir == 'si') ;

		
	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / contador;

}

	//FIN DE LA FUNCIÓN
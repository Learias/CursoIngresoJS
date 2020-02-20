function mostrar() {

	var flag = 0;
	var positivo = 0;
	var negativo = 1;
	var seguir = 'si';
	var numero;

	do {

		numero = parseInt(prompt('Ingrese un número '));

		while (isNaN(numero)) {

			numero = parseInt(prompt('El caracter ingresado no es correcto, vuelva a intentarlo '));
		}

		if (numero >= 0) {

			positivo = numero + positivo;

		} else {

			negativo = numero * negativo;

			//uso variable de tipo bandera (flag), para verificar si una operación dentro del código se ha efectuado
			flag = 1;
		}

		seguir = prompt('Quiere volver a ingresar otro número? ');

	} while (seguir == 'si');

	//Si el valor de bandera sigue siendo 0, entonces damos valor 0 a "negativo", para que no devuelva su valor inicial 1
	if (flag == 0) {

		negativo = 0
	}



	document.getElementById('suma').value = positivo;
	document.getElementById('producto').value = negativo;

}

//FIN DE LA FUNCIÓN
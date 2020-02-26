function mostrar() {

	var contadornegativos = 0;
	var contadorpositivos = 0;
	var contadorcero = 0;
	var acumnegativo = 0;
	var acumpositivo = 0;
	var respuesta = 'si';
	var pares = 0;
	var prompositivos = 0;
	var promnegativos = 0;
	var numero;


	do {
		numero = parseInt(prompt('Ingrese un número'));

		while (isNaN(numero)) {

			numero = parseInt(prompt('El caracter ingresado no es correcto, vuelva a intentarlo'));
		}

		//suma y contador de positivos
		if (numero > 0) {

			acumpositivo = numero + acumpositivo;
			contadorpositivos++;


		}

		//resta y contador de negativos
		else if (numero < 0) {

			acumnegativo = numero + acumnegativo;
			contadornegativos++;


			//cantidad de ceros
		} else {

			contadorcero++;

		}
          //cantidad de números pares
		if (numero % 2 == 0) {

			pares++;

		}

		respuesta = prompt('Quiere seguir ingresando números?');

	} while (respuesta == 'si' || respuesta == 'Si' || respuesta == 'SI');

	if (contadorpositivos != 0) {

		prompositivos = acumpositivo / contadornegativos;

	} if (contadornegativos != 0) {

		promnegativos = acumnegativo / contadornegativos;
	}


	document.write("La suma de los números positivos es: " + acumpositivo + "</br>");
	document.write("La suma de los números negativos es: " + acumnegativo + "</br>");
	document.write("La cantidad de positivos es: " + contadorpositivos + "</br>");
	document.write("La cantidad de negativos es: " + contadornegativos + "</br>");
	document.write("La cantidad de ceros es: " + contadorcero + "</br>");
	document.write("La cantidad de números pares es: " + pares + "</br>");
	document.write("El promedio de los números positivos es: " + prompositivos + "</br>");
	document.write("El promedio de los números negativos es: " + promnegativos + "</br>");
	document.write("La diferencia entre números positivos y negativos es: " + (contadorpositivos - contadornegativos) + "</br>");


}

//FIN DE LA FUNCIÓN
function mostrar() {

	var flag = 0;
	var contadornegativos = 0;
	var contadorpositivos = 0;
	var contadorcero = 0;
	var acumnegativo = 0;
	var acumpositivo = 0;
	var respuesta = "si";
	var numero
	//declarar contadores y variables 



	do {
		numero = parseInt(prompt('Ingrese un número'));

		while (isNaN(numero)) {

			numero = parseInt(prompt("El caracter ingresado no es correcto, vuelva a intentarlo"));
		}

		if (numero >= 0) {

			acumpositivo = numero + acumpositivo;
			contadorpositivos++;

		}

		else if (numero < 0) {

			acumnegativo = numero + acumnegativo;
			contadornegativos++;

		} else

			contadorcero++;


		respuesta = prompt("Quiere seguir ingresando números?");

	} while (respuesta = 'si');


} while (respuesta != "no") {




}




//FIN DE LA FUNCIÓN
function mostrar() {

	var contador = 0;
	var positivo = 0;
	var negativo = 1;
	var seguir = 'si';
	var numero;

	do {

		numero = parseInt(prompt('Ingrese un número '));

		/*
		if (numero >= 0) {

        positivo = numero + positivo

		} else if (numero < 0) {

			negativo = numero * negativo

		} else if (numero != 0 && isNaN(numero)) {
			
			alert("El caracter ingresado no corresponde, vuelva a intentarlo ");

		}
		*/

  

		seguir = prompt('Quiere volver a ingresar otro número? ');

	} while (seguir == 'si');




	document.getElementById('suma').value = positivo;
	document.getElementById('producto').value = negativo;

}

//FIN DE LA FUNCIÓN
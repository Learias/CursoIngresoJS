function mostrar() {
	var respuesta = 's';
	var edad;
	var nombre;
	var sexo;
	var estadocivil;
	var hombrecasadomasjoven;
	var nombrehombrecasadomasjoven;
	var sexopasajeromasviejo = '-';
	var nombrepasajeromasviejo = '-';
	var edadpasajeromasviejo;
	var contadorcasadasviudas = 0;
	var acumuladoredadmujeres = 0;
	var contadormujeres = 0;
	var contadorhombressolteros = 0;
	var acumuladoredadhombressolteros = 0;
	var promedioedadmujeres = '-';
	var promedioedadhombresolteros = '-';
	var contador = 0;
	var flag = 0;


	do {

		nombre = prompt('ingrese su nombre');

		do {
			edad = prompt('ingrese edad  (mayor a 18 y menor a 107) ');
			edad = parseInt(edad);
		} while (isNaN(edad) || edad < 18 || edad > 107);

		do {
			sexo = prompt('Ingrese el tipo de sexo ("f" para fememino o "m" para masculino)');
		} while (!isNaN(sexo) || sexo != 'f' && sexo != 'm');

		do {
			estadocivil = prompt('Ingrese su estado civil ("soltero" / "casado / "viudo")');
		} while (!isNaN(estadocivil) || estadocivil != 'soltero' && estadocivil != 'casado' && estadocivil != 'viudo');



		// sexo del pasajero más viejo y su nombre

		if (edadpasajeromasviejo < edad || flag == 0){

		  sexopasajeromasviejo = sexo;
		  edadpasajeromasviejo = edad;
		  nombrepasajeromasviejo = nombre;
		  flag++;
		}

		if ((estadocivil == 'casado' && hombrecasadomasjoven < edad) || contador == 0) {
			hombrecasadomasjoven = edad;
			nombrehombrecasadomasjoven = nombre;
			contador++;
		}

		
		// suma edad de mujeres casadas o viudas + cantidad de casadas y viudas

		switch (sexo) {
			case ('f'):
				acumuladoredadmujeres = acumuladoredadmujeres + edad;
				contadormujeres++;
				if (estadocivil == 'casado' || estadocivil == 'viudo') {
					contadorcasadasviudas++;
				}
				break;


			// suma edad hombres solteros + cantidad hombres solteros
			default:

				if (estadocivil == 'soltero') {
					acumuladoredadhombressolteros = acumuladoredadhombressolteros + edad;
					contadorhombressolteros++;
				}
			}

		respuesta = prompt('Quiere continuar? ');

	} while (respuesta == 's' || respuesta == 'Si' || respuesta == 'SI' || respuesta == 'si');

	if (acumuladoredadmujeres != 0) {
		promedioedadmujeres = acumuladoredadmujeres / contadormujeres;
	}

	if (acumuladoredadhombressolteros != 0) {
		promedioedadhombresolteros = acumuladoredadhombressolteros / contadorhombressolteros;
	}


	document.write('a) el nombre del hombre casado mas joven es: ' + nombrehombrecasadomasjoven + '</br>');
	document.write('b) el sexo del pasajero mas viejo es: ' + sexopasajeromasviejo + ' y su nombre es ' + nombrepasajeromasviejo + '</br>');
	document.write('c) la cantidad de mujeres casadas o viudas es ' + contadorcasadasviudas + '</br>');
	document.write('d) el promedio de edad entras las mujeres es: ' + promedioedadmujeres + '</br>');
	document.write('e) el promedio de edad entre los hombres solteros es: ' + promedioedadhombresolteros);

}
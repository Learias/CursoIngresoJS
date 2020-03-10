
function mostrar() {

	var contador;
	var nombreproducto;
	var tipodeproducto;
	var preciodeproducto;
	var cantidadunidades;
	var marca;
	var fabricante;
	var barbijomascaro;
	var barbijocantidad = 0;
	var barbijofabricante = '-';
	var itemmasuni;
	var fabricanteitemmasuni;
	var acumuladorjabon = 0;


	for (contador = 1 ; contador < 6; contador++) {

		do {
			nombreproducto = prompt('Ingrese el nombre del producto ' + contador);
		} while (!isNaN(nombreproducto));
		do {
			tipodeproducto = prompt('Ingrese el tipo de producto (barbijo / jabon / alcohol)');
		} while (!isNaN(tipodeproducto || tipodeproducto != 'barbijo' && tipodeproducto != 'jabon' && tipodeproducto != 'alcohol'));
		do {
			preciodeproducto = prompt('Ingrese el precio del producto');
			preciodeproducto = parseInt(preciodeproducto);
		} while (isNaN(preciodeproducto) || preciodeproducto < 100 || preciodeproducto > 300);
		do {
			cantidadunidades = prompt('Ingrese la cantidad de unidades');
			cantidadunidades = parseInt(cantidadunidades);
		} while (isNaN(cantidadunidades) || cantidadunidades < 1 || cantidadunidades > 1000);

		do {
			marca = prompt('Ingrese la marca del producto');
		} while (!isNaN(marca));

		do {
			fabricante = prompt('Ingrese el fabricante del producto');
		} while (!isNaN(fabricante));


		// cantidad de unidades y fabricante del barbijo mas caro

		if (tipodeproducto == 'barbijo' && barbijomascaro < preciodeproducto || contador == 1) {

			barbijomascaro = preciodeproducto;
			barbijocantidad = cantidadunidades;
			barbijofabricante = fabricante;

		}

		// del item con mas unidades, el fabricante

		if (contador == 1 || itemmasuni < cantidadunidades) {

			itemmasuni = cantidadunidades;
			fabricanteitemmasuni = fabricante;
		}

		// unidades de jabón en total

		if(tipodeproducto == 'jabon'){

			acumuladorjabon = acumuladorjabon + cantidadunidades;
		}
	}

	document.write('a) la cantidad de unidades del barbijo mas caro es: ' + barbijocantidad + ' y el fabricante es ' + barbijofabricante + '</br>');
	document.write('b) el fabricante del item con mas unidades es: ' + fabricanteitemmasuni + '</br>');
	document.write('c) la cantidad de jabon en total es: ' + acumuladorjabon + '</br>');

}
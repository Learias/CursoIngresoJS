
function mostrar() {

	var marca;
	var producto;
	var tipodeproducto;
	var precio;
	var cantidadunidades;
	var fabricante;
	var mayorcantidadunidades;
	var mayorcantidadfabricante;
	var contador;
	var flagbarbijo = 'no paso';
	var barbijomascaro = '-';
	var barbijocantidad = '-';
	var barbijofabricante = '-';
	var acumuladordejabones = 0;

	for (contador = 0; contador < 5; contador++) {


		producto = prompt('ingrese el nombre del producto');

		do {
			tipodeproducto = prompt('ingrese el tipo de producto (jabon, alcohol o barbijo)');
		} while (!isNaN(tipodeproducto) || tipodeproducto != 'jabon' && tipodeproducto != 'alcohol' && tipodeproducto != 'barbijo');

		do {
			precio = prompt('ingrese el precio del producto (entre 100 y 300) ');
			precio = parseInt(precio);
		} while (isNaN(precio) || precio < 100 || precio > 300);

		do {
			cantidadunidades = prompt('Ingrese la cantidad de unidades (entre 1 y 1000) ');
			cantidadunidades = parseInt(cantidadunidades);
		} while (isNaN(cantidadunidades) || cantidadunidades < 0 || cantidadunidades > 1000);

		marca = prompt('ingrese la marca del producto ');
		fabricante = prompt('ingrese el nombre del fabricante ');

		// Del item con mas unidades, el fabricante
		if (contador == 0 || mayorcantidadunidades < cantidadunidades) {
			mayorcantidadunidades = cantidadunidades;
			mayorcantidadfabricante = fabricante;
		}

		// Del mas caro de los barbijos, la cantidad de unidades y el fabricante

		if (tipodeproducto == 'barbijo' && barbijomascaro < precio || flagbarbijo == 'no paso') {

			barbijomascaro = precio;
			barbijocantidad = cantidadunidades;
			barbijofabricante = fabricante;
			flagbarbijo = 'si paso';

		}

		// Cantidad de jabones en total

		if (tipodeproducto == 'jabon') {

			acumuladordejabones = acumuladordejabones + cantidadunidades;
		}

	}


	document.write('a) la cantidad de unidades del mas caro de los barbijos es ' + barbijocantidad + ' y el fabricante ' + barbijofabricante + '</br>');
	document.write('b) del item con mas unidades, la cantidad es ' + mayorcantidadunidades + ' y el fabricante ' + mayorcantidadfabricante + '</br>');
	document.write('c) la cantidad de jabones en total es ' + acumuladordejabones + '</br>');
}


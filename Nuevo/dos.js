function mostrar() {

  var respuesta = 's';
  var nombreingrediente;
  var peso;
  var precio;
  var tipoingrediente;
  var preciobruto;
  var acumuladorpeso = 0;
  var acumuladortotal = 0;
  var acumuladorprecio = 0;
  var preciocondescuento = "no hubo descuento";
  var descuento;
  var promedioprecio;
  var preciomax;
  var tipoingredientemax;
  var contador = 0;



  do {

    do {

      nombreingrediente = prompt('Ingrese el nombre del ingrediente');
    } while (!isNaN(nombreingrediente));

    do {
      peso = prompt('ingrese peso  (entre 10 y 1000) ');
      peso = parseInt(peso);
    } while (isNaN(peso) || peso < 10 || peso > 1000);

    do {
      precio = prompt('ingrese precio por kg  (Mas de 0) ');
      precio = parseInt(precio);
    } while (isNaN(precio) || precio < 1);

    do {
      tipoingrediente = prompt('Ingrese el tipo de ingrediente  ("v" para vegetal, "a" para animal, "m" para mezcla)');
    } while (!isNaN(tipoingrediente) || tipoingrediente != 'v' && tipoingrediente != 'a' && tipoingrediente != 'm');

    acumuladorpeso = acumuladorpeso + peso;
    acumuladorprecio = acumuladorprecio + precio;
    acumuladortotal = precio * peso + acumuladortotal;


    if (contador == 0 || preciomax < precio) {
      preciomax = precio;
      tipoingredientemax = tipoingrediente;

    }

    contador++;

    respuesta = prompt('Quiere continuar?');

  } while (respuesta == 's' || respuesta == 'si' || respuesta == 'Si' || respuesta == 'SI');

  if (acumuladorpeso > 100 && acumuladorpeso < 300) {

    descuento = acumuladortotal * 15 / 100;
    preciocondescuento = acumuladortotal - descuento;

  } else if (acumuladorpeso < 100) {

    descuento = 0

  } else {

    descuento = acumuladortotal * 25 / 100;
    preciocondescuento = acumuladortotal - descuento;

  }
  preciobruto = acumuladortotal;
  if (acumuladorprecio != 0) {
    promedioprecio = acumuladorprecio / contador;
  }

  document.write('a) el precio bruto a abonar es: ' + preciobruto + '</br>');
  document.write('b) el precio con descuento es: ' + preciocondescuento + '</br>');
  document.write('d) el valor del ingrediente mas caro es: ' + preciomax + ' y el tipo de ingrediente es ' + tipoingredientemax + '</br>');
  document.write('f) el promedio de precio por kg total es: ' + promedioprecio);

}
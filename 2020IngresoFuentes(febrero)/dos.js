function mostrar() {
  var respuesta = 's';
  var nombreingrediente;
  var peso;
  var precio;
  var tipoingrediente;
  var acumuladorpeso = 0;
  var acumuladortotal = 0;
  var acumuladorprecio = 0;
  var acumuladorpreciobruto = 0;
  var preciocondescuento = 0;
  var descuento;
  var promedioprecio;
  var preciomax;
  var ingredientemax;
  var contador = 0;
  var flag = 0;




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
  acumuladortotal = acumuladorprecio + acumuladortotal
  contador++;

  if (flag == 0 || preciomax < precio) {
    preciomax = precio
    ingredientemax = tipoingrediente;
    flag++;
  }

  respuesta = prompt('Quiere continuar?');
  
 while (respuesta == 's' || respuesta == 'si' || respueta == 'Si' || respuesta == 'SI');

if (acumuladorpeso > 100 && acumuladorpeso < 300) {

  descuento = (acumuladorpeso * acumuladorprecio) * 15 / 100;

} else if (acumuladorpeso > 300) {

  descuento = (acumuladorpeso * acumuladorprecio) * 25 / 100;

} else {

  descuento = 0
}

preciocondescuento = acumuladorpeso * precio - descuento
promedioprecio = acumuladortotal / contador

document.write('a) el precio bruto a abonar es: ' + acumuladorprecio);
document.write('b) el precio con descuento es: ' + preciocondescuento);
document.write('d) el ingrediente mas caro es: ' + preciomax + ' y el ingrediente es ' + ingredientemax);
ocument.write('f) el de precio por kg es' + promedioprecio);

}
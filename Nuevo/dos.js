function mostrar() {

  var nombreingrediente;
  var pesokg;
  var preciokg;
  var tipoingrediente;
  var respuesta = 's';
  var precioingredientemascaro;
  var tipoingredientemascaro;
  var contador = 0;
  var acumuladordepeso = 0;
  var acumuladordeprecio = 0;
  var acumuladortotal = 0;
  var descuento;
  var preciobruto;
  var precioncondescuento = '-';
  var promedio;


  do {

    do {
      nombreingrediente = prompt('Ingrese el nombre del ingrediente ');
    } while (!isNaN(nombreingrediente));

    do {
      pesokg = prompt('Ingrese el peso por kg del ingrediente (entre 10 y 1000)');
      pesokg = parseInt(pesokg);
    } while (isNaN(pesokg) || pesokg < 10 || pesokg > 1000);

    do {
      preciokg = prompt('Ingrese el precio por kg del ingrediente (mayor a 0)');
      preciokg = parseInt(preciokg);
    } while (isNaN(preciokg) || preciokg < 0);

    do {
      tipoingrediente = prompt('Ingrese el tipo de producto ("v" para vegetal / "a" para animal / "m" para mezcla)');
    } while (!isNaN(tipoingrediente || tipoingrediente != 'v' && tipoingrediente != 'a' && tipoingrediente != 'm'));


    acumuladordepeso = acumuladordepeso + pesokg;
    acumuladordeprecio = acumuladordeprecio + preciokg;
    acumuladortotal = preciokg * preciokg + acumuladortotal ;

    // tipo de ingrediente mas caro

    if (contador == 0 || precioingredientemascaro < pesokg){

      precioingredientemascaro = pesokg;
      tipoingredientemascaro = tipoingrediente;

    }

    contador++;

    respuesta = prompt('Quiere continuar?');
  } while (respuesta == 's');


    // descuentos

    if (acumuladordepeso > 300) {

      descuento = acumuladortotal * 25 / 100;

    } else if (acumuladordepeso > 100 && acumuladordeprecio < 300) {

      descuento = acumuladortotal * 15 / 100;

    } else {

      descuento = 0;
    }

    preciobruto = acumuladortotal;

    precioncondescuento = acumuladortotal - descuento;

    if(acumuladordeprecio != 0){

      promedio = acumuladordeprecio / contador;
      promedio = parseFloat(promedio);
    }

    document.write('a) el importe bruto a abonar es: $' + preciobruto + '</br>');
    document.write('b) el importe total a abonar con descuento es: $' + precioncondescuento + '</br>');
    document.write('d) el tipo de ingrediente mas caro es: ' + tipoingredientemascaro + '</br>');
    document.write('f) el promedio de precio por kg es: ' + promedio.toFixed(2) + '</br>');
}
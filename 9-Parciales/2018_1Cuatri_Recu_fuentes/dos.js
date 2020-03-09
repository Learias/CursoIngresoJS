function mostrar() {
    var respuesta = 's';
    var nombrehuesped;
    var cantidaddepersonas;
    var cantidaddediasdeestadia;
    var formasdepago;
    var cantidaddepersonasmaxhuesped;
    var nombrehuespedmaxcantidad;
    var mascantidaddedias;
    var cantidadpersonasmasdias;
    var contadortarjeta = 0;
    var contadorefectivo = 0;
    var contadorqr = 0;
    var acumuladordediasreserva = 0;
    var formadepagomax;
    var contador = 0;
    var promedio;

    do {
        do {
            nombrehuesped = prompt('ingrese el nombre del huesped');
        } while (!isNaN(nombrehuesped));

        do {
            cantidaddepersonas = prompt('ingrese la cantidad de personas');
            cantidaddepersonas = parseInt(cantidaddepersonas);
        } while (isNaN(cantidaddepersonas) || cantidaddepersonas < 1);

        do {
            cantidaddediasdeestadia = prompt('ingrese la cantidad de dias de estadia');
            cantidaddediasdeestadia = parseInt(cantidaddediasdeestadia);
        } while (isNaN(cantidaddediasdeestadia) || cantidaddediasdeestadia < 1);

        do {
            formasdepago = prompt('ingrese la forma de pago (tarjeta / efectivo / QR)');
        } while (!isNaN(formasdepago || formasdepago != 'tarjeta' && formasdepago != 'efectivo' && formasdepago != 'QR'));


        // Huesped que trajo mayor cantidad de personas 

        if (contador == 0 || cantidaddepersonasmaxhuesped < cantidaddepersonas) {

            cantidaddepersonasmaxhuesped = cantidaddepersonas
            nombrehuespedmaxcantidad = nombrehuesped
        }

        // La cantidad de personas que se quedaron más días

        if (contador == 0 || mascantidaddedias < cantidaddediasdeestadia) {

            mascantidaddedias = cantidaddediasdeestadia;
            cantidadpersonasmasdias = cantidaddepersonas;

        }

        // Forma de pago má utilizada

        switch (formasdepago) {
            case ('tarjeta'):
                contadortarjeta++;
                break;
            case ('efectivo'):
                contadorefectivo++;
                break;
            default:
                contadorqr++;
        }

        if ((contadortarjeta > contadorefectivo) && (contadortarjeta > contadorqr)) {
            formadepagomax = formasdepago
        }
        if ((contadorefectivo > contadortarjeta) && (contadorefectivo > contadorqr)) {
            formadepagomax = formasdepago
        }
        if ((contadorqr > contadortarjeta) && (contadorqr > contadoefectivo)) {
            formadepagomax = formasdepago
        }
        //(A CHEQUEAR, ULTIMO PUNTO RESTANTE)

        // cantidad de dias de reserva en total
        acumuladordediasreserva = acumuladordediasreserva + cantidaddediasdeestadia;
        contador++;



        respuesta = prompt('Quiere continuar?');
    } while (respuesta == 's');


    if (acumuladordediasreserva != 0) {
        promedio = acumuladordediasreserva / contador;
    }

    document.write('a) El huesped que trajo más personas en una sola reserva es: ' + nombrehuespedmaxcantidad + '</br>');
    document.write('b) La cantidad de personas que se quedaron más días son: ' + cantidadpersonasmasdias + '</br>');
    document.write('c) La forma de pago mas utilizada es: ' + formadepagomax + '</br>');
    document.write('d) El promedio de días por cantidad de reserva es: ' + promedio);

}

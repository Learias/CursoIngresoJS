
/*

Ejercicio práctica

Para la gestión de un hotel,
ingresar los siguientes datos validados de una reserva
nombre del huésped
cantidad de personas 
cantidad de dia de estadia 
forma de pago(efectivo , tarjeta o QR)

informar el huésped que trajo más personas en una sola reserva.
la cantidad de personas que se quedaron más días
la forma de pago más utilizada.
el promedio de cantidad de días por reserva


*/



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

        // Forma de pago más utilizada

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

        if ((formasdepago == 'tarjeta') && (contadortarjeta > contadorefectivo && contadortarjeta > contadorqr)) {
            formadepagomax = formasdepago;
        } else if ((formasdepago == 'efectivo') && (contadorefectivo > contadortarjeta && contadorefectivo > contadorqr)) {
            formadepagomax = formasdepago;
        } else if ((formasdepago == 'QR') && (contadorqr > contadorefectivo && contadorqr > contadortarjeta)) {
            formadepagomax = formasdepago;
        }



        // cantidad de dias de reserva en total
        acumuladordediasreserva = acumuladordediasreserva + cantidaddediasdeestadia;
        contador++;



        respuesta = prompt('Quiere continuar?');
    } while (respuesta == 's');


    if (contadortarjeta == contadorefectivo && contadorefectivo == contadorqr) {
        formadepagomax = 'se ha abonado la misma cantidad de veces con los 3 medios de pago'
    }

    if (acumuladordediasreserva != 0) {
        promedio = acumuladordediasreserva / contador;
    }

    document.write('a) El huesped que trajo más personas en una sola reserva es: ' + nombrehuespedmaxcantidad + '</br>');
    document.write('b) La cantidad de personas que se quedaron más días son: ' + cantidadpersonasmasdias + '</br>');
    document.write('c) La forma de pago mas utilizada es: ' + formadepagomax + '</br>');
    document.write('d) El promedio de días por cantidad de reserva es: ' + promedio);

}

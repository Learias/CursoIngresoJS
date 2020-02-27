function mostrar()
{

    var numero = parseInt(prompt("Ingrese un número  "));
    var contadordivisores = 0;


    while (isNaN(numero)) {

        numero = parseInt(prompt("el dato ingresado no corresponde, ingrese un número "));

    }

    for (var i = 1; i <= numero; i++) {


        //si el resto de la división entre el número ingresado e i es cero, entonces es un divisor de numero
        if (numero % i == 0) {

            document.write(i + "</br>");
            contadordivisores++;
        }
    }

    document.write("Cantidad de divisores: " + contadordivisores + "</br>");



}//FIN DE LA FUNCIÓN
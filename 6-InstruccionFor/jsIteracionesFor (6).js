function mostrar() {

    var numero = parseInt(prompt("Ingrese un número  "));
    var contadorpares = 0;


    while (isNaN(numero)) {

        numero = parseInt(prompt("el dato ingresado no corresponde, ingrese un número "));

    }

    for (var i = 1; i <= numero; i++) {

        //si el resto entre la división de x número y 2 es 0, entonces es par

        if (i % 2 == 0) {

            document.write(i + "</br>");
            contadorpares++;
        }
    }

    document.write("Cantidad de números pares: " + contadorpares + "</br>");



}//FIN DE LA FUNCIÓN
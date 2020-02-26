function mostrar() {

    var numero = parseInt(prompt("Ingrese un número  "));
    var contadorpares = 0;
  

    while (isNaN(numero)) {

        numero = parseInt(prompt("el dato ingresado no corresponde, ingrese un número "));

    }

    for (var i = 1; i <= numero; i++) {


        if (i % 2 == 0) {

            document.write(i + "</br>" );
            contadorpares++;
        } 
    }

    document.write("Contador de números pares: " +contadorpares + "</br>");



}//FIN DE LA FUNCIÓN
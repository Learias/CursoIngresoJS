/*

Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.
g) El menor número de las letras minúsculas.

*/


function mostrar() {
  var numero;
  var letra;
  var contadorPares = 0;
  var contadorImpares = 0;
  var contadorCeros = 0;
  var acumuladorPositivos = 0;
  var acumuladorNegativos = 0;
  var contadorPositivos = 0;
  var promedio;
  var numMaximo;
  var letraMaxima;
  var numMinimo;
  var letraMinima;
  var seguir;
  var flag = 0;
  var letraMinMenor = "-";
  var numMinMenor = "-";


  do {

    //---------------- pido los datos y valido ---------------------

    letra = prompt("Ingrese una letra.");
    while (!((letra >= 'A' && letra <= 'Z') || (letra >= 'a' && letra <= 'z'))) {
      letra = prompt("Eso no es una letra. Ingrese una letra.");
    }

    numero = parseInt(prompt("Ingrese un numero entre -100 y 100."));
    while (numero < -100 || numero > 100 || isNaN(numero)) {
      numero = parseInt(prompt("Número no válido. Ingrese un numero entre -100 y 100."));
    }


    // ----------- pares e impares ----------------

    if (numero % 2 == 0) {
      contadorPares++;
    }
    else {
      contadorImpares++;
    }

    //----------- signos ------------------

    if (numero == 0) {
      contadorCeros++;
    }
    else if (numero > 0) {
      acumuladorPositivos = acumuladorPositivos + numero;
      contadorPositivos++;
    }
    else {
      acumuladorNegativos = acumuladorNegativos + numero;
    }

    //------------ maximos y minimos ----------------

    if (numero > numMaximo || flag == 0) {
      numMaximo = numero;
      letraMaxima = letra;
    }
    if (numero < numMinimo || flag == 0) {
      numMinimo = numero;
      letraMinima = letra;
      flag = 1;
    }

    //---------------- menor valor letra minuscula -------------------------

    if ((letra >= 'a' && letra <= 'z') && (flag == 1 || numero < numMinMenor)) {
      numMinMenor = numero;
      letraMinMenor = letra;
      flag = 2;
    }


    seguir = prompt("Quiere seguir ingresando datos?");

  } while (seguir == 's');

  //-------------- promedio positivos ----------------------

  if (contadorPositivos = !0) {
    promedio = acumuladorPositivos / contadorPositivos;
  }

  document.write("Cantidad de números pares: " + contadorPares + "</br>");
  document.write("Cantidad de números impares: " + contadorImpares + "</br>");
  document.write("Cantidad de ceros: " + contadorCeros + "</br>");
  document.write("Promedio de los números positivos: " + promedio + "</br>");
  document.write("Suma de los números negativos: " + acumuladorNegativos + "</br>");
  document.write("Letra y número máximo: " + letraMaxima + " , " + numMaximo + "</br>");
  document.write("Letra y número mínimo: " + letraMinima + " , " + numMinimo + "</br>");
  document.write("Letra y número minúscula mínimo: " + letraMinMenor + " , " + numMinMenor);

}




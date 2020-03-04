/*

Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 (validar),
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) La marca del producto más pesado que no sea congelado (temperatura > 0)
c) La cantidad de productos que se conservan a menos de 0 grados.
d) El promedio del peso de todos los productos.
f) El peso máximo y el mínimo.

*/



function mostrar() {
  var temperatura;
  var marca;
  var peso;
  var contadorPares = 0;
  var contadorCong = 0;
  var marcaPesada;
  var pesoMaximoMas0;
  var pesoMaximo;
  var pesoMinimo;
  var promedioPeso;
  var acumuladorPeso = 0;
  var contador = 0;
  var seguir;
  var flag = 0;

  //--------------------------------------------

  do {
    marca = prompt("Ingrese marca: ");

    peso = parseInt(prompt("Ingrese un peso (1 y 100): "));
    while (peso < 1 || peso > 100 || isNaN(peso)) {
      peso = parseInt(prompt("Peso invalido. Ingrese un peso (1 y 100): "));
    }
    temperatura = parseInt(prompt("Ingrese un temperatura (-30 y 30): "));
    while (temperatura < -30 || temperatura > 30 || isNaN(temperatura)) {
      temperatura = parseInt(prompt("Temperatura invalida. Ingrese un temperatura (-30 y 30): "));
    }

    // ---------- temperaturas pares ------------

    if (temperatura % 2 == 0) {
      contadorPares++;
    }

    // --------- peso del producto más pesado no congelado ----------

    if ((flag == 0 || peso > pesoMaximoMas0) && temperatura > 0) {
      pesoMaximoMas0 = peso;
      marcaPesada = marca;
      flag = 1;
    }

    // ---------- cantidad productos congelados --------------

    if (temperatura < 0) {
      contadorCong++;
    }

    acumuladorPeso = acumuladorPeso + peso;


    // ----------- peso máximo y mínimo -------------

    if (contador == 0 || peso > pesoMaximo) {
      pesoMaximo = peso;
    }
    if (contador == 0 || peso < pesoMinimo) {
      pesoMinimo = peso;
      contador++;
    }


    seguir = prompt("Quiere continuar?:");
  } while (seguir == 's' || seguir == 'si' || seguir == 'Si' || seguir == 'SI');

  promedioPeso = acumuladorPeso / contador;

  if (flag == 0) {
    marcaPesada = "sin datos";
  }


  document.write("a) La cantidad de temperaturas pares: " + contadorPares + "</br>");
  document.write("b) La marca del producto más pesado no congelado: " + marcaPesada + "</br>");
  document.write("c) La cantidad de productos que se conservan a menos de 0 grados: " + contadorCong + "</br>");
  document.write("d) El promedio del peso de todos los productos: " + promedioPeso + "</br>");
  document.write("f) El peso máximo: " + pesoMaximo + " y el mínimo: " + pesoMinimo + "</br>");


}

/*

Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.

*/




function mostrar() {
    var sexo;
    var notas;
    var sexominimo;
    var notaminima = 0;
    var notavarones = 0;
    var acumuladornotas = 0;
    var promedio;
    var i = 0;
    var flag = 0;


    for (i = 0; i < 5; i++) {

        notas = parseInt(prompt("ingrese una nota del 1 al 10"));

        while (isNaN(notas) || notas < 0 || notas > 10) {

            notas = parseInt(prompt("el dato ingresado no corresponde, ingrese un número válido "));
        }

        sexo = prompt("Ingrese el tipo de sexo: m (para masculino), f (para feminino");

        while (sexo != "m" && sexo != "f") {

            sexo = prompt("El sexo ingresado no es correcto, vuelva a intentarlo ");
        }

         acumuladornotas = acumuladornotas + notas;

        if (flag == 0 || notas < notaminima) {

            notaminima = notas;
            sexominimo = sexo;
            flag = 1;
        }
        if (notas >= 6 && sexo == "m") {

            notavarones++;

        }
        
    }


    // saco el promedio de la totalidad de las notas
 promedio = acumuladornotas / 5;

alert("El promedio de las notas: " + promedio + "\nLa nota más baja: " + notaminima + ", y el sexo de esa persona es " + sexominimo + 
"\nVarones que obtuvieron una nota mayor o igual a 6 : " + notavarones);
}
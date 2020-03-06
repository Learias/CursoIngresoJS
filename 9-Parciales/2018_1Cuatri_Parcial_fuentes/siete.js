/*

Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.

*/




function mostrar() {

    var notas;
    var sexo;
    var flag = 0;
    var i = 0;
    var promedio;
    var contadoralumnos = 0;
    var acumuladornotas = 0;
    var notabaja = 0;
    var sexonotabaja = "-";
    var contadorvarones = 0;


    // pido los datos y válido, hasta que tenga los 5 datos de cada variable.

    for (i == 0; i < 5; i++) {

        notas = parseInt(prompt("Ingrese notas entre 1 y 10"));

        while (isNaN(notas) || notas < 1 || notas > 10) {

            notas = parseInt(prompt("Dato inválido, ingrese notas entre 1 y 10"));
        }

        sexo = prompt("Ingrese tipo de sexo. 'f' para femenino y 'm' para masculino");

        while (!(sexo == 'f' || sexo == 'm')) {
            sexo = prompt("El sexo ingresado no es válido, ingrese 'f' para femenino y 'm' para masculino");
        }

        // suma de las notas totales

        acumuladornotas = notas + acumuladornotas;

        contadoralumnos++;

        // nota mas baja y el sexo de esa persona

        if (flag == 0 || notas < notabaja) {

            notabaja = notas;
            sexonotabaja = sexo;
            flag = 1
        }

        // la cantidad de varones con notas > a 6

        if (notas > 6 && sexo == 'm') {

            contadorvarones++;
        }

    }

    //promedio de todas las notas

    promedio = acumuladornotas / contadoralumnos
    
    alert ("El promedio de las notas totales: " + promedio + "\n" + "La nota más baja: " + notabaja + " y el sexo: " + sexonotabaja + 
    "\n" + "La cantidad de varones con nota >= 6 : " + contadorvarones);


}


function mostrar() {
    var respuesta = 's';
    var nombrepais;
    var cantidadhabitantes;
    var temperaturaminima;
    var contadortemppares = 0;
    var contadortempmax40 = 0;
    var contador = 0;
    var menoshabitantes;
    var nombremenoshabitantes;
    var tempminmin;
    var nombremenortemp;
    var acumuladorhabitantes = 0;
    var promedio;



    do {

        //pido los datos y los valido
        do {
            nombrepais = prompt('Ingrese el nombre del país');
        } while (!isNaN(nombrepais));

        do {
            cantidadhabitantes = prompt('Ingrese la cantidad de habitantes en millones (de 1 a 7000)');
            cantidadhabitantes = parseInt(cantidadhabitantes);
        } while (isNaN(cantidadhabitantes) || cantidadhabitantes < 1 || cantidadhabitantes > 7000);

        do {
            temperaturaminima = prompt('Ingrese la temperatura minima del pais (entre -50 y 50)');
            temperaturaminima = parseInt(temperaturaminima);
        } while (isNaN(temperaturaminima) || temperaturaminima < -50 || temperaturaminima > 50);

        //cantidad de temperaturas pares

        if (temperaturaminima % 2 == 0) {

            contadortemppares++;
        }

        //cantidad de paises que superan los 40 grados

        if (temperaturaminima > 40) {

            contadortempmax40++;
        }

        //el nombre del pais con menos habitantes

        if(contador == 0 || menoshabitantes > cantidadhabitantes){

            menoshabitantes = cantidadhabitantes;
            nombremenoshabitantes = nombrepais;

        }

        //nombre y temperatura del pais con menor temperatura

        if(contador == 0 || tempminmin > temperaturaminima){

            tempminmin = temperaturaminima;
            nombremenortemp = nombrepais;
        }


        //suma de todos los habitantes

        acumuladorhabitantes = acumuladorhabitantes + cantidadhabitantes;
        contador++;



        respuesta = prompt('Quiere continuar?');
    } while (respuesta == 's');


    if(acumuladorhabitantes != 0){

        promedio = acumuladorhabitantes / contador;
        promedio = parseFloat(promedio);
    }

    document.write('a) La cantidad de temperaturas pares: ' + contadortemppares + "</br>");
    document.write('b) El nombre del país con menos habitantes: ' + nombremenoshabitantes + "</br>");
    document.write('c) La cantidad de países que superan los 40 grados:' + contadortempmax40 + "</br>");
    document.write('d) El promedio de habitantes entre los paises ingresados: ' + promedio.toFixed(2) + "</br>");
    document.write('e) La temperatura mínima ingresada: ' + tempminmin + ' y el nombre de ese país: '+ nombremenortemp + "</br>");

}

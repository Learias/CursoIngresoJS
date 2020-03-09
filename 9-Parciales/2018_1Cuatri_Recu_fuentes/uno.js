/*
Ejercicio práctica

Se pide la carga de datos de un contenedor  de alimento canino 
con un máximo de carga de 1000kg, cargar hasta que el cliente quiera o se llene el contenedor.


se pide:
1)marca
2)kilos por bolsa
3)cantidad de bolsas
4)importe por bolsa

a)que marca tiene más kilos en el contenedor
b)que marca tiene más bolsas de alimento en el contenedor
c)que marca tiene el mayor importe por bolsa de alimento
d)el importe y la marca de la bolsa de alimento menos pesada.

*/







function mostrar() {

    var respuesta = 's'
    var marca;
    var kgbolsas;
    var precioporbolsa;
    var cantidadbolsas;
    var acumuladorcontenedor = 0;
    var kgbolsasmax;
    var marcamax;
    var flag = 0;
    var cantidadbolsasmax;
    var marcacantidadbolsasmax;
    var precioporbolsamax;
    var marcaprecioporbolsamax;
    var kgbolsasmin;
    var marcakgbolsasmin;
    var importekgbolsasmin;


    do {

        do {
            marca = prompt('ingrese la marca del producto');
        } while (!isNaN(marca));
        do {
            kgbolsas = prompt('ingrese el peso de la bolsa en kg (a partir de 1kg)');
            kgbolsas = parseInt(kgbolsas);
        } while (isNaN(kgbolsas) || kgbolsas < 1);
        do {
            cantidadbolsas = prompt('ingrese la cantidad de bolsas (a partir de 1)');
            cantidadbolsas = parseInt(cantidadbolsas);
        } while (isNaN(cantidadbolsas) || cantidadbolsas < 1);
        do {
            precioporbolsa = prompt('ingrese el precio de la bolsa');
            precioporbolsa = parseInt(precioporbolsa);
        } while (isNaN(precioporbolsa) || precioporbolsa < 1);

        // total de kg dentro del contenedor

        acumuladorcontenedor = kgbolsas + acumuladorcontenedor

        // marca con mas kg en el contenedor

        if (flag == 0 || kgbolsasmax < kgbolsas) {

            kgbolsasmax = kgbolsas;
            marcamax = marca;

        }

        // marca con mayor cantidad de bolsas en el contenedor

        if (flag == 0 || cantidadbolsasmax < cantidadbolsas) {

            cantidadbolsasmax = cantidadbolsas;
            marcacantidadbolsasmax = marca;

        }

        // marca con mayor importe por bolsa

        if (flag == 0 || precioporbolsamax < precioporbolsa) {

            precioporbolsamax = precioporbolsa;
            marcaprecioporbolsamax = marca;

        }

        // marca con menor peso de bolsa y su importe

        if (flag == 0 || kgbolsasmin > kgbolsas) {

            kgbolsasmin = kgbolsas;
            marcakgbolsasmin = marca;
            importekgbolsasmin = precioporbolsa
            flag++;
        }



        respuesta = prompt('quiere continuar?');
    } while (respuesta == 's' && acumuladorcontenedor < 1000);



    document.write('a) la marca con mas kg en el contenedor es: ' + marcamax + '</br>');
    document.write('b) la marca con mas bolsas en el contenedor es: ' + marcacantidadbolsasmax + '</br>');
    document.write('c) la marca con el mayor importe por bolsa es: ' + marcaprecioporbolsamax + '</br>');
    document.write('d) la marca de alimento menos pesada es: ' + marcakgbolsasmin + ' y su importe es: $' + importekgbolsasmin + '</br>');

}

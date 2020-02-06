/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var sueldo;
    var descuento;
    var divisor;
    var resultado;

    descuento = 25
    divisor = 100

    sueldo = parseInt(document.getElementById("importe").value);

    descuento = (sueldo * descuento) / divisor;
    resultado = sueldo - descuento;

    document.getElementById("resultado").value = resultado;
}

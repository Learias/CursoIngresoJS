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

    //Reemplazo función ParseInt por parseFloat para obtener números decimales de ser necesario
    sueldo = parseFloat(document.getElementById("importe").value);

    descuento = (sueldo * descuento) / divisor;
    resultado = sueldo - descuento;

    //ingreso función "toFixed" para determinar la cantidad de decimales que quiero que se vean
    document.getElementById("resultado").value = resultado.toFixed(2);
}

/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
{
var precio1;
var precio2;
var precio3;

var resultado;
var impuesto;

var IVA = 21;

function Sumar() {

    precio1 = parseFloat(document.getElementById("PrecioUno").value);
    precio2 = parseFloat(document.getElementById("PrecioDos").value);
    precio3 = parseFloat(document.getElementById("PrecioTres").value);

    resultado = parseFloat(precio1 + precio2 + precio3);
    alert("La suma de los tres productos es de " + resultado);

}
function Promedio() {

    precio1 = parseFloat(document.getElementById("PrecioUno").value);
    precio2 = parseFloat(document.getElementById("PrecioDos").value);
    precio3 = parseFloat(document.getElementById("PrecioTres").value);

    resultado = parseFloat(precio1 + precio2 + precio3);
    resultado = resultado / 3
    alert("El promedio de los 3 productos es de " + resultado);


}
function PrecioFinal() {

    precio1 = parseFloat(document.getElementById("PrecioUno").value);
    precio2 = parseFloat(document.getElementById("PrecioDos").value);
    precio3 = parseFloat(document.getElementById("PrecioTres").value);

    resultado = parseFloat(precio1 + precio2 + precio3);
    impuesto = resultado * IVA / 100;
    resultado = resultado + impuesto;
    alert("El precio final de los productos es de " + resultado);

}
}
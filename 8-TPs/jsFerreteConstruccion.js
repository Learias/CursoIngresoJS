/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
{
var altura;
var base;
var circunferencia;
var radio;
var alambre;
var resultado;

var pi = 3.14 ;


function Rectangulo () 
{
    altura = parseInt(document.getElementById("Largo").value);
    base = parseInt(document.getElementById("Ancho").value);

    //utilizo fórmula base * altura para encontrar el área del rectángulo
    alambre = base * altura ;
    //multiplico por 3, porque son 3 hilos de alambre
    resultado = alambre * 3 ; 
    alert("La cantidad de alambre a utilizar es de " + resultado + " Mts");


}

function Circulo () 
{
    radio = parseInt(document.getElementById("Radio").value);
    //utlizo función "Math.pow" para elevar a "radio" al cuadrado (x, 2)
    //utilizo fórmula pi * radio al cuadrado para encontrar el área del círculo
    alambre = Math.pow(radio, 2) * pi ;
    resultado = alambre * 3
    alert("La cantidad de alambre a utilizar es de " + resultado + " Mts")

	
}
function Materiales () 
{
    var cemento = 2
    var cal = 3
    
    altura = parseInt(document.getElementById("Largo").value);
    base = parseInt(document.getElementById("Ancho").value);

     cemento = (base * altura) * cemento ;
     cal = (base * altura) * cal
   
    alert("La cantidad de bolsas de cemento a utilizar para este terreno es de " + cemento + ", y de cal " + cal);


}
}
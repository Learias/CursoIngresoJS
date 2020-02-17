/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/

{

    var temperatura1
    var temperatura2
    

    function FahrenheitCentigrados() {
        temperatura1 = parseFloat(document.getElementById("Temperatura").value);
        //la fórmula para pasar de fahrenheit a centígrados es (x °F - 32) * 5/9
        temperatura2 = (temperatura1 - 32) * 5 / 9;
        alert("La temperatura en Fahrenheit es " + temperatura1 + " y en centígrados " + temperatura2.toFixed(1));

    }

    function CentigradosFahrenheit() {
        temperatura1 = parseFloat(document.getElementById("Temperatura").value);
        //fórmula inversa (x °C * 5/9) + 32
        temperatura2 = (temperatura1 * 5 / 9) + 32;
        alert("La temperatura en centígrados es " + temperatura1 + " y en Fahrenheit " + temperatura2.toFixed(1));

    }

}
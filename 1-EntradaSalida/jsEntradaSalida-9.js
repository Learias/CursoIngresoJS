/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento() {

    var sueldo;
    var aumento;
    var divisor;
    var resultado;

    aumento = 10
    divisor = 100

    sueldo = parseInt(document.getElementById("sueldo").value);

    //realizo calculo de porcentaje mediante regla de tres simple
    aumento = (sueldo * aumento) / divisor;
    resultado = sueldo + aumento;

    document.getElementById("resultado").value = resultado;





}

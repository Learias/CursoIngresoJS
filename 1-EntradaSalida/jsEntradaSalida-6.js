/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var num1;
    var num2;
    var suma;

    //uso función parseInt para convertir los valores de texto a números 
    //de no usarse esa función, los datos (aunque sean números) no se suman/restan/dividen/etc
    num1 = parseInt(document.getElementById("numeroUno").value);
    num2 = parseInt(document.getElementById("numeroDos").value);

    suma = num1 + num2;

    alert("La suma es " + suma);

}


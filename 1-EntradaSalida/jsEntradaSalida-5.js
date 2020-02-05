/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
    //utilizo dos variables para almacenar en memoria dos valores
    var nombre;
    var edad;
    

    nombre = document.getElementById("elNombre").value;
    edad = document.getElementById("laEdad").value;

    alert("Usted se llama " + nombre + " y tiene " + edad + " años" );
} 

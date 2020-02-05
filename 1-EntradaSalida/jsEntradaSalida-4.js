/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre;

	//Pido al usuario ingresar el dato para darle valor a la variable nombre
	nombre = prompt("Ingrese su nombre: ");

	//Modifico el ID del imput de texto del HTML por el dato ingresado por el usuario
    document.getElementById("elNombre").value = nombre;

}


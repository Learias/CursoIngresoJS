/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
    var nombre;

    //Busco en el HTML el ID de imput de texto de "nombre", para asignar ese valor a la var nombre
    nombre = document.getElementById("elNombre").value;

    alert(nombre);
	
}



/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar() {
    
    //utilizo memoria en sistema para poder almacenar un dato/variable
    var nombre;

    //con la función "prompt" solicito el dato al usuario
    //tomo el dato ingresado por el usuario y lo almaceno en la var nombre
    nombre = prompt("ingrese un nombre: ");
    
    //con función "alert" transmito el mensaje al usuario
    //con la concatenación uno el dato fijo (entre comillas), con la variable
    alert("Su nombre es: " + nombre); 

}


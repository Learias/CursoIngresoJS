function mostrar() {

    var sexo = prompt("ingrese f (para femenino) ó m (para masculino)");

    while (sexo != "m" && sexo != "f") {


        sexo = prompt("Error. Ingrese el tipo de sexo nuevamente ");

    }

    document.getElementById("Sexo").value = sexo;
   
}
//FIN DE LA FUNCIÓN
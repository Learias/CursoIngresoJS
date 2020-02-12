function mostrar() {

//tomo la edad  

var edad

edad=parseInt(document.getElementById("edad").value);
estadoCivil=document.getElementById("estadoCivil").value;
	
        //utilizo operador lógico ! (not) para ingresar el mensaje en cualquier otro valor que no sea "soltero"
	if (edad <18 && estadoCivil !="Soltero") {
		alert("Es muy pequeño para no ser soltero.");

    }


}//FIN DE LA FUNCIÓN
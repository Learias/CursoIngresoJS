function mostrar()
{
//tomo la edad  


var edad

edad=parseInt(document.getElementById("edad").value) ;


	if (edad <	13  ) { 
		alert("Usted es un niño");
	}else if(edad <= 17) {
		alert("Usted es un adolescente");
	}else {
		alert("Usted es un adulto");
	}





}//FIN DE LA FUNCIÓN
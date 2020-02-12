function mostrar() {
	//Genero el número RANDOM entre 1 y 10 
    var nota
	//                               min  max    max + 1 - min + min
	var nota = Math.floor(Math.random(1, 10) * ((10 + 1) - 1) + 1);
	
	if (nota >= 9) {
		alert("Excelente con un " + nota);
	} else if (nota >= 4) {
		alert("Aprobo con un " + nota);
	} else  {
		alert("Vamos, la próxima se puede, te sacaste un " + nota);
	}



}//FIN DE LA FUNCIÓN
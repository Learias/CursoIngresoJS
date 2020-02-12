function mostrar() {
	//Genero el número RANDOM entre 1 y 10 
    var numeroAleatorio
	
	var numeroAleatorio = Math.floor(Math.random(1, 10) * 11);
	
	if (numeroAleatorio >= 9) {
		alert("Excelente con un " + numeroAleatorio);
	} else if (numeroAleatorio > 4) {
		alert("Aprobo con un " + numeroAleatorio);
	} else if (numeroAleatorio < 4) {
		alert("Vamos, la próxima se puede, te sacaste un " + numeroAleatorio);
	}



}//FIN DE LA FUNCIÓN
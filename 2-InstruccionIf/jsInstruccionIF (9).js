function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

	var numeroAleatorio

	//utilizo función "Math.floor" para redondear los números
	//utilizo función "Math.random" para obtener números al azar, entre un rango mínimo y otro máximo
	//multiplico siempre por el valor máximo + 1
	var numeroAleatorio = Math.floor(Math.random(1,10)*11);
			alert(numeroAleatorio);

	

}//FIN DE LA FUNCIÓN
function mostrar() {

	var flag = 0;
	var numero;
	var maximo;
	var minimo;
	var respuesta = 'si';


	do {

		numero = parseInt(prompt('Ingrese un número'));

		while (isNaN(numero)) {

			numero = parseInt(prompt("El caracter ingresado no es correcto, vuelva a intentarlo"));
            
		}
          //ingreso flag para poder ingresar la primera vez, y poder asignarle un valor a "maximo"
		if (flag == 0 || maximo < numero) {

			maximo = numero;

		}//ingreso flag para poder asignacle valor también a mínimo
		if (flag == 0 || minimo > numero) {

			minimo = numero;
			flag ++;
			
		}    

		respuesta = prompt('Quiere volver a ingresar otro número?');

	} while (respuesta == 'si');
    {
      alert("El número máximo es " + maximo + " y el número mínimo es " + minimo);
  
	}

	document.getElementById('maximo').value = maximo;
	document.getElementById('minimo').value = minimo;





}//FIN DE LA FUNCIÓN
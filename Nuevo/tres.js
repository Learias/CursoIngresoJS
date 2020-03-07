function mostrar() {
	var edad;
	var nombre;
	var sexo;
	var estadocivil;


	nombre = prompt('ingrese su nombre');

	do {
		edad = prompt('ingrese edad  (mayor a 18 y menor a 107) ');
		edad = parseInt(edad);
	} while (isNaN(edad) || edad < 18 || edad > 107);

	do {
		sexo = prompt('Ingrese el tipo de sexo ("f" para fememino o "m" para masculino)');
	} while (!isNaN(sexo) || sexo != 'f' && sexo != 'm');

	do {
		estadocivil = prompt('Ingrese su estado civil ("soltero" / "casado / "viudo")');
	} while (!isNaN(estadocivil) || estadocivil != 'f' && estadocivil != 'm');

}
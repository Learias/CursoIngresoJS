function mostrar() {

    var repeticiones = parseInt(prompt("ingrese el número de repeticiones"));

    while (isNaN(repeticiones)) {

        repeticiones = parseInt(prompt("Eso no es un número, vuelva a ingresar el dato "));
    }

    for (repeticiones; repeticiones >= 1; repeticiones--) {

        document.write("Hola UTN Fra </br>");
    }


 /* for( var i = 0 ; i < repeticiones ; i++);

 document.write("Hola UTN Fra </br>");
/*/

}

//FIN DE LA FUNCIÓN
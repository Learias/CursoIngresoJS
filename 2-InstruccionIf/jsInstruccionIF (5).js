function mostrar()
{
//tomo la edad  

var edad;

    edad = parseInt(document.getElementById("edad").value);

/*    
    if(edad < 13 || edad > 17 ) {
        alert("Usted no es un adolescente");
    }
/*/

    if(edad <= 12 || edad >= 18) {
        alert ("Usted no es un adolescente");
    }

}

//FIN DE LA FUNCIÓN
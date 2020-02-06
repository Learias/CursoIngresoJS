function mostrar() {
    //tomo la edad  

    var edad;

    edad = parseInt(document.getElementById("edad").value);


    if (edad >= 18) {

        alert("Usted es mayor de edad");

        // else, al igual que if, siempre entre corchetes y de haber una condición, sin punto y coma
    } else {

        alert("Usted es menor de edad");
    }


}//FIN DE LA FUNCIÓN
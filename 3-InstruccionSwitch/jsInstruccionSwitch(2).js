function mostrar() {
    //tomo la edad  
    var mes = document.getElementById('mes').value;

    switch (mes) {
        case "Julio":
        case "Agosto":

            alert("Abrigate que hace frío");
            break;

        case "Septiembre":
        case "Octubre":
        case "Noviembre":
        case "Diciembre":

            alert("Ya pasamos el frío, ahora calor!!!");
            break;

        default:
            alert("Falta para el invierno");


        //ingreso el default para ingresar el resultado de los otros valores que no tuve en cuenta
        //agrupo varios "case" uno debajo del otro, para incluir mas posibilidades 




    }

}//FIN DE LA FUNCIÓN
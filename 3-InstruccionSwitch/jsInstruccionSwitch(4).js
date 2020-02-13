function mostrar() {
    //tomo la edad  
    var mes = document.getElementById('mes').value;

    switch (mes) {
        case "Abril":
        case "Junio":
        case "Septiembre":

            alert("Este mes tiene 30 días");
            break;

        case "Febrero":
        case "Noviembre":

            alert("Este mes tiene 29 días");
            break;

        default:
            alert("Este mes tiene 31 días");


    }


}//FIN DE LA FUNCIÓN
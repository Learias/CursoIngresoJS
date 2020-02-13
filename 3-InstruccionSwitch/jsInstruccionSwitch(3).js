function mostrar() {
    //tomo la edad  
    var mes = document.getElementById('mes').value;

    switch (mes) {
        case "Febrero":
            alert("Este mes no tiene mas de 29 días");
            break;

        default:
            alert("Este mes tiene mas de 30 días");

            //Se debería usar if/else, porque sólo hablamos de dos posibilidades.

    }
    }
    //FIN DE LA FUNCIÓN
function mostrar() {

    var clave
    var oportunidades = 0

    var clave = prompt("ingrese el número clave.");

    while (clave != "utn750")  {
        alert("La clave es erronea, vuelva a intentarlo");

        var clave = prompt("ingrese el número clave nuevamente ");
        
        if (oportunidades > 3 ) {
            
            oportunidades ++;
        
        }

        break;
        
        

    }




}//FIN DE LA FUNCIÓN

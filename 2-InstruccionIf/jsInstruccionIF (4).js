function mostrar()
{
//tomo la edad  

var edad;

    edad = parseInt(document.getElementById("edad").value);

   //utilizo operador lógico && (and) para expresar el único resultado posible
    if (edad >=13 && edad <= 17) {
        alert("Usted es un adolescente");
    }


/*
    //utilizo operador lógico ! (not) para obtener el mismo resultado mediante la negación
    //utilizo operador lógico || (or) para "cubrir" mayor rango de resultados    
    
    if(!(edad < 13 || edad > 17)) {
        alert ("Usted es un adolescente");
    }

/*/

}//FIN DE LA FUNCIÓN
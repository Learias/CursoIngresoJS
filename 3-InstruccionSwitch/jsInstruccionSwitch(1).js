function mostrar()
{
//tomo la edad  

var mes = document.getElementById('mes').value;

switch (mes) {
    case "Enero":
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
      alert("Que comiences bien el año!!!");
      break;
    
      case "Marzo":
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
      alert("A clases!!!");
      break;

      case "Julio" :
      alert("Se vienen las vacaciones!!!");
      break;

      case "Diciembre" :
      alert("Felices vacaciones!!!");
      break;
      
      //ingreso el default para ingresar el resultado de los otros valores que no tuve en cuenta
      default :
      alert("A este mes no lo tuve en cuenta");


}
  
  




}
//FIN DE LA FUNCIÓN
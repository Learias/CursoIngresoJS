/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */




function CalcularPrecio() {

    var cantidad = parseInt(document.getElementById("Cantidad").value);
    var preciolamparas = 35;
    var marca = document.getElementById("Marca").value;
    var importefinal;
    var descuento;
    var precioconIIBB;
    var IIBB;

    while (cantidad < 1 || isNaN(cantidad))
    cantidad = prompt("El dato ingresado no es un número, ingreselo nuevamente ");
    document.getElementById("Cantidad").value = cantidad;
    
       

    if (cantidad >= 6) {


        preciolamparas = cantidad * preciolamparas;
        descuento = preciolamparas * 50 / 100;
        importefinal = preciolamparas - descuento;
        console.log(importefinal);
        

    } else {

    }
    if (cantidad == 5) {


        switch (marca) {

            case "ArgentinaLuz":
                preciolamparas = cantidad * preciolamparas;
                descuento = preciolamparas * 40 / 100;
                importefinal = preciolamparas - descuento;
                console.log(importefinal);
                
                break;

               default:

                preciolamparas = cantidad * preciolamparas;
                descuento = preciolamparas * 30 / 100;
                importefinal = preciolamparas - descuento;
                console.log(importefinal); }
    } else {
        if (cantidad == 4) {

            switch (marca) {
                case "ArgentinaLuz":
                    preciolamparas = cantidad * preciolamparas;
                    descuento = preciolamparas * 25 / 100;
                    importefinal = preciolamparas - descuento;
                    console.log(importefinal);
                   

                    break;

                case "FelipeLamparas":
                    preciolamparas = cantidad * preciolamparas;
                    descuento = preciolamparas * 25 / 100;
                    importefinal = preciolamparas - descuento;
                    console.log(importefinal);
                    

                    break;

                default:
                    preciolamparas = cantidad * preciolamparas;
                    descuento = preciolamparas * 20 / 100;
                    importefinal = preciolamparas - descuento;
                    console.log(importefinal);
                   



            }

        }

        if (cantidad == 3) {

            switch (marca) {
                case "ArgentinaLuz":
                    preciolamparas = cantidad * preciolamparas;
                    descuento = preciolamparas * 15 / 100;
                    importefinal = preciolamparas - descuento;
                    console.log(importefinal);
                   

                    break;
                case "FelipeLamparas":
                    preciolamparas = cantidad * preciolamparas;
                    descuento = preciolamparas * 10 / 100;
                    importefinal = preciolamparas - descuento;
                    console.log(importefinal);
                    
                    break;

                default:
                    preciolamparas = cantidad * preciolamparas;
                    descuento = preciolamparas * 5 / 100;
                    importefinal = preciolamparas - descuento;
                    console.log(importefinal);
                    


            }
        } if (cantidad <= 2) {

            preciolamparas = cantidad * preciolamparas;
            importefinal = preciolamparas
            console.log(importefinal);
            


        }
    }
        if (importefinal < 120) {

            document.getElementById("precioDescuento").value = importefinal;
            alert("Usted pago " + importefinal);

        } else {


            IIBB = importefinal * 0.10;
            precioconIIBB = importefinal + IIBB;

            document.getElementById("precioDescuento").value = precioconIIBB;
            alert("Usted pago $ " + precioconIIBB + ", siendo $ " + IIBB + " el impuesto que se pagó");


        }


    


}


















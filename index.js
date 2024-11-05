// Mostrar la mínima altura registrada de un grupo de personas y además en qué ubicación se encuentra. 
// Las alturas estan registradas en un archivo de texto. Hay un número por línea.


var btn = document.getElementById('btn')
var altura = document.getElementById('alt')

function AlturaMinima(alt){
    var minAltura = alt[0];

    for (var i = 1; i < alt.length; i++) {
        if (alt[i] < minAltura) {
            minAltura = alt[i];
        }
    }

    alert("La altura mínima registrada es: " + minAltura);
}


window.addEventListener('DOMContentLoaded', function(){
    alt = [1.80 ,1.65 , 1.75 , 1.70]
    AlturaMinima(alt)

});

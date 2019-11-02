function AgregarCeros (numCeros) {
    var retornar = '';

    for (var i = 0; i < numCeros; i++) {
        retornar = retornar + '0';
    }

    return retornar;
}

function AniadirLetra(numeroDni) {
    var arrayLetras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

    var dniDividido = parseInt(dni % 23);

    return arrayLetras[dniDividido];
}



var dni;
var dniNum;
do {
    var correcto = true;

    dni = prompt("Introduzca los números de su DNI");

    dni = dni.toString() + AgregarCeros(8 - dni.length);

    dniNum = parseInt(dni);

    if (dni.length > 8){
        alert('Debes introducir un valor inferior a 8 dígitos.');
        correcto = false;
    } else if (isNaN(dniNum)) {
        alert('Debes introducir un valor numérico.');
        correcto = false;
    } else if (dniNum < 0) {
        alert('Debes introducir un valor positivo.');
        correcto = false;
    }

} while (!correcto);


var dniDividido = parseInt(dni % 23);

alert("Tu DNI es: " + dni + AniadirLetra(dniNum));
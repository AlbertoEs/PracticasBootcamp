function CalcularMedia(listaNumeros) {
    var suma = 0;

    for (var i = 0; i < listaNumeros.length; i++) {
        suma = suma + (parseInt(listaNumeros[i]));
    }

    return suma / listaNumeros.length;
}

function SepararValores (cadenaNumeros, separador) {
    return cadenaNumeros.split(separador);
}

varstringDeNumeros = '80:70:90:100';

var numerosSeparados = SepararValores(varstringDeNumeros, ':');

console.log(CalcularMedia(numerosSeparados));
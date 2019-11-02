// var nota1 = parseFloat(prompt("Introduzca la nota del primer trimestre"));
// var nota2 = parseFloat(prompt("Introduzca la nota del segundo trimestre"));
// var nota3 = parseFloat(prompt("Introduzca la nota del tercer trimestre"));

// var media = (nota1 + nota2 + nota3) / 3;

// if (media >= 5)
//     alert("Has aprobado!!!!");
// else
//     alert("Me da a mi que no tt");

var nombre, nota;

do {
    nombre = prompt("Introduce tu nombre");
} while(typeof(nombre) != "string");

do {
    nota = parseFloat(prompt("Introduce tu nota"));
} while(isNaN(nota) || nota < 0 || nota > 10);

if (nombre.toUpperCase() === "FRAN" || nota >= 5)
    alert("Estás aprobado!!!");
else
    alert("Has suspendido macho :(");
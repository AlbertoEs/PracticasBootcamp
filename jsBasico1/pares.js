var i = 0

// for(i = 0; i <= 50; i++) {

//     if (i % 2 == 0)
//         console.log("El iterador vale " + i + " y debería ser par. BUCLE FOR");
// }

// i = 0;

// while(i <= 50) {
//     if (i % 2 == 0)
//         console.log("El iterador vale " + i + " y debería ser par. BUCLE WHILE");

//     i++;
// }

// while(i <= 10) {

//     var e = 0;
//     while(e <= 20) {
//         console.log("La suma de los dos iteradores es: " + parseInt(i + e));

//         e++;
//     }
//     i++;
// }



// for(var i = 0; i <= 10; i++) {

//     switch(i % 2) {
//         case(0):
//             console.log("El número " + i + " es par");
//             break;
//         case(1):
//             console.log("El número " + i + " es impar");
//             break;
//     }
// }


// var array = ["Méjico", "España", "Francia", "Italia", "Perú", "Chile"];

// for (var i = 0; i < array.length; i++) {

//     console.log(array[i]);

//     if (i === array.length - 1) {
//         array.push("Nueva Caledonia xD");
//         console.log(array);

//         array.pop();
//         console.log(array);
//     }
// }


// *************************************************************************************

// var yo = {
//     nombre: 'Alberto',
//     apellidos: 'Escobar de la Cruz',
//     edad: 23,
//     pais: 'España'
// }

// for (var propiedad in yo) {
//     if (propiedad !== 'edad' && propiedad !== 'pais')
//         console.log(propiedad + " de la persona: " + yo[propiedad]);
// }

// *************************************************************************************

function Sumar (a, b) {
    console.log(a+b);
}

function AniadirACola (array, val) {
    array.push(val);
}

Sumar (5, 15);

var array = [];
AniadirACola(array, 5);
AniadirACola(array, 7);
AniadirACola(array, 6);
AniadirACola(array, 19);
AniadirACola(array, 52);

console.log("%c" + array, 'color: #fff; background-color: red;');
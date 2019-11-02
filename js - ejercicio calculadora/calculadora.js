
// let opcionElegida;

// // Menú 1
// do {
//     let mensaje = 'Introduce la operación que desees: \n \
//     1 - Suma\n \
//     2 - Resta\n \
//     3 - Multiplicación\n \
//     4 - División\n \
//     5 - Salir';

//     opcionElegida = prompt(mensaje);

// } while(opcionElegida < 1 || opcionElegida > 5);

// if (opcionElegida != '5') {

//     let valores = [];
//     let nuevovalor;
//     let contadorvalores = 0;

//     do {
//         let mensaje = 'Introduce valor ' + contadorvalores+1 + ', o introduce # para dejar de introducir valores y realizar el cálculo';

//         nuevovalor = parseInt(prompt(mensaje));
//         valores[contadorvalores] = nuevovalor;

//         contadorvalores++;

//     } while (!isNaN(nuevovalor));

//     valores.pop();


//     let resultado = 0;

//     for(let i = 0; i < valores.length; i++) {

//         switch (opcionElegida) {
//             case '1':
//                     resultado = resultado + valores[i];
//                 break;
//             case '2':
//                     resultado = resultado - valores[i];
//                 break;
//             case '3': 
//                 resultado = resultado * valores[i];
//                 break;
//             case '4':
//                     resultado = resultado / valores[i];
//                 break;
//         }
//     }

//     alert(resultado);
// }

class Calc {

    constructor() {
        this.result = 0;
    }

    sum(val) {

        console.log(this.result + ' + ' + val + ' = ');
        this.result += val;
        console.log(this.result);
    }

    rest(val) {

        console.log(this.result + ' + ' + val + ' = ');
        this.result += val;
        console.log(this.result);
    }
}

varmodule = (function () {// Esta variable es privada
    varprivateProperty = 'Soy una variable privada!!!'; 
    return { publicProperty: 'Soy una variable pública',
     publicMethod: function (args) {
        // do something
        console.log("Método público " + privateProperty);    
        },  
    };
})();
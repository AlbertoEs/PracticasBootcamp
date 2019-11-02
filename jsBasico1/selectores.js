function IncrementarPersonas() {

    var contador = document.querySelector('#contador');
    var numPersonas = parseInt(contador.innerText);

    numPersonas++;

    contador.innerText = numPersonas.toString();
}

window.onload = function() {

    // var elementos = {
    //     titulo: {
    //         tipo: 'h1',
    //         texto: 'Número de personas'
    //     },
    //     contador: {
    //         tipo: 'p',
    //         texto: '0',
    //         id: 'contador'
    //     },
    //     boton: {
    //         tipo: 'button',
    //         texto: 'Añadir personas',
    //         onclick: IncrementarPersonas
    //     }
    // }

    // for (var elemento in elementos) {
    //     var elementoAniadir = document.createElement(elemento.tipo);
    //     elementoAniadir.innerText = elemento.texto;
    //     elementoAniadir.id = elemento.id;
    // }

    var titulo = document.createElement("h1");
    titulo.innerText = 'Número de personas';

    var contador = document.createElement("p");
    contador.innerText = '0';
    contador.id = 'contador';

    var boton = document.createElement("button");
    boton.innerText = 'Añadir personas';
    boton.onclick= IncrementarPersonas;

    var body = document.querySelector("body");
    body.appendChild(titulo);
    body.appendChild(contador);
    body.appendChild(boton);
}
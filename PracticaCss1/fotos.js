$(document).ready(function () {

    let numberColumns = 4;
    let numberLines = 6;

    let html = '';

    let image = `
    <figure class='product'>
        <img src='https://picsum.photos/200/300' alt='Imagen de ropa {{index}}'>
        <div class='productTags'>
            <div class='tag productTag'>Tag</div>
        </div>
        <figcaption>
            <p class='productName'>Camiseta iterada {{index}}</p>
            <p class='productPrice'>12,99€</p>
        </figcaption>
    </figure>`;

    let i = 1;

    // Líneas
    for (let lineNumber = 1; lineNumber <= numberLines; lineNumber++) {

        html += '<div class="productLine">';

        // Columnas
        for (let columnNumber = 1; columnNumber <= numberColumns; columnNumber++) {
            
            imageAdd = UseVar(image, 'index', i);
            html += imageAdd;

            i++;
        }

        html += '</div>';
    }

    $('main').html(html);
})


function UseVar(stringBase, variable, val) {
    return stringBase.replace(new RegExp('{{' + variable + '}}', 'g'), val);
}
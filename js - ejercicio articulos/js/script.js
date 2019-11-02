
window.onload = function() {

    document.querySelector(".btn-generar").addEventListener("click", function () {

        var titulo, imagen, autor, texto;

        // 1 - Obtención de valores
        titulo = document.querySelector("#titulo").value;
        imagen = document.querySelector("#imagen").value;
        autor = document.querySelector("#autor").value;
        texto = document.querySelector("#texto").value;

        // 2 - pintado en página
        document.querySelector(".bk-article__title").innerHTML = titulo;
        document.querySelector(".bk-article__img").src = imagen;

        var autorDoom = '<span class="bk-article__autor">' + autor + '</span>';
        var textoDoom = '<p class="bk-article__text">' + texto + '</p>';

        var articleDoom = document.querySelector(".bk-article");
        articleDoom.innerHTML = articleDoom.innerHTML + autorDoom + textoDoom;
    });
}
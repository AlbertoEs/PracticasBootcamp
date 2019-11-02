fetch('https://api.got.show/api/book/houses')
    .then(
        function(resultado) {

            resultado.json()
                .then((data) => {
                    console.log(data);
                });
        }
    );
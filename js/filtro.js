const barraPesquisa = document.querySelector("#input-pesquisa");

barraPesquisa.addEventListener("input", function() {
    const postagens = document.querySelectorAll(".postagem");

    postagens.forEach(element => {
        const tituloPostagem = element.querySelector(".titulo-postagem").textContent;
        const expressao = new RegExp(this.value, "i");

        if (!expressao.test(tituloPostagem)) {
            element.classList.add("hide");
        } else {
            element.classList.remove("hide");
        }
    });

});

const filtroLike = document.querySelector("#filtro-like");

filtroLike.addEventListener("click", function() {
    const postagens = document.querySelectorAll(".postagem");
    const favoritos = document.querySelectorAll(".favorito");

    postagens.forEach(element => {
        element.classList.add("hide");
    });
    
    favoritos.forEach(element => {
        element.classList.remove("hide");
    });

});

function exbirFavoritos () {

}
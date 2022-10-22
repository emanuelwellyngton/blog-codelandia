const botaoLike = document.querySelectorAll(".like");

botaoLike.forEach(elemento => {
    elemento.onclick = function() {
        elemento.setAttribute("fill", "#b83d3d");
        elemento.setAttribute("stroke", "none");

        const div = this.parentNode;
        div.parentNode.classList.add("favorito");

    }
});


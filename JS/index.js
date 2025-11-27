document.addEventListener("DOMContentLoaded", function () {
    let categorias = ["Remeras","Buzos","Pantalones","Gorras"];
    let ulCat = document.querySelector(".categoryul") || document.querySelector(".ul_categoria");

    if (ulCat) {
        let html = "";
        for (let i = 0; i < categorias.length; i++) {
            let slug = categorias[i].toLowerCase();
            html += '<li><a href="./category.html?name=' + slug + '">' + categorias[i] + '</a></li>';
        }
        ulCat.innerHTML = html;
    }

    let imgs = document.querySelectorAll("img");
    for (let i = 0; i < imgs.length; i++) {
        let img = imgs[i];
        img.addEventListener("mouseover", function () {
            img.style.transform = "scale(1.05)";
            img.style.transition = "0.2s";
        });
        img.addEventListener("mouseout", function () {
            img.style.transform = "scale(1)";
        });
    }

    let detalles = document.querySelectorAll("a.produinfo, a[class^='info_product']");
    for (let i = 0; i < detalles.length; i++) {
        detalles[i].addEventListener("click", function () {
            alert("Se abrirá la página de detalle del producto.");
        });
    }
});

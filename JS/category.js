document.addEventListener("DOMContentLoaded", function () {
    let params = new URLSearchParams(location.search);
    let nombre = params.get("name");

    let cont = document.querySelector(".categorias_productory") || document.querySelector(".categoryproducts");
    let titulo = document.querySelector(".categoriah1") || document.querySelector(".hcate");

    if (titulo) {
        if (nombre) {
            titulo.textContent = nombre.charAt(0).toUpperCase() + nombre.slice(1);
        } else {
            titulo.textContent = "Categoría";
        }
    }

    if (cont && nombre) {
        let items = cont.querySelectorAll(".product_div, .divcate");
        for (let i = 0; i < items.length; i++) {
            items[i].style.display = "block";
        }
    }

    let ulCat = document.querySelector(".categoryul") || document.querySelector(".ul_categoria");
    if (ulCat && ulCat.innerHTML.trim() === "") {
        let cats = ["Remeras","Buzos","Pantalones","Gorras"];
        let html = "";
        for (let i = 0; i < cats.length; i++) {
            let slug = cats[i].toLowerCase();
            html += '<li><a href="./category.html?name=' + slug + '">' + cats[i] + '</a></li>';
        }
        ulCat.innerHTML = html;
    }
});


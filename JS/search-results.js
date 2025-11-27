let formulario = document.querySelector("form.buscarbarra");
if (formulario) {
    formulario.addEventListener("submit", function (e) {
        let input = formulario.querySelector("input[name='buscar']");
        if (input.value.trim() === "") {
            alert("El campo de búsqueda no puede estar vacío.");
            e.preventDefault();
        } else if (input.value.trim().length < 3) {
            alert("El término buscado debe tener al menos 3 caracteres.");
            e.preventDefault();
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    let params = new URLSearchParams(location.search);
    let busq = params.get("buscar");

    let cont = document.querySelector(".resultados");
    let titulo = document.querySelector("main h2 span");
    let noRes = document.querySelector(".no-resultados");

    if (!cont || !titulo) return;

    if (!busq) {
        titulo.textContent = '"(sin término)"';
        return;
    }

    titulo.textContent = '"' + busq + '"';

    let productos = cont.querySelectorAll(".producto");
    let encontrados = 0;

    for (let i = 0; i < productos.length; i++) {
        let p = productos[i];
        let h3 = p.querySelector("h3");
        let texto = h3 ? h3.textContent.toLowerCase() : "";

        if (texto.indexOf(busq.toLowerCase()) !== -1) {
            p.style.display = "block";
            encontrados++;
        } else {
            p.style.display = "none";
        }
    }

    if (encontrados === 0 && noRes) {
        noRes.textContent = "No se encontraron productos.";
        noRes.style.display = "block";
    }
});

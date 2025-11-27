document.addEventListener("DOMContentLoaded", function () {
    let boton = document.querySelector(".boton_compra");
    if (!boton) return;

    boton.addEventListener("click", function () {
        let select = document.getElementById("talle");
        let talle = select ? select.value : "";
        alert("Producto agregado. Talle: " + talle);
    });
});

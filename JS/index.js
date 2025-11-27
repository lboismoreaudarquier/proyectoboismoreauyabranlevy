const formularios = document.querySelectorAll(".buscarbarra");

formularios.forEach(form => {
    form.addEventListener("submit", function(e) {
        const input = form.querySelector("input");
        if (input.value === "") {
            alert("Debes escribir algo para buscar.");
            e.preventDefault();
        }
    });
});

const botonLogin = document.querySelector(".button1");
if (botonLogin) {
    botonLogin.addEventListener("click", function () {
        const email = document.getElementById("email").value;
        const pass = document.getElementById("contraseña").value;

        if (email === "" || pass === "") {
            alert("Complete todos los campos.");
        } else {
            alert("Sesión iniciada.");
        }
    });
}

const botonCompra = document.querySelector(".boton_compra");
if (botonCompra) {
    botonCompra.addEventListener("click", function () {
        const talle = document.getElementById("talle").value;
        alert("Compraste el producto. Talle elegido: " + talle);
    });
}

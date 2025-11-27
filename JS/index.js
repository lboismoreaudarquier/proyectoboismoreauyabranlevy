const formulariosBusqueda = document.querySelectorAll(".buscarbarra");
formulariosBusqueda.forEach(form => {
    form.addEventListener("submit", function(e) {
        const input = form.querySelector("input[name='buscar']");
        if (input.value.trim() === "") {
            alert("Escriba algo para buscar.");
            e.preventDefault();
        }
    });
});

const botonLogin = document.querySelector(".button1");
if (botonLogin) {
    botonLogin.addEventListener("click", function () {
        const email = document.getElementById("email").value.trim();
        const pass = document.getElementById("contraseña").value.trim();

        if (email === "" || pass === "") {
            alert("Complete todos los campos.");
            return;
        }

        sessionStorage.setItem("usuario", email);
        alert("Inicio de sesión correcto.");
        window.location.href = "index.html";
    });
}

const usuario = sessionStorage.getItem("usuario");
const cajasUsuario = document.querySelectorAll(".usuario");

if (usuario) {
    cajasUsuario.forEach(caja => {
        caja.innerHTML = "Hola, " + usuario;
    });
}

const botonCompra = document.querySelector(".boton_compra");
if (botonCompra) {
    botonCompra.addEventListener("click", function () {
        const talle = document.getElementById("talle").value;
        alert("Producto agregado. Talle: " + talle);
    });
}

const resultados = document.querySelector(".resultados");
const sinResultados = document.querySelector(".no-resultados");

if (resultados && sinResultados) {
    const url = new URL(window.location.href);
    const busqueda = url.searchParams.get("buscar");

    if (busqueda) {
        let productos = resultados.querySelectorAll(".producto");
        let encontrados = 0;

        productos.forEach(producto => {
            let titulo = producto.querySelector("h3").textContent.toLowerCase();

            if (titulo.includes(busqueda.toLowerCase())) {
                producto.style.display = "block";
                encontrados++;
            } else {
                producto.style.display = "none";
            }
        });

        if (encontrados === 0) {
            sinResultados.textContent = "No se encontraron productos.";
            sinResultados.style.display = "block";
        }
    }
}

const botonesDetalle = document.querySelectorAll("a[class^='info_product']");
botonesDetalle.forEach(boton => {
    boton.addEventListener("mouseover", () => {
        boton.style.backgroundColor = "#ffca28";
        boton.style.color = "black";
    });
    boton.addEventListener("mouseout", () => {
        boton.style.backgroundColor = "#0b2c61";
        boton.style.color = "white";
    });
});

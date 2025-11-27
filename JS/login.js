document.addEventListener("DOMContentLoaded", function () {
    let boton = document.querySelector(".button1");
    if (!boton) return;

    boton.addEventListener("click", function () {
        let emailEl = document.getElementById("email");
        let passEl = document.getElementById("contraseña");

        let email = emailEl ? emailEl.value.trim() : "";
        let pass = passEl ? passEl.value : "";

        if (email === "" || pass === "") {
            alert("Complete todos los campos.");
            return;
        }

        if (pass.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres.");
            return;
        }

        localStorage.setItem("userEmail", email);
        alert("Inicio de sesión correcto.");
        location.href = "index.html";
    });
});

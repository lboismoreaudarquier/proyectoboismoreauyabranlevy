document.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector(".registerForm") || document.querySelector("form[action*='register']");
    if (!form) return;

    form.addEventListener("submit", function (e) {
        let emailEl = form.querySelector(".reg-email") || form.querySelector("input[type='email']");
        let passEl = form.querySelector(".reg-password") || form.querySelector("input[type='password']");
        let pass2El = form.querySelector(".reg-password2");

        let email = emailEl ? emailEl.value.trim() : "";
        let pass = passEl ? passEl.value : "";
        let pass2 = pass2El ? pass2El.value : "";

        if (email === "") {
            alert("El email es obligatorio.");
            e.preventDefault();
            return;
        }
        if (pass === "" || pass.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres.");
            e.preventDefault();
            return;
        }
        if (pass2El && pass !== pass2) {
            alert("Las contraseñas no coinciden.");
            e.preventDefault();
            return;
        }

        localStorage.setItem("userEmail", email);
    });
});
